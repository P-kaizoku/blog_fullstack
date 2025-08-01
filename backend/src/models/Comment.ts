import mongoose, { Document, Schema } from "mongoose";

export interface IComment extends Document {
  blogId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  text: string;
}

const commentSchema = new Schema<IComment>(
  {
    blogId: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const Comment = mongoose.model<IComment>("Comment", commentSchema);
