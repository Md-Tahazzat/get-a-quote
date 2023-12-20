/* eslint-disable react/no-children-prop */
"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import { MdSend } from "react-icons/md";
import "./style.css";
import GalleryModal from "@/components/pages/Dashboard/Pages/newPost/imageModal/imageModal";
import EditorHeader from "@/components/pages/Dashboard/Pages/newPost/editorHeader/editorHeader";
import { useEffect, useReducer, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import ThemeShortDesc from "@/components/pages/Dashboard/Pages/newPost/themeShortDesc/themeShortDesc";
import extensions from "@/utility/editor/extensions";

const initialState = {
  content: "",
  title: "",
  themeImage: "",
  shortDescription: "",
  tags: [],
  category: "",
  published: false,
  authorEmail: "",
};

const Constant = {
  content: "CONTENT",
  title: "TITLE",
  themeImage: "THEME_IMAGE",
  shortDescription: "SHORT_DESCRIPTION",
  tags: "TAGS",
  category: "CATEGORY",
  published: "PUBLISHED",
  authorEmail: "AUTHOR_EMAIL",
};

const reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case Constant.content:
      return { ...state, content: action.payload };
    case Constant.title:
      return { ...state, title: action.payload };
    case Constant.themeImage:
      return { ...state, themeImage: action.payload };
    case Constant.shortDescription:
      return { ...state, shortDescription: action.payload };
    case Constant.tags:
      return { ...state, tags: action.payload };
    case Constant.category:
      return { ...state, category: action.payload };
    case Constant.published:
      return { ...state, published: action.payload };
    case Constant.authorEmail:
      return { ...state, authorEmail: action.payload };
    default:
      return state;
  }
};

const AddNewBlogPost = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // get logged in user information
  const { data: session } = useSession();

  const editor = useEditor({
    extensions: extensions,
    content: "",
    onUpdate: ({ editor }) => {
      // console.log(editor.getHTML());

      dispatch({ type: Constant.content, payload: editor.getHTML() });
    },
  });

  useEffect(() => {
    if (session) {
      dispatch({ type: Constant.authorEmail, payload: session?.user?.email });
    }
  }, [session]);

  console.log(state.content);

  const handleSave = async () => {
    setLoading(true);
    // TODO : change alert to toast

    if (state.title === "") {
      alert("Title is required");
      return;
    }
    if (state.shortDescription === "") {
      alert("Short Description is required");
      return;
    }
    if (state.content === "") {
      alert("Content is required");
      return;
    }

    try {
      // send data to backend

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/blog`,
        state
      );
      console.log(res.data);
      if (res.status === 200) {
        
        alert("Blog post saved successfully");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen overflow-auto p-8 bg-white text-black">
      <h1 className="text-2xl font-bold pb-5">Add New Blog Post</h1>
      {/* //!theme image and short description start */}
      <ThemeShortDesc Constant={Constant} dispatch={dispatch} state={state} />
      {/* //!theme image and short description end */}

      <EditorHeader editor={editor} />
      <EditorContent editor={editor} />
      <button
        onClick={handleSave}
        disabled={loading}
        className="p-2 bg-sky-950 rounded-lg text-white text-2xl flex items-center gap-2"
      >
        <span className="">{loading ? "Loading..." : "Save"}</span>
        <MdSend className=""></MdSend>
      </button>

      <GalleryModal editor={editor} />
    </div>
  );
};

export default AddNewBlogPost;
