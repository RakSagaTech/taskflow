import mongoose from "mongoose";


const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try{

    if (!MONGO_URI){
      throw new Error('Database connection string is not defined in environment variables');
    }

    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB successfully");

  }catch(err){
    console.log("Database connection failed:", err);
    process.exit(1);
  }
}


export default connectDB;