import { Schema, model, models } from "mongoose";

const transactionSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  stripeId: { type: String, required: true, unique: true },
  plan: { type: String },
  amount: { type: Number, required: true },
  credits: { type: Number },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Transaction =
  models?.Transaction || model("Transaction", transactionSchema);

export default Transaction;
