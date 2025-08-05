import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const fakeBlogs = [
    {
      id: 1,
      title: "Understanding React",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      title: "Getting Started with TypeScript",
      content:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      id: 3,
      title: "Exploring Node.js",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      {/* <h1>Blogs</h1> */}
      {fakeBlogs.map((blog) => (
        <div onClick={() => navigate(`/blogs/${blog.id}`)}>
          <BlogCard
            key={blog.id}
            title={blog.title}
            content={blog.content}
            author={`Author ${blog.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
