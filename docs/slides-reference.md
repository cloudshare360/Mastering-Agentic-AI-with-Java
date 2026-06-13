# Mastering Agentic AI with Java - Slides Reference Table

**Source**: slides.md  
**Format**: Structured table for easy reference  
**Last Updated**: 2026-06-13

---

## Complete Slides Index

| SR No | Slide # | Content |
|-------|---------|---------|
| 1 | Slide 1 | **Title Slide**<br><br>Website: learn.telusko.com<br><br>*Image: Slide cover* |
| 2 | Slide 2 | **Course Overview - Main Topics**<br><br>**Spring AI:**<br>- RAG & Memory<br><br>**Fundamentals:**<br>- NLP to LLM<br>- Architecture<br><br>**Google ADK:**<br>- Workflow<br>- Agents<br><br>**LangChain4j:**<br>- Supervisor & P2P<br><br>**Build:**<br>- Travel Agent<br>- Support Bot<br>- E-Com AI |
| 3 | Slide 3 | **Step 01: Lay the Neural Foundation**<br><br>**Key Topics:**<br>- NLP Fundamentals<br>- Transformers<br>- LLMs in Java<br>- Deep Learning<br><br>**What is NLP and why it matters for AI engineers**<br><br>**Core NLP tasks:**<br>- Tokenization<br>- POS Tagging<br>- NER<br><br>**Sentiment analysis and text classification**<br><br>**Word2Vec and GloVe:** pre-transformer embeddings<br><br>**From classical NLP to Deep Learning to LLMs**<br><br>**Transformer architecture:** encoder and decoder<br><br>**BERT vs GPT:** bidirectional vs autoregressive<br><br>**Multi-head attention and positional encoding**<br><br>**LLMs: Types, Tokens and Limitations**<br><br>**Hallucination:** why it happens and how to reduce it<br><br>**API vs SDK vs Framework:** which to pick<br><br>**OpenAI REST API calls directly from Java** |
| 4 | Slide 4 | **Step 02: Spring AI** |
| 5 | Slide 5 | *(Content blank in source - May have image only)* |
| 6 | Slide 6 | **Step 03: Google ADK** |
| 7 | Slide 7 | **Orchestrate Multi-Agent Workflows** |
| 8 | Slide 8 | **Step 04: LangChain4j** |
| 9 | Slide 9 | *(Content blank in source - May have image only)* |
| 10 | Slide 10 | *(Content blank in source - May have image only)* |
| 11 | Slide 11 | **Step 05: Build Autonomous Systems** |
| 12 | Slide 12 | **The Capstone: AI-Powered E-Com App**<br><br>**Frontend UI (React)** |
| 13 | Slide 13 | *(Content blank in source - May have image only)* |
| 14 | Slide 14 | **Instructors:**<br>- HYDER ABBAS<br>- NAVIN REDDY<br><br>learn.telusko.com |
| 15 | Slide 15 | **Course Details**<br><br>**Date:** June 14, 2026<br>**Duration:** 4 Months<br>**Prerequisites:** Java & Spring Boot<br>**Format:** Weekend (Sat & Sun, 9 AM - 12 PM IST)<br><br>**Syllabus Overview**<br><br>This course is engineered for Java developers transitioning from basic LLM integrations to building intelligent, autonomous AI systems. Theory is minimized; every concept is tied directly to production-ready Java code.<br><br>**Core Outcomes & Architecture:**<br><br>• **Frameworks:** Mastery of Spring AI 2.0, LangChain4j, and Google's Agent Development Kit (ADK).<br><br>• **Agentic Patterns:** Implement sequential, parallel, loop, conditional, supervisor, and peer-to-peer multi-agent systems.<br><br>• **Core Mechanisms:** Deep dive into prompt engineering (ReAct, CoT), Model Context Protocol (MCP), and tool calling.<br><br>• **Infrastructure:** Integrate Vector Databases (PGVector, Redis, ChromaDB) and construct advanced RAG pipelines.<br><br>• **Production Deployment:** Implement multimodal AI, model evaluation, fine-tuning on AWS SageMaker, and observability using Grafana and Prometheus.<br><br>• **Projects:** Build an AI Travel Planner Agent using Google ADK, an AI Customer Support Bot using LangChain4j, and an AI-powered e-commerce backend featuring smart product search, conversational assistant, order management agents, and full monitoring. |
| 16 | Slide 16 | **Block 1: Foundations - Detailed Syllabus**<br><br>**NLP FUNDAMENTALS**<br>- What is NLP, and why does it matter for AI engineers<br>- Core NLP tasks: Tokenization, POS Tagging, NER<br>- Sentiment analysis and text classification<br>- Word2Vec and GloVe: pre-transformer embeddings<br>- From classical NLP to Deep Learning to LLMs (the bridge)<br><br>**What is Agentic AI**<br>- What is Agentic AI and why it matters right now<br>- Autonomous agents vs traditional LLM chat applications<br>- Key properties of agents: reasoning, planning, memory, and tool use<br>- Agentic AI in the real world: industry use cases and adoption<br>- Frameworks we will cover: Spring AI, Google ADK, LangChain4j, and MCP<br><br>**AI, ML, Deep Learning & Transformers**<br>- AI / ML / DL hierarchy<br>- Neural network fundamentals: weights, layers, and activation<br>- Attention mechanism deep dive<br>- Transformer architecture: encoder and decoder<br>- BERT vs GPT and their use cases<br><br>**LLMs: Types, Tokens & Limitations**<br>- Types of LLMs: open source vs closed source<br>- Tokens, context windows, and output generation<br>- Temperature, top-p, and sampling strategies<br>- Hallucination: why it happens and how to reduce it<br>- Cost, latency, and rate limits in production<br><br>**Java + LLMs: First Code**<br>- API vs SDK vs Framework: which to pick<br>- OpenAI REST API calls directly from Java<br>- Official OpenAI Java SDK walkthrough<br>- Exploring other Java AI SDKs<br>- Building your first AI-powered Java app<br><br>**Hugging Face Integration**<br>- What is Hugging Face<br>- HF Inference API: setup and authentication<br>- Calling HF API from Java (REST)<br>- Spring AI + Hugging Face provider |
| 17 | Slide 17 | **Block 2: Spring AI - Detailed Syllabus**<br><br>**Spring AI Introduction**<br>- Why Spring AI for Java developers<br>- Spring AI 2.0 architecture overview<br>- Model providers overview: OpenAI, Anthropic, Azure, Ollama, Hugging Face<br>- Spring AI auto-configuration and starters<br>- Spring AI use cases for backend Java developers<br>- Spring AI docs walkthrough<br>- Creating a Spring AI project from scratch<br><br>**ChatClient & Prompts**<br>- Memory & Advisors<br>- Open Source Models + Prompt Engineering<br>- Create OpenAI API key and configure Spring AI<br>- ChatModel vs ChatClient: understanding the difference<br>- Message types: SystemMessage, UserMessage, AssistantMessage<br>- ChatClient fluent API deep dive<br>- ChatResponse, Generation, and Metadata<br>- ChatClient.Builder pattern and default system prompt configuration<br>- PromptTemplate and template variables<br>- StringTemplate (.st) files for complex prompt management<br>- Multi-turn conversations with ChatClient<br><br>**Spring AI Advisors framework explained**<br>- MessageChatMemoryAdvisor and PromptChatMemoryAdvisor<br>- InMemoryChatMemoryRepository<br>- JdbcChatMemoryAdvisor with database persistence<br>- QuestionAnswerAdvisor for RAG integration<br>- SafeGuardAdvisor for content moderation<br>- Built-in Advisors overview<br>- Building Custom Advisors<br>- Advisor ordering and chaining<br><br>**Running models locally with Ollama**<br>- Spring AI with Ollama configuration<br>- Prompt Template basics and use cases<br>- Few-shot prompting<br>- Chain-of-Thought (CoT) reasoning<br>- ReAct prompting pattern<br>- System Prompt vs User Prompt |
| 18 | Slide 18 | **Block 2: Spring AI (Continued) - Embeddings & RAG**<br><br>**Vector Embeddings**<br>- What are embeddings and vector spaces<br>- Embedding via OpenAI API client<br>- Embedding using Spring AI EmbeddingModel<br>- Comparing embedding models<br>- Visualizing similarity with cosine distance<br><br>**Vector Databases**<br>- PGVector & Redis Vector Store<br>- Cosine similarity: theory and Java implementation<br>- Vector DB introduction and options<br>- SimpleVectorStore for local dev and testing<br>- Token Text Splitter strategies<br>- Metadata and filtering in vector stores<br>- PGVectorStore introduction and setup<br>- PGVector with Docker<br>- PGVector implementation in Spring AI<br>- Redis Vector Store configuration<br>- Redis Vector Store queries and search<br><br>**RAG: Basics**<br>- What is RAG, and why does it work<br>- Basic RAG implementation in Spring AI<br>- DocumentReaders: PDF, Web, JSON, and Markdown loaders<br>- DocumentTransformers pipeline<br>- RetrievalAugmentationAdvisor in Spring AI 2.0<br><br>**Advanced RAG**<br>- Hybrid search: keyword + semantic combined<br>- Metadata filtering strategies<br>- Reranking post-retrieval results<br>- VectorStoreDocumentRetriever and configuration<br>- Semantic caching for cost reduction |
| 19 | Slide 19 | **Block 2: Spring AI (Continued) - Tool Calling & Multimodality**<br><br>**Tool Calling**<br>- Tool calling concepts and the ReAct pattern<br>- Tool calling in Spring AI: basics<br>- Defining and registering tools with @Tool<br>- Chained tool calls and multi-step reasoning<br><br>**MCP: Model Context Protocol**<br>- MCP overview and architecture<br>- MCP in Spring AI setup<br>- Building an MCP server in Java<br>- MCP client integration<br>- MCP + Tool Calling working together<br><br>**Multimodality: Images**<br>- OpenAI image model (DALL-E 3) overview<br>- ImagePrompt and ImageResponse<br>- Image generation options and parameters<br>- Describe image feature: vision input<br>- Implementing image understanding in Spring AI<br><br>**Multimodality: Audio**<br>- Audio models overview: STT and TTS<br>- Audio transcription (Whisper): part 1<br>- Audio transcription: part 2 and edge cases<br>- Transcription options and language tuning<br>- TTS speech model and voice options<br><br>**Output Converters**<br>- Structured Output Converter<br>- List Output Converter<br>- Bean Output Converter<br>- Bean Output Converter with List<br>- When to use each converter pattern |
| 20 | Slide 20 | **Block 2: Spring AI (Continued) - Fine-tuning & Production**<br><br>**Fine-tuning & Cloud Model Hosting**<br>- What is Fine-tuning<br>- When to Fine-tune vs RAG vs Prompt Engineering<br>- Fine-tuning with OpenAI API (demo)<br>- AWS SageMaker overview for AI engineers<br>- Fine-tuning and deploying a model on SageMaker<br>- Calling SageMaker endpoints from Spring AI<br><br>**Streaming, Observability & Production**<br>- Streaming responses in Spring AI<br>- Prompt caching for cost optimization<br>- Guardrails and content moderation<br>- Spring AI observability integration<br>- Rate limiting, retry, and error handling patterns<br><br>**Monitoring with Grafana & Prometheus**<br>- Prometheus metrics setup in Spring Boot<br>- Spring AI metrics and tracing<br>- Grafana dashboard for AI app monitoring<br>- Production deployment best practices<br>- Performance tuning for LLM-backed apps<br><br>**Model Evaluation**<br>- Why model evaluation matters<br>- Spring AI Evaluator API overview<br>- RelevancyEvaluator: checking answer relevance<br>- FactCheckingEvaluator: grounding responses<br>- Custom Evaluators with Spring AI<br>- Evaluation metrics: faithfulness, precision, and recall<br>- Automated evaluation pipeline setup |
| 21 | Slide 21 | **Block 3: Google ADK - Detailed Syllabus**<br><br>**Google ADK: Introduction & Architecture**<br>- What is Google ADK and why use it for Java<br>- ADK architecture overview: Agents, Tools, Sessions, Memory, Runner<br>- ADK for Java vs ADK for Python: key differences<br>- Setting up Google ADK in a Java project<br>- ADK Web UI, CLI, and API Server: four ways to run agents<br><br>**Google ADK: Building Your First Agent**<br>- LlmAgent: structure and configuration<br>- Writing agent instructions effectively<br>- Model selection for ADK: Gemini, Claude, Ollama<br>- Agent Config: temperature, tokens, and safety settings<br>- Running and testing your first ADK agent<br><br>**Google ADK: Tools & Function Calling**<br>- Function tools in ADK: basics and setup<br>- Adding tools to LlmAgent<br>- OpenAPI tools integration<br>- Tool authentication and limitations<br>- MCP tools with ADK: McpToolset class<br><br>**Google ADK: Sessions, State & Memory**<br>- Runner, Session, and State explained<br>- InMemory Session Service<br>- Persistent session management<br>- Adding memory to ADK agents<br>- Context management and context compression in ADK |
| 22 | Slide 22 | **Block 3: Google ADK (Continued) - Workflows & Multi-Agent**<br><br>**Google ADK: Workflow Agents**<br>- Sequential agents: chaining tasks in order<br>- Parallel agents: concurrent execution<br>- Loop agents: iterative task refinement<br>- Custom agents: building your own agent logic<br>- Agent routing and conditional flows<br>- Human-in-the-Loop (HITL) Workflows<br><br>**Google ADK: Multi-Agent Systems**<br>- Multi-agent architecture overview<br>- Orchestrator and sub-agent patterns<br>- Agent-to-Agent (A2A) communication protocol<br>- A2A in Java: exposing and consuming agents<br>- Debugging and tracing multi-agent flows<br><br>**Google ADK: Callbacks, Artifacts & Guardrails**<br>- Callbacks: before and after model and tool execution<br>- Callback design patterns and best practices<br>- Artifacts: managing files and binary outputs<br>- Implement guardrails and safety settings<br>- Grounding with Google Search and Vertex AI<br><br>**Google ADK: Observability & Deployment**<br>- Observability: logging, metrics, and traces<br>- Evaluating ADK agents: criteria and custom metrics<br>- Deploying agents to Cloud Run using ADK command<br>- Deploying agents to GKE with Docker<br>- Production best practices for ADK agents |
| 23 | Slide 23 | **Block 4: LangChain4j - Detailed Syllabus**<br><br>**LangChain4j: Introduction**<br>- What is LangChain4j, and why use it<br>- LangChain4j vs Spring AI: when to pick which<br>- Setting up LangChain4j in a Spring Boot project<br>- Chat and Language Models low-level API<br>- Model parameters: temperature, top-p, timeouts<br>- First chatbot with LangChain4j<br><br>**LangChain4j: AI Services, Memory & Streaming**<br>- AI Services and declarative interface with @AiService<br>- Chat Memory: MessageWindowChatMemory and TokenWindowChatMemory<br>- ConversationMemory and memory providers<br>- Streaming responses with TokenStream<br>- Structured Outputs in LangChain4j<br>- Text Classification with AI Services<br>- Guardrails: input and output validation<br>- Logging and Observability in LangChain4j<br><br>**LangChain4j: Tool Calling**<br>- Tool calling concepts in LangChain4j<br>- @Tool and @P annotations<br>- Chained tool calls and multi-step reasoning<br>- Tool calling with AI Services<br>- Dynamic tool providers<br><br>**LangChain4j: MCP**<br>- MCP overview in LangChain4j context<br>- MCP client setup in LangChain4j<br>- Building a Java MCP stdio server<br>- Connecting MCP server to AI Services<br>- MCP + Tool Calling working together |
| 24 | Slide 24 | **Block 4: LangChain4j (Continued) - Agentic Workflows**<br><br>**LangChain4j: Agentic Workflows**<br>- The langchain4j-agentic module overview<br>- @Agent annotation and AgenticServices<br>- AgenticScope: shared state across agents<br>- Sequential workflow: chaining agents in order<br>- Loop workflow: iterative refinement with exit conditions<br>- Parallel workflow: running agents simultaneously<br>- Parallel Mapper workflow: fan-out over collections<br>- Conditional workflow: routing based on LLM classification<br>- Optional agents and async agents<br>- Streaming agents in agentic workflows<br>- Error handling and recovery in agentic systems<br>- AgentListener and AgentMonitor for observability<br>- Human-in-the-loop agents<br>- Non-AI agents inside agentic systems<br>- Declarative API for defining workflows with annotations<br><br>**LangChain4j: Supervisor & Pure Agentic AI**<br>- Pure agentic AI vs deterministic workflows<br>- SupervisorAgent: autonomous planning and execution<br>- AgentInvocation planning and response strategies<br>- Supervisor context and context engineering<br>- Goal-Oriented agentic pattern (GOAP)<br>- Peer-to-Peer (P2P) agentic pattern<br>- Building custom Planner implementations<br>- Memory and context sharing across agents in a system<br>- AgentMonitor HTML report generation<br>- Strongly typed inputs and outputs with TypedKey<br><br>**LangChain4j: RAG & Spring Boot Integration**<br>- RAG with LangChain4j EmbeddingStore<br>- Document loaders in LangChain4j<br>- LangChain4j + PGVector / ChromaDB<br>- Integrating LangChain4j into Spring Boot app<br>- Testing and Evaluation of LangChain4j AI apps<br>- LangChain4j vs Spring AI RAG: side-by-side comparison |
| 25 | Slide 25 | **Block 5: Projects - Capstone & Build**<br><br>**Capstone: E-com AI Features**<br>- Project intro: E-com AI architecture overview<br>- UI with AI integration<br>- ChatClient-backed product assistant<br>- AI Image Generator (DALL-E) for products<br>- Ask AI feature: conversational product help<br><br>**Mini Project: AI Travel Planner Agent (Google ADK)**<br>- Build a travel planning agent using Google ADK<br>- Agent takes destination, budget, and dates as input<br>- Uses tools to search flights, hotels, and attractions<br>- Multi-agent: one for flights, one for hotels, one for itinerary<br>- Final agent compiles and returns a complete travel plan<br><br>**Mini Project: AI Customer Support Bot (LangChain4j)**<br>- Build a customer support chatbot using LangChain4j<br>- RAG-powered: answers from product documents and FAQs<br>- Conversation memory to maintain context across messages<br>- Tool calling to check order status and raise tickets<br>- Agentic workflow: routes queries to the right department agent<br><br>**Capstone: RAG, Agents & Monitoring**<br>- Setting up PGVector in the project<br>- Embedding product and order data<br>- Product Smart Search with semantic vector queries<br>- Advanced RAG upgrade in the project<br>- Tool Calling + ADK agent for order management<br>- Full monitoring setup and production deployment |

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| **Total Slides** | 25 |
| **Slides with Content** | 20 |
| **Slides Image-Only** | 5 |
| **Major Blocks** | 5 |
| **Total Topics Covered** | 150+ |

---

## Content Distribution by Block

### Block 1: Foundations (Slide 3 - 3)
- **Topics**: NLP, Transformers, LLMs, Java Integration
- **Key Areas**: 6 subsections with ~25 topics
- **Focus**: Neural network fundamentals and first code

### Block 2: Spring AI (Slides 2, 17-20)
- **Topics**: Framework, ChatClient, Memory, Embeddings, RAG, Tool Calling
- **Key Areas**: 8 major sections
- **Focus**: Production-ready Spring AI implementations

### Block 3: Google ADK (Slides 6-7, 21-22)
- **Topics**: Agent Architecture, Workflows, Multi-Agent Systems
- **Key Areas**: 6 major sections
- **Focus**: Orchestrating complex agent systems

### Block 4: LangChain4j (Slides 8, 23-24)
- **Topics**: AI Services, Agentic Workflows, Supervisor Agents
- **Key Areas**: 5 major sections
- **Focus**: Pure agentic AI patterns

### Block 5: Projects (Slide 25)
- **Topics**: Travel Planner, Support Bot, E-Commerce
- **Key Areas**: 4 capstone projects
- **Focus**: Real-world applications

---

## Navigation Guide

### Quick Find by Topic

| Topic | Slide(s) |
|-------|---------|
| NLP Fundamentals | 3, 16 |
| Transformers & Attention | 3, 16 |
| LLMs Basics | 3, 16, 20 |
| Spring AI Framework | 2, 17-20 |
| Vector Databases | 18 |
| RAG Implementation | 18, 24 |
| Tool Calling | 19, 23 |
| Google ADK Agents | 6-7, 21-22 |
| Multi-Agent Systems | 22 |
| LangChain4j Agentic | 24 |
| Capstone Projects | 25 |

---

## Course Timeline & Prerequisites

**Start Date**: June 14, 2026  
**Duration**: 4 Months  
**Format**: Weekend (Sat & Sun, 9 AM - 12 PM IST)  
**Prerequisites**: Java & Spring Boot  

---

## Instructors

- **HYDER ABBAS**
- **NAVIN REDDY**

**Platform**: learn.telusko.com

---

**Table Format Created**: 2026-06-13  
**Source**: slides.md (well-formatted extraction)  
**Status**: Complete Reference Table
