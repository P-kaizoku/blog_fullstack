const BlogCard = ({
  title,
  content,
  author,
}: {
  title: string;
  content: string;
  author: string;
}) => {
  return (
    <div className="border-b-1 border-slate-500 py-4">
      <p>{author}</p>
      <h2 className="text-2xl font-semibold text-neutral-900">{title}</h2>
      <p>
        {content.split(" ").slice(0, 50).join(" ")}
        {content.split(" ").length > 50 ? "..." : ""}
      </p>
    </div>
  );
};

export default BlogCard;
