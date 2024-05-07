import "@/app/style/template5Style.css";

import { TemplateProps } from "@/types";
import { convertToMonthName } from "@/utils/helper";
import { Fragment } from "react";

const Template5 = ({ bioData, resumeData, margin }: TemplateProps) => {
  return (
    <>
      <div className="t5_header" style={{ marginTop: -margin }}>
        <h1 style={{ marginTop: -margin }}>Jessie Smith</h1>
        <h2 style={{ marginTop: -margin }}>Software Developer</h2>
        <div className="pb-[10px]">
          <p className="t5_text !text-center" style={{ marginTop: margin - 2 }}>
            jessie.smith@gmail.com | (555) 123-5667 | Himalayan Road, Kathmandu,
            Nepal
          </p>
        </div>
      </div>

      <div style={{ marginTop: -margin }}>
        {/* PROFILE & CAREER OBJECTIVE ////////////////////////////////////// */}
        <div className="t5_sec">
          <h2 className="t5_title">SUMMARY</h2>
          <div className="t5_underline" style={{ marginTop: margin }} />
          <div className="px-1 t5_description" style={{ marginTop: -margin }}>
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

        {/* EXPERIENCES ////////////////////////////////////// */}
        <div className="t5_sec">
          <h2 className="t5_title">EXPERIENCES</h2>
          <div className="t5_underline" style={{ marginTop: margin }} />
          <div className="pb-[10px]" style={{ marginTop: -margin }}>
            <h2 className="font-bold text-black">Senior Software Engineer</h2>
            <div className="flex flex-wrap justify-between">
              <h3 className="text-black">
                Tech Innovations Ltd. / Silicon Valley, USA
              </h3>
              <h3 className="t5_text italic">2022 January - Present</h3>
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
          <div className="">
            <h2 className="font-bold text-black">
              Software Development Engineer
            </h2>
            <div className="flex flex-wrap justify-between">
              <h3 className="text-black">
                Global Tech Solution Icn. | Kathmandu, Nepal
              </h3>
              <h3 className="t5_text italic">2018 June - 2022 October</h3>
            </div>
            <div className="t2_description pt-[2px]">
              <p>
                At GlobalTech Solutions Inc., I was responsible for the full
                software development lifecycle, from requirements gathering to
                deployment. I actively participated in architectural discussions
                and provided valuable.
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATION ////////////////////////////////////// */}
        <div className="t5_sec">
          <h1 className="t5_title">EDUCATION</h1>
          <div className="t5_underline" style={{ marginTop: margin }} />
          <div className="pb-2" style={{ marginTop: -margin }}>
            <h2 className="font-bold text-black">
              Bachelor in Computer Science
            </h2>
            <div className="flex flex-wrap justify-between">
              <p className="t5_text">Himalayan College / Pokhara, Nepal </p>
              <h3 className="t5_text italic">2017 - 2021</h3>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-black">Hight School Diploma</h2>
            <div className="flex flex-wrap justify-between">
              <p className="t5_text">Everest College / Kathmandu, Nepal</p>
              <h3 className="t5_text italic">2016 - 2018</h3>
            </div>
          </div>
        </div>

        {/* SKILLS ////////////////////////////////////// */}
        <div className="t5_sec">
          <h1 className="t5_title">SKILLS</h1>
          <div className="t5_underline" style={{ marginTop: margin }} />
          <div className="pb-2" style={{ marginTop: -margin }}>
            <h2 className="font-bold text-black">Programming Skills</h2>
            <p className="t5_text">
              ReactJS / NextJS / Github / NodeJS / MySQL / VueJS / Firebase
            </p>
          </div>
          <div>
            <h2 className="font-bold text-black">Soft Skills</h2>
            <p className="t5_text">
              Communication / Team work / Project management / Time management /
              Multi-tasking
            </p>
          </div>
        </div>

        {/* CERTIFICATIONS ////////////////////////////////////// */}
        <div className="t5_sec">
          <h1 className="t5_title">CERTIFICATIONS</h1>
          <div className="t5_underline" style={{ marginTop: margin }} />
          <div
            className="grid grid-cols-3 gap-[6px]"
            style={{ marginTop: -margin }}
          >
            <div>
              <h3 className="t5_text italic">2018 March</h3>
              <h2 className="font-bold text-black">
                Master In Diploma Computer
              </h2>
              <p className="t5_text">Organization Pvt. Ltd.</p>
              <p className="t5_link">https://certifiacte.url.com</p>
            </div>
            <div className="">
              <h3 className="t5_text italic">2016 March</h3>
              <h2 className="font-bold text-black">Code winner</h2>
              <p className="t5_text">Organization Pvt. Ltd.</p>
              <p className="t5_link">https://certifiacte.url.com</p>
            </div>
          </div>
        </div>

        {/* PROJECTS ////////////////////////////////////// */}
        <div className="t5_sec">
          <h2 className="t5_title">PROJECTS</h2>
          <div className="t5_underline" style={{ marginTop: margin }} />
          <div className="pb-[10px]" style={{ marginTop: -margin }}>
            <h2 className="font-bold text-black">
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
            <p className="t5_link">https://project.link.com.np</p>
          </div>

          <div className="pb-[10px]">
            <h2 className="font-bold text-black">
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
            <p className="t5_link">https://project.link.com.np</p>
          </div>
          <div className="">
            <h2 className="font-bold text-black">
              Software Development Engineer
            </h2>
            <h3 className="t5_text italic">2018 June - 2022 October</h3>
            <h3 className="text-black">
              Global Tech Solution Icn. | Kathmandu, Nepal
            </h3>
            <div className="t2_description pt-[2px]">
              <p>
                At GlobalTech Solutions Inc., I was responsible for the full
                software development lifecycle, from requirements gathering to
                deployment. I actively participated in architectural discussions
                and provided valuable.
              </p>
            </div>
            <p className="t5_link">https://project.link.com.np</p>
          </div>
        </div>

        {/* SOCIAL LINKS ////////////////////////////////////// */}
        <div className="t5_sec">
          <h2 className="t5_title">SOCIAL LINKS</h2>
          <div className="t5_underline" style={{ marginTop: margin }} />
          <div className="t5_social-links" style={{ marginTop: -margin }}>
            <p className="t5_link">https://projetctlink.com.sr</p>
            <p className="t5_link">https://medium.com.sr</p>
            <p className="t5_link">https://portofiol.com.sr</p>
          </div>
        </div>
      </div>

      {/* REFERENCES ////////////////////////////////////// */}
      <div className="t5_sec">
        <h1 className="t5_title">REFERENCES</h1>
        <div className="t5_underline" style={{ marginTop: margin }} />
        <div
          className="grid grid-cols-3 gap-[6px]"
          style={{ marginTop: -margin }}
        >
          <div>
            <h3 className="t5_text italic">Fornt-end developer</h3>
            <h2 className="font-bold text-black">Eleson Burgerg</h2>
            <p className="t5_text">Organization Pvt. Ltd.</p>
            <p className="t5_text">elson@gmail.com</p>
            <p className="t5_text">https://certifiacte.url.com</p>
          </div>
          <div>
            <h3 className="t5_text italic">Fornt-end developer</h3>
            <h2 className="font-bold text-black">Eleson Burgerg</h2>
            <p className="t5_text">Organization Pvt. Ltd.</p>
            <p className="t5_text">elson@gmail.com</p>
            <p className="t5_text">https://certifiacte.url.com</p>
          </div>
        </div>
      </div>

      {/* LANGUAGE ////////////////////////////////////// */}
      <div className="t5_sec">
        <h1 className="t5_title">LANGUAGES</h1>
        <div className="t5_underline" style={{ marginTop: margin }} />
        <div className="langua" style={{ marginTop: -margin }}>
          <p className="t5_text !text-center">Nepali / English / hindi</p>
        </div>
      </div>
    </>
  );
};

export default Template5;
