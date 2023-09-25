import { Schema, model } from "mongoose";

/**
 * NextAuth.js 에서 제공되는 필드
 */
const userSchema = new Schema({
  name: String,
  email: String,
  emailVerified: Date,
  image: String,
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const User = model("User", userSchema);
