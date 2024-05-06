import "@/app/style/template4Style.css";

import { TemplateProps } from "@/types";
import { convertToMonthName } from "@/utils/helper";
import { Fragment } from "react";

const Template4 = ({ bioData, resumeData, margin }: TemplateProps) => {
  return (
    <>
      <div className="t4_header" style={{ marginTop: -margin }}>
        <h1 style={{ marginTop: -margin }}>Jessie Smith</h1>
        <h2 style={{ marginTop: -margin }}>Software Developer</h2>
        <div className="pb-2">
          <p className="t4_text !text-center">
            jessie.smith@gmail.com | (555) 123-5667 | Himalayan Road, Kathmandu,
            Nepal
          </p>
        </div>
      </div>
      <div className="t4_line_hr" style={{ marginTop: margin }} />
      <div className="flex justify-between gap-2">
        <div className="w-[64%]" style={{ marginTop: -margin }}>
          {/* PROFILE & CAREER OBJECTIVE ////////////////////////////////////// */}
          <div className="t4_sec">
            <h2 className="t4_title">PROFILE & CAREER OBJECTIVE</h2>
            <div className="t4_underline" style={{ marginTop: margin }} />
            <div className="px-1 t4_description" style={{ marginTop: -margin }}>
              <p>
                Vestibulum id nulla sit amet nunc malesuada lacinia. Integer in
                ante vel justo consequat condimentum. Praesent quis nisi auctor,
                vehicula mi eu, congue justo. Duis auctor neque ut lorem
                fermentum.
              </p>
              <p>
                Praesent vel eleifend ipsum laoreet quis nisi auctor, vehicula
                mi eu, congue justo. Duis auctor neque ut lorem fermentum, vel
                eleifend ipsum laoreet
              </p>
            </div>
          </div>

          {/* EXPERIENCES ////////////////////////////////////// */}
          <div className="t4_sec">
            <h2 className="t4_title">WORK EXPERIENCES</h2>
            <div className="t4_underline" style={{ marginTop: margin }} />
            <div className="pb-[10px]" style={{ marginTop: -margin }}>
              <h2 className="font-bold text-black">Senior Software Engineer</h2>
              <h3 className="t4_text italic">2022 January - Present</h3>
              <h3 className="text-black">
                Tech Innovations Ltd. / Silicon Valley, USA
              </h3>
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
              <h3 className="t4_text italic">2018 June - 2022 October</h3>
              <h3 className="text-black">
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
            </div>
          </div>

          {/* PROJECTS ////////////////////////////////////// */}
          <div className="t4_sec">
            <h2 className="t4_title">PROJECTS</h2>
            <div className="t4_underline" style={{ marginTop: margin }} />
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
              <p className="t4_link">https://project.link.com.np</p>
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
              <p className="t4_link">https://project.link.com.np</p>
            </div>
            <div className="">
              <h2 className="font-bold text-black">
                Software Development Engineer
              </h2>
              <h3 className="t4_text italic">2018 June - 2022 October</h3>
              <h3 className="text-black">
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
              <p className="t4_link">https://project.link.com.np</p>
            </div>
          </div>

          {/* SOCIAL LINKS ////////////////////////////////////// */}
          <div className="t4_sec">
            <h2 className="t4_title">SOCIAL LINKS</h2>
            <div className="t4_underline" style={{ marginTop: margin }} />
            <div className="t4_social-links" style={{ marginTop: -margin }}>
              <p className="t4_link">https://projetctlink.com.sr</p>
              <p className="t4_link">https://medium.com.sr</p>
              <p className="t4_link">https://portofiol.com.sr</p>
            </div>
          </div>
        </div>
        <div className="t4_line_vr" />
        <div className="w-[32%]" style={{ marginTop: -margin }}>
          {/* EDUCATION ////////////////////////////////////// */}
          <div className="t4_sec">
            <h1 className="t4_title">EDUCATION</h1>
            <div className="t4_underline" style={{ marginTop: margin }} />
            <div className="pb-2" style={{ marginTop: -margin }}>
              <h3 className="t4_text italic">2017 - 2021</h3>
              <h2 className="font-bold text-black">
                Bachelor in Computer Science
              </h2>
              <p className="t4_text">Himalayan College </p>
              <p className="t4_text">Pokhara, Nepal</p>
            </div>
            <div>
              <h3 className="t4_text italic">2016 - 2018</h3>
              <h2 className="font-bold text-black">Hight School Diploma</h2>
              <p className="t4_text">Everest College</p>
              <p className="t4_text">Kathmandu, Nepal</p>
            </div>
          </div>

          {/* SKILLS ////////////////////////////////////// */}
          <div className="t4_sec">
            <h1 className="t4_title">SKILLS</h1>
            <div className="t4_underline" style={{ marginTop: margin }} />
            <div className="pb-2" style={{ marginTop: -margin }}>
              <h2 className="font-bold text-black">Programming Skills</h2>
              <p className="t4_text">
                ReactJS, NextJS, Github, NodeJS, MySQL, VueJS, Firebase
              </p>
            </div>
            <div>
              <h2 className="font-bold text-black">Soft Skills</h2>
              <p className="t4_text">
                Communication, Team work, Project management, Time management,
                Multi-tasking
              </p>
            </div>
          </div>

          {/* CERTIFICATIONS ////////////////////////////////////// */}
          <div className="t4_sec">
            <h1 className="t4_title">CERTIFICATIONS</h1>
            <div className="t4_underline" style={{ marginTop: margin }} />
            <div className="pb-2" style={{ marginTop: -margin }}>
              <h3 className="t4_text italic">2018 March</h3>
              <h2 className="font-bold text-black">
                Master In Diploma Computer
              </h2>
              <p className="t4_text">Organization Pvt. Ltd.</p>
              <p className="t4_text">https://certifiacte.url.com</p>
            </div>
            <div className="">
              <h3 className="t4_text italic">2016 March</h3>
              <h2 className="font-bold text-black">Code winner</h2>
              <p className="t4_text">Organization Pvt. Ltd.</p>
              <p className="t4_text">https://certifiacte.url.com</p>
            </div>
          </div>

          {/* LANGUAGE ////////////////////////////////////// */}
          <div className="t4_sec">
            <h1 className="t4_title">LANGUAGES</h1>
            <div className="t4_underline" style={{ marginTop: margin }} />
            <div className="langua" style={{ marginTop: -margin }}>
              <p className="t4_text">Nepali, English, hindi</p>
            </div>
          </div>

          {/* REFERENCES ////////////////////////////////////// */}
          <div className="t4_sec">
            <h1 className="t4_title">REFERENCES</h1>
            <div className="t4_underline" style={{ marginTop: margin }} />
            <div className="pb-2" style={{ marginTop: -margin }}>
              <h3 className="t4_text italic">Fornt-end developer</h3>
              <h2 className="font-bold text-black">Eleson Burgerg</h2>
              <p className="t4_text">Organization Pvt. Ltd.</p>
              <p className="t4_text">elson@gmail.com</p>
              <p className="t4_text">https://certifiacte.url.com</p>
            </div>
            <div>
              <h3 className="t4_text italic">Fornt-end developer</h3>
              <h2 className="font-bold text-black">Eleson Burgerg</h2>
              <p className="t4_text">Organization Pvt. Ltd.</p>
              <p className="t4_text">elson@gmail.com</p>
              <p className="t4_text">https://certifiacte.url.com</p>
            </div>
            <div className="">
              <h3 className="t4_text italic">2016 March</h3>
              <h2 className="font-bold text-black">Code winner</h2>
              <p className="t4_text">Organization Pvt. Ltd.</p>
              <p className="t4_text">https://certifiacte.url.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template4;
