import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export interface IBlogClient {
  _id: string;
  title: string;
  content: string;
  thumbnailUrl?: string;
  category?: string;
  author?: { _id: string; name: string; email: string }; // id as string
  likes?: { _id: string; name: string }[];
  createdAt?: string; // ya Date, tum parse karo to Date
  updatedAt?: string;
}
const Blogs = () => {
  const fakeBlogs: IBlogClient[] = [
    {
      _id: "1",
      title: "Understanding React",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      _id: "2",
      title: "Getting Started with TypeScript",
      content:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      _id: "3",
      title: "Exploring Node.js",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
  ];

  const [blogs, setBlogs] = useState<IBlogClient[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs");

        if (!response.ok) throw new Error("Network error");
        const data: IBlogClient[] = await response.json();
        console.log("Fetched blogs:", data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs(fakeBlogs); // fallback
      }
    };

    fetchBlogs();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {/* <h1>Blogs</h1> */}
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className=""
          onClick={() => navigate(`/blogs/${blog._id}`)}
        >
          <BlogCard
            title={blog.title}
            content={blog.content}
            author={blog.author?.name ?? `Author ${blog._id}`}
            thumbnailUrl={blog.thumbnailUrl}
            createdAt={blog.createdAt}
            category={blog.category}
          />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
