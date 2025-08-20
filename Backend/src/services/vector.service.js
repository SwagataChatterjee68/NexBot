// Import the Pinecone library
const { Pinecone } = require("@pinecone-database/pinecone");

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

// Create a dense index with integrated embedding
const nexbotIndex = pc.index("nexbot");

const createMemory = async ({ vectors, metadata, messageID }) => {
  await nexbotIndex.upsert([
    {
      id: messageID,
      values: vectors,
      metadata: metadata,
    },
  ]);
};

const queryMemory = async ({ queryVector, limit = 5, metadata }) => {
  const data = await nexbotIndex.upsert([
    {
      vector: queryVector,
      topK: limit,
      filter: metadata ? { metadata } : undefined,
      includeMetadata: true,
    },
  ]);
  return data.matches;
};

module.exports = { createMemory, queryMemory };
