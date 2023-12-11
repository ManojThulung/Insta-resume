import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
  toolbar: {
    items: [
      "bold",
      "italic",
      "underline",
      "link",
      "|",
      "highlight",
      "bulletedList",
      "numberedList",
      "|",
      "undo",
      "redo",
    ],
  },
  language: "en",
};

function CustomEditor(props: { initialData: string }) {
  //   const MyEditor = Editor;

  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={props.initialData}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
    />
  );
}

export default CustomEditor;
