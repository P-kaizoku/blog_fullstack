import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  title: string;
  content: string;
  author: string;
  thumbnailUrl?: string;
  createdAt?: string;
  category?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  content,
  author,
  thumbnailUrl,
  createdAt,
  category,
}) => {
  const [expanded, setExpanded] = useState(false);

  // Remove empty <p> tags
  const cleanContent = content.replace(/<p>\s*<\/p>/g, "");

  // Strip HTML for preview text
  const textOnly = cleanContent.replace(/<[^>]+>/g, "");

  const previewLength = 200;
  const isLong = textOnly.length > previewLength;
  const navigate = useNavigate();

  const handleDelete = async (_id: string): Promise<void> => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await fetch(`http://localhost:3000/api/blogs/${_id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== _id));
          alert("Blog deleted successfully.");
        } else {
          const errorData = await response.json();
          console.error("Error deleting blog:", errorData);
          alert("Failed to delete the blog.");
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("An error occurred while deleting the blog.");
      }
    }
  };

  return (
    <div className="blog-card flex flex-row-reverse justify-between">
      <div>
        {thumbnailUrl && (
          <img
            width={300}
            src={thumbnailUrl}
            alt={title}
            className=" h-auto rounded-md mb-4"
          />
        )}
      </div>
      <div>
        <h2 className="text-[48px] font-semibold tracking-tight leading-[50px]">
          {title}
        </h2>
        <small className="text-[12px] text-gray-500 tracking-wide">
          By {author}{" "}
          {createdAt && ` | ${new Date(createdAt).toLocaleDateString()}`}
        </small>
        {category && (
          <p className="text-[10px] bg-red-50 w-fit rounded-lg px-2 my-2  border-1 border-red-100 font-semibold text-gray-700 shadow-xl mt-1 uppercase">
            {category}
          </p>
        )}

        {expanded ? (
          <div
            className="text-[16px] mt-4"
            style={{ color: "#333", lineHeight: "1.6" }}
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />
        ) : (
          <p
            style={{ lineHeight: "1.6" }}
            className="text-[18px] font-sans tracking-wide text-neutral-500 mt-4 italic"
          >
            {textOnly.slice(0, previewLength)}
            {isLong && "..."}
          </p>
        )}

        {isLong && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering blog navigation
              setExpanded(!expanded);
            }}
            style={{
              marginTop: "0.5rem",
              background: "none",
              border: "none",
              color: "#0070f3",
              cursor: "pointer",
              padding: 0,
              fontSize: "0.9rem",
            }}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        )}

        <button onClick={() => navigate(`/blogs/edit/${blog._id}`)}>
          Edit
        </button>
        <button onClick={() => handleDelete(blog._id)}>Delete</button>
      </div>
    </div>
  );
};

export default BlogCard;
