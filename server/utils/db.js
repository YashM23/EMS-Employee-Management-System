import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("DB CONNECTED SUCCESSFULLY...");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
