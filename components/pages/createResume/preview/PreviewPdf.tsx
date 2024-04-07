"use client";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { BioFormProps, ResumeDataProps } from "@/types";
import jsPDF from "jspdf";
import "svg2pdf.js";
import "@/app/style/template1Style.css";
import Link from "next/link";

const PreviewPdf = ({
  bioData,
  dwnTrigger,
  setDwnTrigger,
  resumeData,
}: {
  bioData: BioFormProps;
  dwnTrigger: boolean;
  setDwnTrigger: Dispatch<SetStateAction<boolean>>;
  resumeData: ResumeDataProps;
}) => {
  const [margin, setMargin] = useState<number>(0);

  const resumeDoc = new jsPDF({
    unit: "px",
    compress: true,
  });

  // trigger generate function when its triggered from iis parent component
  useEffect(() => {
    if (dwnTrigger) {
      generatePDF();
    }
  }, [dwnTrigger]);

  // to convert html to pdf file
  const generatePDF = () => {
    const element = document.getElementById("a4-cover");
    setMargin(7); //to adjust the margin style when HTML converting to PDF.

    if (element) {
      resumeDoc
        .html(element, {
          callback: async function (resumeDoc) {
            // Save the PDF document
            resumeDoc.save("Resume.pdf");
          },
          autoPaging: "text",
          width: 385,
          windowWidth: 480,
          margin: [30, 30, 30, 30],
        })
        .then(() => {
          setMargin(0);
          setDwnTrigger(false);
        }); //reset to original style.
    }
  };

  return (
    <div className="a4-container leading-[12px] text-[rgb(82,86,89)]">
      <div
        id="a4-cover"
        style={{
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: "9px",
        }}
      >
        <div className="header">
          <div>
            <h1>
              {bioData.first_name} {bioData.last_name}
            </h1>
            <h2>{bioData.job_title}</h2>
          </div>
          <div>
            {bioData.email && <p className="text">{bioData.email}</p>}
            {bioData.phone && <p className="text">{bioData.phone}</p>}
            {bioData.address && <p className="text">{bioData.address}</p>}
          </div>
        </div>
        <br />
        {bioData.bio_summery && (
          <>
            <div className="h-line" style={{ marginTop: 0 + margin }} />
            <div>
              <h2 className="title">PROFILE & CAREER OBJECTIVE</h2>
              <p
                className="text-content"
                dangerouslySetInnerHTML={{ __html: bioData.bio_summery }}
              />
            </div>
          </>
        )}
        <div className="grid grid-cols-5 gap-3 py-2">
          <div className="col-span-2">
            {/* <div>
              <h2 className="title">CONTACT</h2>
              <div className="py-1 px-[6px]">
                <Link href={"https://www.facebook.com/"} target="__blank">
                  <p className="link">https://www.facebook.com/</p>
                </Link>
                <Link href={""} target="__blank">
                  <p className="link">https://www.facebook.com/</p>
                </Link>
                <Link href={""} target="__blank">
                  <p className="link">https://manojrai.info.np</p>
                </Link>
                <Link href={"mailto:manojthulung03@gmail.com"} target="__blank">
                  <p className="link">manojthulung03@gmail.com</p>
                </Link>
                <Link href={""} target="__blank">
                  <p className="link">@manojrai0</p>
                </Link>
                <Link href={""} target="__blank">
                  <p className="link">Lalitpur, Nepal</p>
                </Link>
              </div>
            </div> */}

            {resumeData?.socialLinks.length > 0 &&
              resumeData?.socialLinks[0].url.trim() !== "" && (
                <div>
                  <h2 className="title">CONTACT</h2>
                  <div className="py-1 px-[6px]">
                    {resumeData?.socialLinks.map((link, index) => (
                      <Link key={index} href={link.url} target="__blank">
                        <p className="link">{link.url}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            {/* <div className="pt-3 pb-2">
              <h2 className="title">EDUCATION</h2>
              <div className="py-1 px-[6px] text-[10px]">
                <div className="pb-2">
                  <h3 className="font-bold text-black">BSc (Hons) Computing</h3>
                  <p className="text">Itahari International College</p>
                  <p className="text">Morang, Nepal</p>
                  <p className="italic text">2019 - 2022</p>
                </div>
                <div className="pb-2">
                  <h3 className="font-bold text-black">
                    High School (Science)
                  </h3>
                  <p className="text">
                    Shree Janasahayog High School asdf asdf asdf
                  </p>
                  <p className="text">Sunsari, Nepal</p>
                  <p className="italic text">2019 - 2022</p>
                </div>
                <div className="pb">
                  <h3 className="font-bold text-black">
                    Purwanchal Higher Seconday School asdf asdf sdfsdad
                  </h3>
                  <p className="text">Itahari International College</p>
                  <p className="text">Sunsari, Nepal</p>
                  <p className="italic text">2016</p>
                </div>
              </div>
            </div> */}

            {resumeData.educations.length >= 1 &&
              resumeData.educations[0].school_name && (
                <div className="pt-3 pb-2">
                  <h2 className="title">EDUCATION</h2>
                  {resumeData.educations.map((edu, index) => (
                    <div key={index} className="py-1 px-[6px] text-[10px]">
                      <div className="pb-2">
                        <h3 className="font-bold text-black">{edu.course}</h3>
                        <p className="text">{edu.school_name}</p>
                        <p className="text">{edu.location}</p>
                        <p className="italic text">
                          {edu.start_date}{" "}
                          {edu.currently_study
                            ? " - Present"
                            : edu.end_date && " - " + edu.end_date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            {/* <div className="py-2">
              <h2 className="title">TRAINING</h2>
              <div className="py-1 px-[6px]">
                <div className="pb-2">
                  <h3 className="font-bold text-black">Graphic Design</h3>
                  <p className="text">International Computer Institue</p>
                  <p className="text">Ithhari, Nepal</p>
                  <p className="italic text">2018</p>
                </div>
              </div>
            </div> */}

            {/* SKills section  */}
            {resumeData.skills.length >= 1 &&
              resumeData.skills[0].skill_title && (
                <div className="py-2">
                  {resumeData.skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <h2 className="title mb-[3px]">{skill.skill_title}</h2>
                      {skill.skill_title && (
                        <ul className="px-[6px]">
                          {skill.skills_list.map((skl, index) => (
                            <li
                              key={index}
                              className="flex justify-start gap-1 text-[9px]"
                            >
                              {/* <p
                              className={`h-[3px] w-[3px] rounded-[3px] shrink-0 bg-[rgb(82,86,89)]`}
                              style={{
                                marginTop: 4 + margin,
                              }}
                            /> */}
                              <p className="text">{skl}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            {/* <div className="py-2">
              <h2 className="title pb-1">PROGRAMMING SKILLS</h2>
              <div className="px-[6px]">
                <div className="pb-2">
                  <h3 className="font-bold text-black">Over 5000 lines:</h3>
                  <p>ReactJs, NextJs, JavaScript, CSS, HTML, Tailwind CSS</p>
                </div>
              </div>
              <div className="px-[6px]">
                <div className="pb-2">
                  <h3 className="font-bold text-black">Over 2000 lines:</h3>
                  <p>
                    Redux, VueJs, React Native, SASS, Bootstrap, Firebase, Git &
                    Github
                  </p>
                </div>
              </div>
              <div className="px-[6px]">
                <div className="pb-2">
                  <h3 className="font-bold text-black">Familiar with:</h3>
                  <p>NodeJs, JAVA, Python, SQL, MySQL, C# (ASP.NET)</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-span-3">
            {resumeData.experiences[0].job_title ||
            resumeData.experiences[0].organization_name ? (
              <div>
                <h2 className="title">EXPERIENCE</h2>
                <div className="py-1 px-[6px]">
                  {resumeData.experiences.map((exp, index) => (
                    <div key={index} className="pb-2">
                      <h3 className="italic">
                        {exp?.start_date}{" "}
                        {!exp?.currently_employed
                          ? exp?.end_date && "- " + exp?.end_date
                          : "- Present"}
                      </h3>
                      <h3 className="font-bold text-black">{exp?.job_title}</h3>
                      <h3 className="italic text-black font-semibold">
                        {exp?.organization_name}{" "}
                        {exp?.location && "  | " + exp?.location}
                      </h3>
                      {/* <ul className="pl-[4px] pr-0 text-justify">
                      <li className="flex justify-start gap-1 text-[9px]">
                        <p
                          className={`h-[3px] w-[3px] rounded-[3px] shrink-0 bg-[rgb(82,86,89)]`}
                          style={{
                            marginTop: 4 + margin,
                          }}
                        />
                        <p className="text">{exp?.work_description}</p>
                      </li>
                    </ul> */}
                      <div
                        className="work-desc_container"
                        dangerouslySetInnerHTML={{
                          __html: exp?.work_description,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
                {/* <div className="py-1 px-[6px]">
                <div className="pb-2">
                  <h3 className="italic">2023 March - Present</h3>
                  <h3 className="font-bold text-black">Front-end Developer</h3>
                  <h3 className="italic text-black font-semibold">
                    Unicorn Consults Pvt. Ltd. | Kwun Tong, Hong Kong
                  </h3>
                  <ul className="pl-[4px] pr-0 text-justify">
                    <li className="flex justify-start gap-1 text-[9px]">
                      <p
                        className={`h-[3px] w-[3px] rounded-[3px] shrink-0 bg-[rgb(82,86,89)]`}
                        style={{
                          marginTop: 4 + margin,
                        }}
                      />
                      <p className="text">
                        Development and deployment of features on web and mobile
                        applications with NextJs, ReactJs, VueJs, & React Native
                      </p>
                    </li>
                  </ul>
                </div>            
              </div> */}
              </div>
            ) : (
              ""
            )}

            {resumeData.projects.length >= 1 &&
              resumeData.projects[0].project_title && (
                <div>
                  <h2 className="title">PROJECTS</h2>
                  <div className="py-1 px-[6px]">
                    {/* {resumeData.projects.map((project, index) => (<))} */}
                    {resumeData.projects.map((project, index) => (
                      <div key={index} className="mb-2">
                        <h3 className="font-bold text-black">
                          {project.project_title}
                        </h3>
                        <div
                          className="work-desc_container text"
                          dangerouslySetInnerHTML={{ __html: project.summery }}
                        />
                        <p className="link">{project.project_link}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPdf;
