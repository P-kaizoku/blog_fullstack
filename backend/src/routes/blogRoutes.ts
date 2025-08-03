import {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
} from "../controllers/blogController";
import { Router } from "express";
import { protect } from "../middlewares/protectMiddleware";

const blogRoutes = Router();

blogRoutes.post("/", protect, createBlog);
blogRoutes.get("/", getBlogs);
blogRoutes.get("/:id", getBlogById);
blogRoutes.put("/:id", protect, updateBlog);
blogRoutes.delete("/:id", protect, deleteBlog);

export default blogRoutes;
