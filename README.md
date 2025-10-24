<h1> DSA Chatbot — Retrieval Augmented Generation (RAG) using LangChain, Pinecone & Gemini AI</h1>

<p>
This project is a <b>Retrieval-Augmented Generation (RAG)</b> implementation that allows users to ask <b>Data Structures & Algorithms (DSA)</b> questions directly through the terminal.  
It uses a digitalized DSA book (PDF) as its knowledge source and generates answers using <b>Gemini AI</b>, powered by <b>LangChain</b> and <b>Pinecone</b>.
</p>

<hr/>

<h2>🚀 Features</h2>

<ul>
  <li>📚 Upload any DSA (or similar) book as a <b>PDF knowledge base</b></li>
  <li>🧩 Automatically <b>chunks</b>, <b>vectorizes</b>, and <b>stores</b> the content in <b>Pinecone</b></li>
  <li>💬 Ask any <b>DSA-related question</b> through the terminal</li>
  <li>🤖 <b>Gemini 2.0 Flash</b> provides accurate, context-grounded answers</li>
  <li>🧠 Full <b>RAG pipeline</b> implemented from scratch — no black-box APIs</li>
</ul>

<hr/>

<h2>🛠️ Setup Instructions</h2>

<p>Follow these steps and write the follwoing lines in the terminal/ command prompt carefully to run the chatbot on your local machine 👇</p>

<h3>1️⃣ Clone the Repository</h3>

<pre><code>git clone https://github.com/yourusername/dsa-rag-chatbot.git
cd dsa-rag-chatbot
</code></pre>

<h3>2️⃣ Install Dependencies</h3>

<p>Make sure you have <b>Node.js (v18 or later)</b> installed.</p>

<pre><code>npm install
</code></pre>

<p>This installs all required dependencies such as LangChain, Pinecone, and Gemini AI SDK.</p>

<h3>3️⃣ Download the DSA Book</h3>

<ul>
  <li>Place your <b>DSA book PDF</b> inside the project folder.</li>
  <li>Rename it to match the filename used in the code (for example: <code>dsa.pdf</code>).</li>
  <li>Or update the <code>PDF_PATH</code> variable in the code if your file has a different name.</li>
</ul>

<h3>4️⃣ Set Up Environment Variables</h3>

<p>Create a new file named <code>.env</code> in the project’s root directory and add the following lines:</p>

<pre><code>GEMINI_API_KEY=YOUR_GOOGLE_API_KEY
PINECONE_API_KEY=YOUR_PINECONE_API_KEY
PINECONE_ENVIRONMENT=YOUR_PINECONE_ENVIRONMENT
PINECONE_INDEX_NAME=YOUR_PINECONE_INDEX_NAME
</code></pre>

<h4>How to get these keys:</h4>

<ul>
  <li><b>GEMINI_API_KEY</b> → Get it from <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a></li>
  <li><b>PINECONE_API_KEY</b> → Create an account at <a href="https://www.pinecone.io/" target="_blank">Pinecone</a>, make an index, and copy your API key</li>
  <li><b>PINECONE_ENVIRONMENT</b> → Choose the region nearest to you (e.g., <code>us-east-1</code>)</li>
  <li><b>PINECONE_INDEX_NAME</b> → The name of the index you create on Pinecone</li>
</ul>

<hr/>

<h3>5️⃣ Run the Scripts</h3>

<h4>Step 1: Process the PDF and store embeddings</h4>

<pre><code>node index.js
</code></pre>

<p>This script will:</p>
<ul>
  <li>Load your DSA PDF</li>
  <li>Chunk and vectorize the content</li>
  <li>Store the embeddings into your Pinecone index</li>
</ul>

<p>Wait until you see:</p>
<pre><code>Converted to vectors and stored in Pinecone index.
</code></pre>

<h4>Step 2: Start chatting with your DSA assistant</h4>

<pre><code>node query.js
</code></pre>

<p>Now, type your questions in the terminal:</p>
<pre><code>Ask me anything--> What is the time complexity of merge sort?
</code></pre>

<p>Gemini will respond based on your uploaded DSA book 📖</p>

<hr/>

<h3>6️⃣ (Optional) Modify the Source</h3>

<ul>
  <li>Change chunk sizes in <code>index.js</code></li>
  <li>Experiment with different embedding models</li>
  <li>Add new PDFs for different domains</li>
  <li>Tweak Gemini’s system instructions for custom tone or depth</li>
</ul>

<hr/>

<h2>📁 Project Structure</h2>

<pre><code>📂 dsa-rag-chatbot/
├── 📄 index.js            # Converts your DSA PDF into embeddings and stores in Pinecone
├── 📄 query.js            # Handles user queries and RAG-based responses
├── 📄 .env                # Environment variables (not tracked by Git)
├── 📄 .gitignore          # Common ignores for Node.js projects
├── 📄 package.json        # Dependencies and scripts
└── 📄 dsa.pdf             # Your DSA book (add manually)
</code></pre>

<hr/>

<h2>💡 Notes</h2>

<ul>
  <li>🚫 Do <b>not</b> upload your <code>.env</code> or <code>.pdf</code> files to GitHub (they are ignored by <code>.gitignore</code>).</li>
  <li>⚙️ If you face Pinecone authentication errors, double-check your environment variables.</li>
  <li>📘 You can replace the DSA PDF with <b>any other subject</b> — it works with any topic!</li>
</ul>

<hr/>

<ul>
  <li>⭐ Star this repo if you find it helpful</li>
  <li>🪄 Fork it and make your own version</li>
  <li>💬 Open issues or pull requests for improvements</li>
</ul>

<p>Let’s learn, build, and share knowledge together! 🚀</p>
