import { Dispatch, SetStateAction } from "react";
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

function CustomEditor(props: {
  data: string;
  setData: Dispatch<SetStateAction<string>>;
}) {
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={props.data}
      onChange={(event, editor) => {
        const data = editor.getData();
        props.setData(data);
      }}
    />
  );
}

export default CustomEditor;
