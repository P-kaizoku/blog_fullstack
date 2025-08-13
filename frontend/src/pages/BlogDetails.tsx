import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: { _id: string; name: string; email: string };
  thumbnailUrl?: string;
  category?: string;
  likes: string[];
}

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!blog) return <h2>Blog Not Found</h2>;

  return (
    <div className="w-full p-4">
      <h2 className="text-3xl font-semibold my-4">{blog.title}</h2>
      {blog.thumbnailUrl && (
        <img
          src={blog.thumbnailUrl}
          alt={blog.title}
          className="w-[200px] rounded-lg"
        />
      )}
      <p className="text-sm text-neutral-600 ml-3">By {blog.author?.name}</p>
      <div
        className="mt-4 text-lg"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetails;
