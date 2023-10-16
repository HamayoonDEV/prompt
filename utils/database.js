import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
    console.log(`database is connnected to the host:${con.connection.host}`);
  } catch (error) {
    return console.log(error);
  }
};

export default connectDb;
