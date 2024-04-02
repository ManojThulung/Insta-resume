import { Dispatch, SetStateAction } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
import { ResumeDataProps } from "@/types";

const editorConfiguration = {
  toolbar: {
    items: [
      "bold",
      "italic",
      "underline",
      "link",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "undo",
      "redo",
    ],
  },
  language: "en",
};

function CustomEditors({
  index,
  targetName,
  data,
  setData,
}: {
  index: number;
  targetName: string;
  data: string;
  setData: Dispatch<SetStateAction<ResumeDataProps>>;
}) {
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={data}
      onChange={(_, editor) => {
        const data = editor.getData();
        setData((prev) => {
          let updateData = { ...prev };

          //   targetName === 'experiences' &&
          updateData.experiences[index].work_description = data;

          return updateData;
        });
      }}
    />
  );
}

export default CustomEditors;
