"use client";

import { Dispatch, SetStateAction, useState, useEffect } from "react";
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
  const [updateState, setUpdateState] = useState(data);

  return (
    <div>
      <CustomEditor data={data} setData={setData} />
    </div>
  );
};

export default TextEditorField;
