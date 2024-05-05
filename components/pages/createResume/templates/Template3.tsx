import "@/app/style/template3Style.css";

import { TemplateProps } from "@/types";
import { convertToMonthName } from "@/utils/helper";
import { Fragment } from "react";

const Template3 = ({ bioData, resumeData, margin }: TemplateProps) => {
  return (
    <>
      <div className="t3_header-sec items-start" style={{ marginTop: -margin }}>
        <div className="t3_header" style={{ marginTop: -margin }}>
          <h1>
            {bioData.first_name} {bioData.last_name}
          </h1>
          <h2 style={{ marginTop: -margin }}>{bioData.job_title}</h2>
        </div>
        <div>
          {bioData.address && <p className="t3_text">Kathmandu, Nepal</p>}
          {bioData.phone && <p className="t3_text">(9824) 09234923</p>}
          {bioData.email && <p className="t3_text">jessie.smith@gmail.com</p>}
        </div>
      </div>

      {/* PROFILE & CAREER OBJECTIVE ///////////////////////////////////////// */}
      {bioData.bio_summery && (
        <>
          <div className="t3_border-outer" style={{ marginTop: margin + 6 }}>
            <div className="t3_border-inner" />
          </div>
          <div className="t3_sec" style={{ marginTop: -margin }}>
            <h2 className="t3_title w-[23%]">PROFILE</h2>
            <div
              className="w-[77%] t3_description"
              dangerouslySetInnerHTML={{ __html: bioData.bio_summery }}
            />
          </div>
        </>
      )}

      {/* WORK EXPERIENCE ///////////////////////////////////////// */}
      {(resumeData.experiences[0]?.job_title ||
        resumeData.experiences[0]?.organization_name) && (
        <>
          <div className="t3_border-outer">
            <div className="t3_border-inner" />
          </div>
          <div className="t3_sec" style={{ marginTop: -margin }}>
            <h2 className="t3_title w-[23%]">
              WORK <br />
              EXPERIENCE{" "}
            </h2>
            <div className="w-[77%]">
              {resumeData.experiences.map((exp, index) => (
                <div
                  key={index}
                  className={
                    resumeData.experiences.length <= index + 1 ? "" : "pb-3"
                  }
                >
                  <h2 className="font-bold text-black">{exp?.job_title}</h2>
                  <div className="flex justify-between flex-wrap">
                    <h2 className="!text-black t3_text">
                      {exp?.organization_name}
                      {exp?.location && " | " + exp?.location}
                    </h2>
                    <p className="!text-black t3_text">
                      {exp?.start_date && convertToMonthName(exp?.start_date)}
                      {!exp?.currently_employed
                        ? exp?.end_date &&
                          " - " + convertToMonthName(exp?.end_date)
                        : " - Present"}
                    </p>
                  </div>
                  <div
                    className="t3_description"
                    dangerouslySetInnerHTML={{
                      __html: exp?.work_description,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* SOCIAL LINKS ///////////////////////////////////////// */}
      {resumeData.socialLinks[0]?.url && (
        <>
          <div className="t3_border-outer">
            <div className="t3_border-inner" />
          </div>
          <div className="t3_sec" style={{ marginTop: -margin }}>
            <div className="t3_title w-[23%]">
              SOCIAL <br /> LINKS
            </div>
            <div className="w-[77%] t3_social-links">
              {resumeData?.socialLinks.map((link, index) => (
                <p key={index} className="t3_link">
                  {link.url}
                </p>
              ))}
            </div>
          </div>
        </>
      )}

      {/* EDUCATION ///////////////////////////////////////// */}
      {resumeData.educations.length >= 1 &&
        resumeData.educations[0]?.school_name && (
          <>
            <div className="t3_border-outer">
              <div className="t3_border-inner" />
            </div>
            <div className="t3_sec" style={{ marginTop: -margin }}>
              <div className="t3_title w-[23%]">EUDCATIONS</div>
              <div className="w-[77%]">
                {resumeData.educations.map((edu, index) => (
                  <div
                    key={index}
                    className={
                      resumeData.educations.length <= index + 1 ? "" : "pb-3"
                    }
                  >
                    <h2 className="font-bold text-black">{edu?.course}</h2>
                    <div className="flex justify-between flex-wrap">
                      <h2 className="t3_text">
                        {edu?.school_name}{" "}
                        {edu?.location && " | " + edu?.location}
                      </h2>
                      <p className="!text-black t3_text">
                        {edu.start_date}{" "}
                        {edu.currently_study
                          ? " - Present"
                          : edu.end_date && " - " + edu.end_date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      {/* SKILLS ///////////////////////////////////////// */}
      {resumeData.skills.length >= 1 && resumeData.skills[0].skill_title && (
        <>
          <div className="t3_border-outer">
            <div className="t3_border-inner" />
          </div>
          <div className="t3_sec" style={{ marginTop: -margin }}>
            <h2 className="t3_title w-[23%]">SKILLS</h2>
            <div className="w-[77%]">
              {resumeData.skills.map((skl, index) => (
                <Fragment key={index}>
                  <h2 className="font-bold text-black">{skl.skill_title}</h2>
                  <div
                    className={`flex items-center justify-start gap-x-3 flex-wrap whitespace-nowrap ${
                      resumeData.skills.length <= index + 1 ? "" : "pb-3"
                    }`}
                  >
                    {skl.skills_list?.map((item, index) => (
                      <Fragment key={index}>
                        {item !== "" && (
                          <>
                            <p className="t2_text">{item}</p>
                            {skl.skills_list.length > 1 + index && (
                              <p className="t2_text">|</p>
                            )}
                          </>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </>
      )}

      {/* PROJECTS ///////////////////////////////////////// */}
      {resumeData.projects.length >= 1 &&
        resumeData.projects[0].project_title && (
          <>
            <div className="t3_border-outer">
              <div className="t3_border-inner" />
            </div>
            <div className="t3_sec" style={{ marginTop: -margin }}>
              <h2 className="t3_title w-[23%]">PROJECTS</h2>
              <div className="w-[77%]">
                {resumeData.projects.map((project, index) => (
                  <div
                    key={index}
                    className={
                      resumeData.projects.length >= index + 1 ? "" : "pb-2"
                    }
                  >
                    <h2 className="font-bold text-black">
                      {project.project_title}
                    </h2>
                    <div
                      className="t3_description"
                      dangerouslySetInnerHTML={{
                        __html: project.summery,
                      }}
                    ></div>
                    <p className="t3_link">{project.project_link}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      {/* CERTIFICATIONS ///////////////////////////////////////// */}
      {resumeData.certifications.length >= 1 &&
        resumeData.certifications[0].certificate_title && (
          <>
            <div className="t3_border-outer">
              <div className="t3_border-inner" />
            </div>
            <div className="t3_sec" style={{ marginTop: -margin }}>
              <h2 className="t3_title w-[23%]">CERTIFICATIONS</h2>
              <div className="w-[77%] grid grid-cols-2 gap-2">
                {resumeData.certifications.map((certificate, index) => (
                  <div key={index} className="pb-2 col-span-1">
                    <h2 className="font-bold text-black">
                      {certificate.certificate_title}
                    </h2>
                    <p className="t3_text"> {certificate.certificate_date}</p>
                    <p className="t3_text !text-black">
                      {certificate.organization}
                    </p>

                    <p className="t3_link">{certificate.certificate_link}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      {/* REFERENCES  ///////////////////////////////////////// */}
      {resumeData.references.length >= 1 &&
        resumeData.references[0].full_name && (
          <>
            <div className="t3_border-outer">
              <div className="t3_border-inner" />
            </div>
            <div className="t3_sec" style={{ marginTop: -margin }}>
              <h2 className="t3_title w-[23%]">REFERENCES</h2>
              <div className="w-[77%] grid grid-cols-2 gap-2">
                {resumeData.references.map((ref, index) => (
                  <div key={index} className="pb-2 col-span-1">
                    <h2 className="font-bold text-black">{ref.full_name}</h2>
                    <p className="t3_text">{ref.relationship}</p>
                    <p className="t3_text">{ref.organization}</p>
                    <p className="t3_text">{ref.email}</p>
                    <p className="t3_link">{ref.social_link}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

      {/* LANGUAGE ///////////////////////////////////////// */}
      {resumeData.languages.length >= 1 && resumeData?.languages[0] && (
        <>
          <div className="t3_border-outer">
            <div className="t3_border-inner" />
          </div>
          <div className="t3_sec" style={{ marginTop: -margin }}>
            <h2 className="t3_title w-[23%]">LANGUAGES</h2>
            <div className="w-[77%] flex items-center justify-start gap-x-3 flex-wrap whitespace-nowrap">
              {resumeData.languages.map((lang, index) => (
                <Fragment key={index}>
                  {lang !== "" && (
                    <>
                      {index > 0 && <p className="t2_text">|</p>}
                      <p className="t2_text">{lang}</p>
                    </>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Template3;
