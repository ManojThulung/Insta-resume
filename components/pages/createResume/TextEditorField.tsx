import { Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => {
    return import("../../layout/CustomEditor");
  },
  { ssr: false }
);

const TextEditorField = ({
  data,

  setData,
}: {
  data: string;
  setData: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <CustomEditor data={data} setData={setData} />
    </div>
  );
};

export default TextEditorField;
