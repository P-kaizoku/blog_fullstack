import { useParams } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React",
    author: "Author 1",
    content: "Full content of React blog...",
  },
  {
    id: 2,
    title: "Getting Started with TypeScript",
    author: "Author 2",
    content: "Full content of TypeScript blog...",
  },
  {
    id: 3,
    title: "Exploring Node.js",
    author: "Author 3",
    content: "Full content of Node.js blog...",
  },
];

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();

  const blog = blogPosts.find((post) => post.id === Number(id));

  if (!blog) return <h2>Blog Not Found</h2>;

  return (
    <div className="w-full p-4 ">
      <h1 className="text-6xl font-bold text-neutral-800 mb-4">{blog.title}</h1>
      <p className="text-sm text-neutral-600 ml-3">By {blog.author}</p>
      <p className="mt-4 text-lg">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
