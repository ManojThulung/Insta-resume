"use client";

import React from "react";
import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => {
    return import("../../layout/CustomEditor");
  },
  { ssr: false }
);

const TextEditorField = () => {
  return (
    <div>
      <CustomEditor initialData="<h1>hello from manoj rai insta resume </h1>" />
    </div>
  );
};

export default TextEditorField;
