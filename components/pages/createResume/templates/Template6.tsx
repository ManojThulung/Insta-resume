import "@/app/style/template6Style.css";

import { TemplateProps } from "@/types";
import { convertToMonthName } from "@/utils/helper";
import { Fragment } from "react";

const Template6 = ({ bioData, resumeData, margin }: TemplateProps) => {
  return (
    <>
      <div className="t6_header" style={{ marginTop: -margin }}>
        <h1 style={{ marginTop: -margin }}>Jessie Smith</h1>
        <h2 style={{ marginTop: -margin }}>Software Developer</h2>
        <div className="t6_line_hr" style={{ marginTop: margin }} />
        <div
          className="py-[6px] flex justify-between items-center flex-wrap"
          style={{ marginTop: -margin }}
        >
          <p className="t6_text">jessie.smith@gmail.com </p>
          <p className="t6_text">(555) 123-5667 </p>
          <p className="t6_text">Himalayan Road, Kathmandu, Nepal</p>
        </div>
      </div>

      <div style={{ marginTop: -margin }}>
        {/* PROFILE & CAREER OBJECTIVE ////////////////////////////////////// */}
        <div className="t6_sec">
          <h2 className="t6_title">SUMMARY</h2>
          <div className="t6_description">
            <p>
              Vestibulum id nulla sit amet nunc malesuada lacinia. Integer in
              ante vel justo consequat condimentum. Praesent quis nisi auctor,
              vehicula mi eu, congue justo. Duis auctor neque ut lorem
              fermentum.
            </p>
            <p>
              Praesent vel eleifend ipsum laoreet quis nisi auctor, vehicula mi
              eu, congue justo. Duis auctor neque ut lorem fermentum, vel
              eleifend ipsum laoreet
            </p>
          </div>
        </div>

        {/* EDUCATION ////////////////////////////////////// */}
        <div
          className="bg-[#F2F3F4] w-[475px] translate-x-[-30px] px-[30px]"
          style={{ marginTop: margin }}
        >
          <div className="t6_sec">
            <h1 className="t6_title">EDUCATION</h1>
            <div className="grid grid-cols-3 gap-3">
              <div className="pb-2">
                <h3 className="t6_text italic">2017 - 2021</h3>
                <h2 className="font-bold text-[#4D453F]">
                  Bachelor in Computer Science
                </h2>
                <p className="t6_text">Himalayan College</p>
                <p className="t6_text">Pokhara, Nepal </p>
              </div>
              <div>
                <h3 className="t6_text italic">2016 - 2018</h3>
                <h2 className="font-bold text-[#4D453F]">
                  Hight School Diploma
                </h2>
                <p className="t6_text">Everest College</p>
                <p className="t6_text">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS ////////////////////////////////////// */}

        <div className="t6_sec">
          <h1 className="t6_title">SKILLS</h1>
          <div className="pb-2">
            <h2 className="font-bold text-[#4D453F]">Programming Skills</h2>
            <div className="grid grid-cols-4">
              <p className="t6_text t6_list">ReactJS</p>
              <p className="t6_text t6_list">Github</p>
              <p className="t6_text t6_list">NodeJS</p>
              <p className="t6_text t6_list">MySQL</p>
              <p className="t6_text t6_list">Firebase</p>
              <p className="t6_text t6_list">VueJs</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[#4D453F]">Soft Skills</h2>
            <div className="grid grid-cols-4">
              <p className="t6_text t6_list">Project management</p>
              <p className="t6_text t6_list">Communication</p>
              <p className="t6_text t6_list">Multi tasking</p>
              <p className="t6_text t6_list">Teamwork</p>
            </div>
          </div>
        </div>

        {/* EXPERIENCES ////////////////////////////////////// */}
        <div
          className="bg-[#F2F3F4] w-[475px] translate-x-[-30px] px-[30px]"
          style={{ marginTop: margin }}
        >
          <div className="t6_sec">
            <h2 className="t6_title">WORK EXPERIENCES</h2>
            <div className="mb-[10px]">
              <h2 className="font-bold text-[#4D453F]">
                Senior Software Engineer
              </h2>
              <div className="flex flex-wrap justify-between">
                <h3 className="text-[#4D453F]">
                  Tech Innovations Ltd. / Silicon Valley, USA
                </h3>
                <h3 className="t6_text italic">2022 January - Present</h3>
              </div>
              <div className="t2_description pt-[2px]">
                <p>
                  During my tenure at Tech Innovations Ltd., I led a team of
                  developers in the design and implementation of cutting-edge
                  software solutions for our clients in the tech industry. I
                  played a key role in developing scalable and efficient
                  algorithms to improve product performance and enhance user
                  experience.
                </p>
              </div>
            </div>
            <div className="mb-[10px]">
              <h2 className="font-bold text-[#4D453F]">
                Software Development Engineer
              </h2>
              <div className="flex flex-wrap justify-between">
                <h3 className="text-[#4D453F]">
                  Global Tech Solution Icn. | Kathmandu, Nepal
                </h3>
                <h3 className="t6_text italic">2018 June - 2022 October</h3>
              </div>
              <div className="t2_description pt-[2px]">
                <p>
                  At GlobalTech Solutions Inc., I was responsible for the full
                  software development lifecycle, from requirements gathering to
                  deployment. I actively participated in architectural
                  discussions and provided valuable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS ////////////////////////////////////// */}
        <div className="t6_sec">
          <h1 className="t6_title">CERTIFICATIONS</h1>
          <div className="grid grid-cols-3 gap-[6px]">
            <div>
              <h3 className="t6_text italic">2018 March</h3>
              <h2 className="font-bold text-[#4D453F]">
                Master In Diploma Computer
              </h2>
              <p className="t6_text">Organization Pvt. Ltd.</p>
              <p className="t6_link">https://certifiacte.url.com</p>
            </div>
            <div className="">
              <h3 className="t6_text italic">2016 March</h3>
              <h2 className="font-bold text-[#4D453F]">Code winner</h2>
              <p className="t6_text">Organization Pvt. Ltd.</p>
              <p className="t6_link">https://certifiacte.url.com</p>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* PROJECTS ////////////////////////////////////// */}
        <div
          className="bg-[#F2F3F4] w-[475px] translate-x-[-30px] px-[30px]"
          style={{ marginTop: margin }}
        >
          <div className="t6_sec">
            <h2 className="t6_title">PROJECTS</h2>
            <div className="pb-[10px]">
              <h2 className="font-bold text-[#4D453F]">
                Interactive Virtual Museum Experience
              </h2>
              <div className="t2_description pt-[2px]">
                <p>
                  During my tenure at Tech Innovations Ltd., I led a team of
                  developers in the design and implementation of cutting-edge
                  software solutions for our clients in the tech industry. I
                  played a key role in developing scalable and efficient
                  algorithms to improve product performance and enhance user
                  experience.
                </p>
              </div>
              <p className="t6_link">https://project.link.com.np</p>
            </div>

            <div className="pb-[10px]">
              <h2 className="font-bold text-[#4D453F]">
                Interactive Virtual Museum Experience
              </h2>
              <div className="t2_description pt-[2px]">
                <p>
                  During my tenure at Tech Innovations Ltd., I led a team of
                  developers in the design and implementation of cutting-edge
                  software solutions for our clients in the tech industry. I
                  played a key role in developing scalable and efficient
                  algorithms to improve product performance and enhance user
                  experience.
                </p>
              </div>
              <p className="t6_link">https://project.link.com.np</p>
            </div>
            <div className="">
              <h2 className="font-bold text-[#4D453F]">
                Software Development Engineer
              </h2>
              <h3 className="t6_text italic">2018 June - 2022 October</h3>
              <h3 className="text-[#4D453F]">
                Global Tech Solution Icn. | Kathmandu, Nepal
              </h3>
              <div className="t2_description pt-[2px]">
                <p>
                  At GlobalTech Solutions Inc., I was responsible for the full
                  software development lifecycle, from requirements gathering to
                  deployment. I actively participated in architectural
                  discussions and provided valuable.
                </p>
              </div>
              <p className="t6_link">https://project.link.com.np</p>
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS ////////////////////////////////////// */}
        <div className="t6_sec">
          <h2 className="t6_title">SOCIAL LINKS</h2>
          <div className="t6_social-links grid grid-cols-2">
            <p className="t6_link">https://projetctlink.com.sr</p>
            <p className="t6_link">https://medium.com.sr</p>
            <p className="t6_link">https://portofiol.com.sr</p>
          </div>
        </div>
      </div>

      {/* REFERENCES ////////////////////////////////////// */}
      <div
        className="bg-[#F2F3F4] w-[475px] translate-x-[-30px] px-[30px]"
        style={{ marginTop: margin }}
      >
        <div className="t6_sec">
          <h1 className="t6_title">REFERENCES</h1>
          <div className="grid grid-cols-3 gap-[6px]">
            <div>
              <h3 className="t6_text italic">Fornt-end developer</h3>
              <h2 className="font-bold text-[#4D453F]">Eleson Burgerg</h2>
              <p className="t6_text">Organization Pvt. Ltd.</p>
              <p className="t6_text">elson@gmail.com</p>
              <p className="t6_text">https://certifiacte.url.com</p>
            </div>
            <div>
              <h3 className="t6_text italic">Fornt-end developer</h3>
              <h2 className="font-bold text-[#4D453F]">Eleson Burgerg</h2>
              <p className="t6_text">Organization Pvt. Ltd.</p>
              <p className="t6_text">elson@gmail.com</p>
              <p className="t6_text">https://certifiacte.url.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* LANGUAGE ////////////////////////////////////// */}
      <div className="t6_sec">
        <h1 className="t6_title">LANGUAGES</h1>
        <div className="langua grid grid-cols-5">
          <p className="t6_list t6_text">English</p>
          <p className="t6_list t6_text">Nepali</p>
          <p className="t6_list t6_text">Hindi</p>
        </div>
      </div>
    </>
  );
};

export default Template6;
