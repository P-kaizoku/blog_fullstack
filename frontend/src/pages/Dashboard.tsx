import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import type { IBlogClient } from "../types/blogcard";

const Dashboard = () => {
  const [blogs, setBlogs] = useState<IBlogClient[]>([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/blogs/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data: IBlogClient[] = await response.json();
        console.log("Fetched blogs:", data);

        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="w-4xl min-h-screen mx-auto  border-r-1 border-l-1">
      <section className="w-full border-b-1 p-4">
        <h1 className="text-4xl font-semibold font-family-satoshi tracking-tight">
          Dashboard
        </h1>
        <h3 className="text-xl font-medium tracking-wide">Your Blog Posts</h3>
      </section>
      <section className="w-full p-4">
        <div className="">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <BlogCard
                title={blog.title}
                content={blog.content}
                author={blog.author?.name ?? `Author ${blog._id}`}
                thumbnailUrl={blog.thumbnailUrl}
                createdAt={blog.createdAt}
                category={blog.category}
                setBlogs={setBlogs}
                id={blog._id}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
