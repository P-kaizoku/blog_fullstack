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

blogRoutes.get("/", getBlogs);
blogRoutes.get("/:id", getBlogById);
blogRoutes.post("/", protect, createBlog);
blogRoutes.put("/:id", protect, updateBlog);
blogRoutes.delete("/:id", protect, deleteBlog);

export default blogRoutes;
