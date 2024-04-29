import { forwardRef } from "react";

import { BioFormProps, ResumeDataProps, FontListType } from "@/types";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";

interface PreviewPdfProps {
  bioData: BioFormProps;
  resumeData: ResumeDataProps;
  selectedTemplate: number;
  selectedFont: FontListType;
  margin: number;
}

const PreviewPdf = forwardRef<HTMLDivElement, PreviewPdfProps>(
  (
    {
      bioData,
      resumeData,
      selectedTemplate,
      selectedFont,
      margin,
    }: PreviewPdfProps,
    ref
  ) => {
    return (
      <div className="a4-container leading-[12px] text-[rgb(82,86,89)]">
        <div
          id="a4-cover"
          ref={ref}
          className="text-[9px] px-[30px]"
          style={{
            fontFamily: selectedFont.name,
            fontSize: "9px",
          }}
        >
          {selectedTemplate === 1 && (
            <Template1
              bioData={bioData}
              resumeData={resumeData}
              margin={margin}
            />
          )}
          {selectedTemplate === 2 && (
            <Template2
              bioData={bioData}
              resumeData={resumeData}
              margin={margin}
            />
          )}
        </div>
      </div>
    );
  }
);

export default PreviewPdf;
