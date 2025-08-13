import {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  getUserBlogs,
} from "../controllers/blogController";
import { Router } from "express";
import { protect } from "../middlewares/protectMiddleware";

const blogRoutes = Router();

blogRoutes.get("/", getBlogs);
blogRoutes.get("/:id", getBlogById);
blogRoutes.post("/", protect, createBlog);
blogRoutes.put("/:id", protect, updateBlog);
blogRoutes.delete("/:id", protect, deleteBlog);
blogRoutes.get("/user/:userId", protect, getUserBlogs);

export default blogRoutes;
