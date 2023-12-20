"use client";
import { Editor } from "@tiptap/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";
import {
  FaBold,
  FaImage,
  FaItalic,
  FaParagraph,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
} from "react-icons/fa";
import { GoHorizontalRule, GoListOrdered } from "react-icons/go";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu";
import { PiListBulletsBold } from "react-icons/pi";
import { RiCodeSSlashFill } from "react-icons/ri";
import { TbBlockquote } from "react-icons/tb";

const EditorHeader = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <>
      <div className="py-[15px] px-4 bg-sky-950 rounded-lg flex items-center flex-wrap gap-3">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white  text-lg  ${
            editor.isActive("bold") ? "is-active" : ""
          }`}
        >
          <FaBold title="Bold"></FaBold>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg   ${
            editor.isActive("italic") ? "is-active" : ""
          }`}
        >
          <FaItalic title="Italic"></FaItalic>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white  text-lg ${
            editor.isActive("strike") ? "is-active" : ""
          }`}
        >
          <FaStrikethrough title="Stike"></FaStrikethrough>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg  ${
            editor.isActive("underline") ? "is-active" : ""
          }`}
        >
          <FaUnderline title="Underline" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg  ${
            editor.isActive("code") ? "is-active" : ""
          }`}
        >
          <RiCodeSSlashFill title="Code"></RiCodeSSlashFill>
        </button>

        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white  text-lg ${
            editor.isActive("paragraph") ? "is-active" : ""
          }`}
        >
          <FaParagraph title="Paragraph"></FaParagraph>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg ${
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }`}
        >
          <LuHeading1 title="Head Size One"></LuHeading1>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg ${
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }`}
        >
          <LuHeading2 title="Head Size Two"></LuHeading2>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg ${
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }`}
        >
          <LuHeading3 title="Head Size Three"></LuHeading3>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg ${
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }`}
        >
          <LuHeading4 title="Head Size Four"></LuHeading4>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg ${
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }`}
        >
          <LuHeading5 title="Head Size Five"></LuHeading5>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white  text-lg ${
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }`}
        >
          <LuHeading6 title="Head Size Six"></LuHeading6>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg  ${
            editor.isActive("bulletList") ? "is-active" : ""
          }`}
        >
          <PiListBulletsBold title="Bullet List"></PiListBulletsBold>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg  ${
            editor.isActive("orderedList") ? "is-active" : ""
          }`}
        >
          <GoListOrdered title="Order List"></GoListOrdered>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg ${
            editor.isActive("codeBlock") ? "is-active" : ""
          }`}
        >
          <BiCodeCurly title="Code Block"></BiCodeCurly>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg ${
            editor.isActive("blockquote") ? "is-active" : ""
          }`}
        >
          <TbBlockquote title="Block Quote"></TbBlockquote>
        </button>
        <button
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg`}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <GoHorizontalRule title="Horizontal Rule"></GoHorizontalRule>
        </button>
        <button
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg `}
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <AiOutlineArrowDown title="New Line"></AiOutlineArrowDown>
        </button>
        <button
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg`}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <FaUndo title="Undo"></FaUndo>
        </button>
        <button
          className={`rounded p-2 border border-[#000] text-sky-950 bg-white text-lg`}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <FaRedo title="Redo"></FaRedo>
        </button>

        <button
          className={`rounded border border-[#000] text-sky-950 bg-white text-lg`}
          // onClick={addImage}
        >
          <label className="rounded p-2 block" htmlFor="galleryModal">
            <FaImage title="Image"></FaImage>
          </label>
        </button>
      </div>
    </>
  );
};

export default EditorHeader;
