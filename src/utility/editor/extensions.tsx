import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { Extensions } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";



const CustomParagraph = Paragraph.extend({
    addAttributes() {
      // Return an object with attribute configuration
      return {
        class: {
          default: "color-Gray animate-from-bottom",
        },
      };
    },
  });
const CustomHeading = Heading.extend({ addAttributes() {
    // Return an object with attribute configuration
    return {
      class: {
        default: "split-heading animate-from-bottom color-Calypso",
      },
    };
  },
});
   
//? extensions
const extensions:Extensions = [
    Color,
    // Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle,
    // TextStyle.configure({ HTMLAttributes: [ListItem.name] }),
    // Heading,
    CustomHeading   ,
    // Paragraph,
    CustomParagraph,
    Underline.configure({
      HTMLAttributes: {
        class: "my-custom-class",
      },
    }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
    Image.configure({
        HTMLAttributes: {
          class: 'animate-from-bottom blog-image',
        },
      })
  ];

  export default extensions;