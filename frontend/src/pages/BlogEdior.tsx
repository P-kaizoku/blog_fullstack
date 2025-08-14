import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WriteBlog() {
  const [title, setTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Start typing your story…" }),
    ],
    content: "",
    // autofocus: true,
  });

  const handleThumbnailUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blog_thumbnails"); // Cloudinary preset name

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dmzievhus/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();

    setThumbnailUrl(data.secure_url);
    setIsUploading(false);
  };

  const handlePublish = async () => {
    const blogData = {
      title,
      content: editor?.getHTML(),
      thumbnailUrl,
    };

    await fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
      body: JSON.stringify(blogData),
    });

    alert("Blog Published!");
    navigate("/blogs");
    setTitle("");
    setThumbnailUrl("");
    editor?.commands.clearContent();
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        className="w-full text-4xl font-bold outline-none border-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Thumbnail Upload */}
      <div>
        <label className="block mb-2 font-semibold">Thumbnail</label>
        <input type="file" accept="image/*" onChange={handleThumbnailUpload} />
        {isUploading && <p className="text-sm text-gray-500">Uploading...</p>}
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt="Thumbnail"
            className="mt-2 w-48 rounded"
          />
        )}
      </div>

      {/* Editor with toolbar */}
      <div className="border rounded-md p-4 min-h-[400px]">
        <EditorContent editor={editor} />
      </div>

      {/* Publish Button */}
      <button
        onClick={handlePublish}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Publish
      </button>
    </div>
  );
}
