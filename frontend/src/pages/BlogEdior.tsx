// src/pages/WriteBlog.tsx
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";

export default function WriteBlog() {
  const editor = useEditor({
    extensions: [StarterKit, Heading.configure({ levels: [1, 2, 3] }), Image],
    content: "<h1>Your Amazing Title</h1><p>Start typing your story…</p>",
  });

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      {/* Title */}
      <input
        type="text"
        placeholder="Title"
        className="w-full text-4xl font-bold outline-none border-none"
      />

      {/* Editor */}
      <div className="border rounded-md p-4 min-h-[400px]">
        <EditorContent editor={editor} />
      </div>

      {/* Custom Image Upload */}
      <button
        onClick={() => addImage(editor)}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Add Image
      </button>
    </div>
  );
}

function addImage(editor: any) {
  const url = window.prompt("Enter image URL");
  if (url) {
    editor.chain().focus().setImage({ src: url }).run();
  }
}
