import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`);
    console.log("✅👌Mongodb connected successfully");
  } catch (error) {
    console.log("❌👎Mongodb connection failed", error);
  }
};

export default connectDB;
