import { useEffect, useState } from "react";


type Blog = {
  id: number;
  title: string;
  content: string;
  author?: { id: string; name: string; email: string };
};

const Dashboard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const decoded = localStorage.getItem("token");
  const userId = decoded ? JSON.parse(decoded).id : null;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/blogs");
        const data: Blog[] = await response.json();
        console.log("Fetched blogs:", data);
        const myBlogs = data.filter((blog) => blog.author?.id === userId);
        setBlogs(myBlogs);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="border p-4 rounded">
              <h4 className="font-semibold">{blog.title}</h4>
              <p className="text-sm">{blog.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
