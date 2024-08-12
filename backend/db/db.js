import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL = process.env.MONGO_URL_DEVELOPMENT;

(async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected....");
  } catch (error) {
    console.error("DB error", error);
  }
})();
