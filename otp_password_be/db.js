const mongoose = require("mongoose");

require("dotenv").config();

async function connectToDatabase() {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URL}`);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = { connectToDatabase };
 