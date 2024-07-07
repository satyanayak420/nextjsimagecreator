import mongoose, { Mongoose } from "mongoose";
import { environmentVariables } from "../env";

const MONGODB_URL = process.env.MONGO_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
console.log(environmentVariables.EMAIL);
console.log(process.env.MONGO_URL);
let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("MongoDB URL is missing!!!");
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "aisasslatest",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;

  return cached.conn;
};
