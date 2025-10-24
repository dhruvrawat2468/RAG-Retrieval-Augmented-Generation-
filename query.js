import readlineSync from 'readline-sync';
import * as dotenv from 'dotenv';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { GoogleGenAI } from "@google/genai";
import { Pinecone } from '@pinecone-database/pinecone';
dotenv.config();

const ai = new GoogleGenAI({});  // initialize the AI model with empty history
const History = []



async function transformQuery(question){

History.push({
    role:'user',
    parts:[{text:question}]
    })  

const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History,
    config: {
      systemInstruction: `You are a query rewriting expert. Based on the provided chat history, rephrase the "Follow Up user Question" into a complete, standalone question that can be understood without the chat history.
    Only output the rewritten question and nothing else.
      `,
    },
 });
 
 
 return response.text


}

async function chatting(question){
    const embeddings = new GoogleGenerativeAIEmbeddings({          
    apiKey: process.env.GEMINI_API_KEY,
    model: 'text-embedding-004',
    });
    const query=await transformQuery(question);   
 
 const queryVector = await embeddings.embedQuery(query);   //directly converts the usr query into embedding

const pinecone = new Pinecone();
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME); //making connection with pinecone
const searchResults = await pineconeIndex.query({
    topK: 10,
    vector: queryVector,
    includeMetadata: true,
    });
    const context = searchResults.matches       //creating context from matches, which is an arr of objects inside the searchresults, which comprises of an object entity called metadata, out of which the text value is needed
                   .map(match => match.metadata.text)
                   .join("\n\n---\n\n");
    History.push({
    role:'user',
    parts:[{text:question}]
    })              



    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History,
    config: {
      systemInstruction: `You have to behave like a Data Structure and Algorithm Expert.
    You will be given a context of relevant information and a user question.
    Your task is to answer the user's question based ONLY on the provided context.
    If the answer is not in the context, you must say "I could not find the answer in the provided document."
    Keep your answers clear, concise, and educational.
      
      Context: ${context}
      `,
    },
   });


   History.push({
    role:'model',
    parts:[{text:response.text}]
  })

  console.log("\n");
  console.log(response.text);
}

async function main(){
   const userProblem = readlineSync.question("Ask me anything--> ");
   await chatting(userProblem);
   main();
}




main();


