# Module 1.1: NLP Fundamentals & Why It Matters

## 📚 Theory Section

### What is NLP and Why It Matters for AI Engineers

**Natural Language Processing (NLP)** is the intersection of linguistics, computer science, and AI that focuses on enabling machines to understand, interpret, and generate human language.

#### Why NLP Matters for AI Engineers:
1. **Foundation for LLMs**: All modern Large Language Models are built on NLP principles
2. **Real-world Applications**: 80% of business data is unstructured text
3. **Bridge to AI**: NLP connects raw text to actionable intelligence
4. **Career Relevance**: NLP skills are highly demanded in AI/ML roles

### Core NLP Tasks

#### 1. **Tokenization**
Breaking text into meaningful units (words, subwords, or characters).

```
Text: "The quick brown fox jumps."
Tokens: ["The", "quick", "brown", "fox", "jumps", "."]
```

**Why it matters**: Foundation for all downstream NLP tasks. Different tokenization affects model performance.

#### 2. **Part-of-Speech (POS) Tagging**
Labeling each token with its grammatical role.

```
Tokens: ["The", "quick", "brown", "fox", "jumps"]
POS: [DET, ADJ, ADJ, NOUN, VERB]
```

**Why it matters**: Helps understand sentence structure and extract meaning.

#### 3. **Named Entity Recognition (NER)**
Identifying and classifying named entities (people, places, organizations, etc.).

```
Text: "Apple was founded by Steve Jobs in Cupertino."
Entities: {
  "Apple": ORGANIZATION,
  "Steve Jobs": PERSON,
  "Cupertino": LOCATION
}
```

**Why it matters**: Extract structured information from unstructured text.

#### 4. **Sentiment Analysis**
Determining the emotional tone of text.

```
Text: "This product is amazing!"
Sentiment: POSITIVE (0.92)
```

**Why it matters**: Understanding user opinions, feedback, and satisfaction.

#### 5. **Text Classification**
Assigning text to predefined categories.

```
Text: "I'm locked out of my account"
Category: SUPPORT_ISSUE
```

**Why it matters**: Route queries, categorize documents, content moderation.

### Word Embeddings: Word2Vec and GloVe

**Embedding** = Converting words into numerical vectors that capture meaning.

#### Word2Vec (2013)
Two approaches:
- **CBOW (Continuous Bag of Words)**: Predict word from context
- **Skip-gram**: Predict context from word

```
Word: "king"
Vector: [0.2, 0.5, -0.3, 0.8, ...]

Key Property: "king" - "man" + "woman" ≈ "queen"
```

#### GloVe (Global Vectors)
Combines global matrix factorization with local context windows.

```
Word: "king"
Vector: [0.3, 0.6, -0.2, 0.7, ...]

Better captures global statistics while preserving local context
```

**Why embeddings matter**: 
- Represent meaning as numbers (ML models need numbers)
- Similar words have similar vectors
- Enable semantic operations

### From Classical NLP to Deep Learning to LLMs

```
Timeline:
1960s-2000s: Rule-based NLP
  - Hand-crafted rules
  - Pattern matching
  - Limited to specific domains
  
2000s-2010s: Statistical NLP
  - Probability models (Hidden Markov Models, CRFs)
  - Feature engineering critical
  - Word embeddings emerge
  
2010s: Deep Learning (Neural Networks)
  - RNNs, LSTMs handle sequences
  - Attention mechanisms improve performance
  - Transfer learning becomes viable
  
2017+: Transformers & LLMs
  - Parallel processing (faster training)
  - Self-attention captures long-range dependencies
  - Pre-trained models ready to use
  - In-context learning & few-shot prompting
```

### The Bridge: Why Transformers Changed Everything

**Classical approach problem**: 
```
"The bank is by the river" (LOCATION)
"I need to go to the bank" (FINANCIAL)
```
Classical models struggled with ambiguity without context.

**Transformer solution**:
```
Attention mechanism:
- Every word "looks at" every other word
- Context flows bidirectionally
- Capture relationships across entire sentence
- Handle ambiguity through context
```

**Key insight**: Transformers process entire text in parallel → faster and better.

---

## ❓ Evaluation Questions

Answer these questions to test your understanding:

### Basic Understanding (Must answer all)
1. **Define tokenization and give a real-world reason why it matters.**
2. **What is the difference between Word2Vec and GloVe?**
3. **Explain what "embedding" means in your own words.**
4. **Name 3 core NLP tasks and briefly describe each.**

### Application (Test deeper understanding)
5. **Why did transformers replace RNNs despite both being neural networks?**
6. **If you wanted to detect spam emails, which NLP task would you use first and why?**
7. **In the sentence "I saw the bank robber with the telescope", why would classical NLP struggle?**

### Critical Thinking (Strengthen synthesis)
8. **How do embeddings enable machines to understand meaning?**
9. **Why is it important to understand the evolution from classical NLP to LLMs?**

---

## ❓ Evaluation Answers (Check Your Work)

### Basic Understanding
1. **Tokenization**: Breaking text into individual tokens (words/subwords). Matters because different tokenization strategies affect how models understand language. Different languages need different strategies.

2. **Word2Vec vs GloVe**:
   - Word2Vec: Uses local context windows (Skip-gram/CBOW)
   - GloVe: Combines local context windows with global co-occurrence statistics

3. **Embedding**: Converting words/tokens into numerical vectors where the vector represents meaning. Similar words have similar vectors.

4. **3 NLP tasks**:
   - Tokenization: Breaking text into tokens
   - NER: Identifying named entities (people, places, organizations)
   - Sentiment Analysis: Determining emotional tone (positive/negative/neutral)

### Application
5. **Why transformers > RNNs**: Transformers use parallel attention (all words see each other) vs RNNs process sequentially. This is faster, handles long-range dependencies better, and enables pre-training at scale.

6. **Spam detection**: Start with **Text Classification** to categorize emails as spam/not-spam. Could also use NER to detect suspicious entities or Sentiment Analysis for tone.

7. **"saw with telescope" ambiguity**: Classical NLP can't determine if "with telescope" modifies "saw" (tool used to see) or "robber" (robber had telescope). Transformers handle this through bidirectional attention across the full sentence.

8. **How embeddings enable meaning**: 
   - Words are converted to numbers
   - Similar concepts have similar numbers (vectors)
   - Math operations on vectors (addition, subtraction) capture linguistic relationships
   - Models can measure distance/similarity between meanings

9. **Why learn the evolution**: Understanding this history shows why we use LLMs today. Each step (rules → statistics → neural → transformers) solved problems of the previous approach. Knowledge prevents reinventing solutions.

---

## 💻 Hands-On Exercises

### Exercise 1: Tokenization Hands-On
**Objective**: Understand how tokenization affects meaning

**Setup**:
```bash
# Create a Java project (or use existing Spring Boot project)
cd your-project
```

**Code**:
```java
// Exercise1_Tokenization.java
import java.util.Arrays;

public class Exercise1_Tokenization {
    
    public static void main(String[] args) {
        // Simple tokenization strategies
        
        // Strategy 1: Split by spaces (naive)
        String text = "It's a beautiful day! Isn't it?";
        String[] tokens = text.split(" ");
        System.out.println("Strategy 1 - Split by space:");
        System.out.println("Tokens: " + Arrays.toString(tokens));
        // Problem: "It's" not split, punctuation attached
        
        // Strategy 2: Split by spaces AND remove punctuation
        String[] tokens2 = text.replaceAll("[^a-zA-Z\\s]", "")
                               .toLowerCase()
                               .split("\\s+");
        System.out.println("\nStrategy 2 - Remove punctuation:");
        System.out.println("Tokens: " + Arrays.toString(tokens2));
        // Problem: "isn" becomes separate from question context
        
        // Strategy 3: Keep punctuation as separate tokens
        String[] tokens3 = text.toLowerCase()
                               .replaceAll("([^a-zA-Z0-9\\s])", " $1 ")
                               .split("\\s+");
        System.out.println("\nStrategy 3 - Punctuation as tokens:");
        System.out.println("Tokens: " + Arrays.toString(tokens3));
        // Better: Preserves punctuation as signal
        
        System.out.println("\n=== KEY INSIGHT ===");
        System.out.println("Same text, different tokens = different model understanding");
    }
}
```

**Run it**:
```bash
javac Exercise1_Tokenization.java
java Exercise1_Tokenization
```

**Expected Output**:
```
Strategy 1 - Split by space:
Tokens: [It's, a, beautiful, day!, Isn't, it?]

Strategy 2 - Remove punctuation:
Tokens: [it, s, a, beautiful, day, isn, t, it]

Strategy 3 - Punctuation as tokens:
Tokens: [it, ', s, a, beautiful, day, !, isn, ', t, it, ?]

=== KEY INSIGHT ===
Same text, different tokens = different model understanding
```

**What you learned**: Different tokenization strategies lead to different representations. Professional NLP systems use sophisticated tokenizers (like BPE or WordPiece).

---

### Exercise 2: Sentiment Analysis Intuition
**Objective**: Understand how sentiment analysis works

**Code**:
```java
// Exercise2_SentimentAnalysis.java
import java.util.*;

public class Exercise2_SentimentAnalysis {
    
    static class SentimentAnalyzer {
        private Map<String, Float> sentimentScores = new HashMap<>();
        
        public SentimentAnalyzer() {
            // Positive words
            sentimentScores.put("amazing", 0.9f);
            sentimentScores.put("excellent", 0.95f);
            sentimentScores.put("great", 0.8f);
            sentimentScores.put("good", 0.7f);
            sentimentScores.put("love", 0.85f);
            
            // Negative words
            sentimentScores.put("terrible", -0.9f);
            sentimentScores.put("awful", -0.95f);
            sentimentScores.put("bad", -0.7f);
            sentimentScores.put("hate", -0.85f);
            sentimentScores.put("horrible", -0.9f);
        }
        
        public float analyze(String text) {
            String[] tokens = text.toLowerCase()
                                   .replaceAll("[^a-zA-Z\\s]", "")
                                   .split("\\s+");
            
            float totalScore = 0;
            int scoredWords = 0;
            
            for (String token : tokens) {
                if (sentimentScores.containsKey(token)) {
                    totalScore += sentimentScores.get(token);
                    scoredWords++;
                }
            }
            
            return scoredWords > 0 ? totalScore / scoredWords : 0;
        }
    }
    
    public static void main(String[] args) {
        SentimentAnalyzer analyzer = new SentimentAnalyzer();
        
        String[] testTexts = {
            "This product is amazing!",
            "It's terrible and awful!",
            "Good but not great",
            "I love this but hate the price"
        };
        
        for (String text : testTexts) {
            float score = analyzer.analyze(text);
            String sentiment = score > 0.5 ? "POSITIVE" : 
                              score < -0.5 ? "NEGATIVE" : "NEUTRAL";
            System.out.printf("Text: \"%s\"%n", text);
            System.out.printf("Score: %.2f -> %s%n%n", score, sentiment);
        }
    }
}
```

**Run it**:
```bash
javac Exercise2_SentimentAnalysis.java
java Exercise2_SentimentAnalysis
```

**What you learned**: 
- Sentiment analysis can be rule-based (simple but limited)
- Works by aggregating sentiment scores of words
- Limitations: Can't understand context ("Not good" = bad, but word "good" is positive)

---

### Exercise 3: Understanding Embeddings
**Objective**: See how embeddings work conceptually

**Code**:
```java
// Exercise3_WordEmbeddings.java
import java.util.*;

public class Exercise3_WordEmbeddings {
    
    static class SimpleEmbedding {
        private Map<String, float[]> embeddings = new HashMap<>();
        
        public SimpleEmbedding() {
            // Simplified 3D embeddings (real embeddings are 100-768 dimensions)
            embeddings.put("king",   new float[]{0.5f, 0.8f, 0.3f});
            embeddings.put("queen",  new float[]{0.4f, 0.8f, 0.5f});
            embeddings.put("man",    new float[]{0.6f, 0.2f, 0.1f});
            embeddings.put("woman",  new float[]{0.3f, 0.3f, 0.2f});
            embeddings.put("prince", new float[]{0.45f, 0.75f, 0.25f});
            embeddings.put("cat",    new float[]{0.1f, 0.1f, 0.9f});
            embeddings.put("dog",    new float[]{0.2f, 0.15f, 0.85f});
        }
        
        float cosineSimilarity(float[] a, float[] b) {
            float dotProduct = 0, normA = 0, normB = 0;
            for (int i = 0; i < a.length; i++) {
                dotProduct += a[i] * b[i];
                normA += a[i] * a[i];
                normB += b[i] * b[i];
            }
            return (float) (dotProduct / (Math.sqrt(normA) * Math.sqrt(normB)));
        }
        
        void demonstrateSimilarity() {
            float[] kingVec = embeddings.get("king");
            
            System.out.println("Similarity to 'king':");
            for (String word : embeddings.keySet()) {
                float similarity = cosineSimilarity(kingVec, embeddings.get(word));
                System.out.printf("%10s: %.3f%n", word, similarity);
            }
        }
        
        void demonstrateRelationship() {
            float[] king = embeddings.get("king");
            float[] man = embeddings.get("man");
            float[] woman = embeddings.get("woman");
            
            // "king" - "man" + "woman" ≈ ?
            float[] result = new float[3];
            for (int i = 0; i < 3; i++) {
                result[i] = king[i] - man[i] + woman[i];
            }
            
            System.out.println("\nAnalogy: king - man + woman ≈ ?");
            System.out.println("Closest words:");
            
            List<Map.Entry<String, Float>> similarities = new ArrayList<>();
            for (String word : embeddings.keySet()) {
                float sim = cosineSimilarity(result, embeddings.get(word));
                similarities.add(new AbstractMap.SimpleEntry<>(word, sim));
            }
            
            similarities.sort((a, b) -> b.getValue().compareTo(a.getValue()));
            similarities.stream().limit(3).forEach(e -> 
                System.out.printf("  %s: %.3f%n", e.getKey(), e.getValue())
            );
        }
    }
    
    public static void main(String[] args) {
        SimpleEmbedding embedding = new SimpleEmbedding();
        embedding.demonstrateSimilarity();
        embedding.demonstrateRelationship();
    }
}
```

**Run it**:
```bash
javac Exercise3_WordEmbeddings.java
java Exercise3_WordEmbeddings
```

**What you learned**:
- Words with similar meanings have similar vectors
- Mathematical operations on vectors capture linguistic relationships
- This is how LLMs "understand" semantic meaning

---

## ✅ Revalidation: Advanced Scenarios

### Scenario 1: Design NLP Pipeline
**Challenge**: You're building a customer support system. Design the NLP pipeline.

**Your task**:
1. Identify which NLP tasks you'd use (tokenization, NER, sentiment, classification)
2. Explain the order you'd apply them
3. Give an example flow for: "I purchased item #12345 yesterday and I'm very unhappy!"

**Model Solution**:
```
1. Tokenization: Break into tokens
   ["I", "purchased", "item", "#12345", "yesterday", "and", "I'm", ...]

2. NER: Extract entities
   Item ID: "12345"
   Timeframe: "yesterday"

3. Sentiment Analysis: Determine emotion
   Sentiment: NEGATIVE (0.85 confidence)

4. Text Classification: Route query
   Category: COMPLAINT + RETURN_REQUEST

Result: Route to "Returns Department", Priority: HIGH
```

### Scenario 2: Debug Tokenization Issue
**Challenge**: Your NER system misses "New York" as a location because it tokenizes it as two separate words.

**Your fix**:
```java
// Problem: ["New", "York"] treated as separate
// Solution: Use noun phrase recognition before NER

// Use heuristics: Proper noun + proper noun = likely entity
if (isPropperNoun(token[i]) && isProperNoun(token[i+1])) {
    combineTokens(token[i], token[i+1]); // "New York"
}
```

### Scenario 3: Analyze Trade-offs
**Challenge**: Choose between Word2Vec vs GloVe for your product search feature.

**Decision Matrix**:
| Aspect | Word2Vec | GloVe |
|--------|----------|-------|
| Local Context | ✓ | ✓✓ (better) |
| Global Stats | ✗ | ✓ |
| Training Speed | ✓✓ | ✓ |
| Semantic Quality | ✓ | ✓✓ |
| Memory | Less | More |

**Recommendation**: Use GloVe for better semantic capture in product search, unless speed is critical.

---

## 🎯 Key Takeaways

1. **NLP is foundational**: Every LLM is built on NLP principles
2. **Tokenization matters**: Different strategies = different model behavior
3. **Embeddings capture meaning**: Vectors represent semantic relationships
4. **Evolution teaches lessons**: Each NLP generation solved previous limitations
5. **Context is critical**: Modern transformers succeed because they process full context
6. **Design for domain**: Product search needs different NLP than spam detection

---

## 📖 Next Steps

✅ **Completed**: Understanding what NLP is and why it matters  
✅ **Completed**: Core NLP tasks and how they work  
✅ **Completed**: Word embeddings (Word2Vec & GloVe)  

**Next Module**: [1.2 AI/ML/DL Hierarchy & Neural Networks](../01-Foundations/02-AI-ML-DL-Hierarchy.md)

Before moving on, make sure you can:
- [ ] Explain what tokenization is and why it matters
- [ ] Describe at least 3 core NLP tasks
- [ ] Explain how embeddings represent meaning
- [ ] Understand the evolution from classical NLP to LLMs

---

## 📚 Additional Resources

- [Word2Vec Paper](https://arxiv.org/abs/1301.3781)
- [GloVe Explained](https://nlp.stanford.edu/projects/glove/)
- [Stanford NLP Course](https://web.stanford.edu/class/cs224n/)
- [Hugging Face NLP Course](https://huggingface.co/course/)

---

**Ready?** Move to Module 1.2 when you're confident in these concepts.
