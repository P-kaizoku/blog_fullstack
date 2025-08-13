import { Blog } from "../models/Blog";
import { Request, Response, NextFunction } from "express";
import { Comment } from "../models/Comment";
import User from "../models/User";

export const createBlog = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { title, content, thumbnailUrl } = req.body;
  const userId = req.userId; // Assuming userId is set by the protect middleware
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    const newBlog = new Blog({ title, content, author: userId, thumbnailUrl });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
};

export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "name email")
      .populate("likes", "name");
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getUserBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  try {
    const blogs = await Blog.find({ author: userId })
      .populate("author", "name email")
      .populate("likes", "name");
    if (!blogs || blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found for this user" });
    }
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id)
      .populate("author", "name email")
      .populate("likes", "name");
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

export const updateBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

export const deleteBlog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(204).json({ message: "Blog deleted successfully" });
  } catch (error) {
    next(error);
  }
};
