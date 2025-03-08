import mongoose from "mongoose";

const MONGO_DB_URL = process.env.MONGO_DB_URL || "mongodb://localhost:27017/otpverify";

if (!MONGO_DB_URL) {
  throw new Error(
    "Please define the MONGO_DB_URL environment variable inside .env"
  );
}

let isConnected = false; // Track the connection status

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }
  try {
    const connection = await mongoose.connect(MONGO_DB_URL);
    isConnected = connection.connections[0].readyState === 1;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    throw new Error("Database connection failed");
  }
};
