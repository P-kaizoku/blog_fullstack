import React from "react";

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
      title: "CSS Grid Layout",
      content:
        "CSS Grid Layout is a two-dimensional layout system for the web.",
    },
    {
      id: 4,
      title: "Introduction to Node.js",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center my-4">Posts</h2>
      <section className="grid grid-cols-4  gap-2 min-h-screen">
        {fakeBlogs.map((blog) => (
          <article key={blog.id} className="border p-4 h-fit">
            <h3 className="font-bold">{blog.title}</h3>
            <p className="text-sm">{blog.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blogs;
