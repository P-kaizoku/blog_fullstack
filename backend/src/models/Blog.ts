import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  thumbnailUrl?: string;
  category?: string;
  author: mongoose.Types.ObjectId;
  likes: mongoose.Types.ObjectId[];
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    thumbnailUrl: { type: String, default: "" },
    category: { type: String, default: "general" },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const Blog = mongoose.model<IBlog>("Blog", blogSchema);
