import { useState } from "react";

interface BlogCardProps {
  title: string;
  content: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, content, author }) => {
  const [expanded, setExpanded] = useState(false);

  // Remove empty <p> tags
  const cleanContent = content.replace(/<p>\s*<\/p>/g, "");

  // Strip HTML for preview text
  const textOnly = cleanContent.replace(/<[^>]+>/g, "");

  const previewLength = 200;
  const isLong = textOnly.length > previewLength;

  return (
    <div
      className="blog-card"
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
        cursor: "pointer",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h2 style={{ margin: "0 0 0.5rem" }}>{title}</h2>
      <small
        style={{
          display: "block",
          marginBottom: "0.5rem",
          color: "#666",
          fontStyle: "italic",
        }}
      >
        By {author}
      </small>

      {expanded ? (
        <div
          className="blog-content"
          style={{ color: "#333", lineHeight: "1.6" }}
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      ) : (
        <p style={{ color: "#333", lineHeight: "1.6" }}>
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
    </div>
  );
};

export default BlogCard;
