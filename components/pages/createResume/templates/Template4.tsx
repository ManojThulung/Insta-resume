import "@/app/style/template4Style.css";

import { TemplateProps } from "@/types";
import { convertToMonthName } from "@/utils/helper";
import { Fragment } from "react";

const Template4 = ({ bioData, resumeData, margin }: TemplateProps) => {
  return (
    <>
      <div className="t4_header" style={{ marginTop: -margin }}>
        <h1 style={{ marginTop: -margin }}>
          {bioData.first_name} {bioData.last_name}
        </h1>
        <h2 style={{ marginTop: -margin }}>{bioData.job_title}</h2>
        <div className="pb-2">
          <p className="t4_text !text-center">
            {bioData.email} &nbsp;
            {bioData.phone.trim() && " | "}&nbsp;
            {bioData.phone} &nbsp;
            {bioData.address.trim() && " | "} &nbsp;
            {bioData.address}
          </p>
        </div>
      </div>
      {bioData.bio_summery && (
        <div className="t4_line_hr" style={{ marginTop: margin }} />
      )}
      <div className="flex justify-between gap-2">
        <div className="w-[64%]" style={{ marginTop: -margin }}>
          {/* PROFILE & CAREER OBJECTIVE ////////////////////////////////////// */}
          {bioData.bio_summery && (
            <div className="t4_sec">
              <h2 className="t4_title">PROFILE & CAREER OBJECTIVE</h2>
              <div className="t4_underline" style={{ marginTop: margin }} />
              <div
                className="px-1 t4_description"
                style={{ marginTop: -margin }}
                dangerouslySetInnerHTML={{ __html: bioData.bio_summery }}
              />
            </div>
          )}

          {/* EXPERIENCES ////////////////////////////////////// */}
          {(resumeData.experiences[0]?.job_title ||
            resumeData.experiences[0]?.organization_name) && (
            <div className="t4_sec">
              <h2 className="t4_title">WORK EXPERIENCES</h2>
              <div className="t4_underline" style={{ marginTop: margin }} />
              {resumeData.experiences.map((exp, index) => (
                <div
                  key={index}
                  className={
                    resumeData.experiences.length <= index + 1
                      ? ""
                      : "pb-[10px]"
                  }
                  style={{ marginTop: -margin }}
                >
                  <h2 className="font-bold text-black">{exp?.job_title}</h2>
                  <h3 className="t4_text italic">
                    {exp?.start_date && convertToMonthName(exp?.start_date)}
                    {!exp?.currently_employed
                      ? exp?.end_date &&
                        " - " + convertToMonthName(exp?.end_date)
                      : " - Present"}
                  </h3>
                  <h3 className="text-black">
                    {exp?.organization_name}
                    {exp?.location && " / " + exp?.location}
                  </h3>
                  <div
                    className="t4_description pt-[2px]"
                    dangerouslySetInnerHTML={{
                      __html: exp?.work_description,
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS ////////////////////////////////////// */}
          {resumeData.projects.length >= 1 &&
            resumeData.projects[0].project_title && (
              <div className="t4_sec">
                <h2 className="t4_title">PROJECTS</h2>
                <div className="t4_underline" style={{ marginTop: margin }} />
                {resumeData.projects.map((project, index) => (
                  <div
                    key={index}
                    className={
                      resumeData.projects.length <= index + 1 ? "" : "pb-[10px]"
                    }
                    style={{ marginTop: -margin }}
                  >
                    <h2 className="font-bold text-black">
                      {project.project_title}
                    </h2>
                    <div
                      className="t4_description pt-[2px]"
                      dangerouslySetInnerHTML={{
                        __html: project.summery,
                      }}
                    />
                    <p className="t4_link">{project.project_link}</p>
                  </div>
                ))}
              </div>
            )}

          {/* SOCIAL LINKS ////////////////////////////////////// */}
          {resumeData.socialLinks[0]?.url && (
            <div className="t4_sec">
              <h2 className="t4_title">SOCIAL LINKS</h2>
              <div className="t4_underline" style={{ marginTop: margin }} />
              <div className="t4_social-links" style={{ marginTop: -margin }}>
                {resumeData?.socialLinks.map((link, index) => (
                  <p key={index} className="t4_link">
                    {link.url}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="t4_line_vr" />
        <div className="w-[32%]" style={{ marginTop: -margin }}>
          {/* EDUCATION ////////////////////////////////////// */}
          {resumeData.educations.length >= 1 &&
            resumeData.educations[0]?.school_name && (
              <div className="t4_sec">
                <h1 className="t4_title">EDUCATION</h1>
                <div className="t4_underline" style={{ marginTop: margin }} />
                {resumeData.educations.map((edu, index) => (
                  <div
                    key={index}
                    className="pb-2"
                    style={{ marginTop: -margin }}
                  >
                    <h3 className="t4_text italic">
                      {edu.start_date}{" "}
                      {edu.currently_study
                        ? " - Present"
                        : edu.end_date && " - " + edu.end_date}
                    </h3>
                    <h2 className="font-bold text-black">{edu?.course}</h2>
                    <p className="t4_text">{edu?.school_name} </p>
                    <p className="t4_text">{edu?.location}</p>
                  </div>
                ))}
              </div>
            )}

          {/* SKILLS ////////////////////////////////////// */}
          {resumeData.skills.length >= 1 &&
            resumeData.skills[0].skill_title && (
              <div className="t4_sec">
                <h1 className="t4_title">SKILLS</h1>
                <div className="t4_underline" style={{ marginTop: margin }} />
                {resumeData.skills.map((skl, index) => (
                  <div
                    key={index}
                    className="pb-2"
                    style={{ marginTop: -margin }}
                  >
                    <h2 className="font-bold text-black">{skl.skill_title}</h2>
                    <div className="px-1 flex items-center justify-start flex-wrap whitespace-nowrap">
                      {skl.skills_list?.map((item, index) => (
                        <Fragment key={index}>
                          {item !== "" && (
                            <>
                              <p className="t2_text">{item}</p>
                              {skl.skills_list.length > 1 + index && (
                                <p className="t2_text">,&nbsp; </p>
                              )}
                            </>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

          {/* CERTIFICATIONS ////////////////////////////////////// */}
          {resumeData.certifications.length >= 1 &&
            resumeData.certifications[0].certificate_title && (
              <div className="t4_sec">
                <h1 className="t4_title">CERTIFICATIONS</h1>
                <div className="t4_underline" style={{ marginTop: margin }} />
                {resumeData.certifications.map((certificate, index) => (
                  <div
                    key={index}
                    className="pb-2"
                    style={{ marginTop: -margin }}
                  >
                    {certificate?.certificate_date && (
                      <h3 className="t4_text italic">
                        {convertToMonthName(certificate?.certificate_date)}
                      </h3>
                    )}
                    <h2 className="font-bold text-black">
                      {certificate.certificate_title}
                    </h2>
                    <p className="t4_text">{certificate.organization}</p>
                    <p className="t4_text">{certificate.certificate_link}</p>
                  </div>
                ))}
              </div>
            )}

          {/* LANGUAGE ////////////////////////////////////// */}
          {resumeData.languages.length >= 1 && resumeData?.languages[0] && (
            <div className="t4_sec">
              <h1 className="t4_title">LANGUAGES</h1>
              <div className="t4_underline" style={{ marginTop: margin }} />
              <div
                className="flex items-center justify-start flex-wrap"
                style={{ marginTop: -margin }}
              >
                {resumeData.languages.map((lang, index) => (
                  <Fragment key={index}>
                    {lang !== "" && (
                      <>
                        {index > 0 && <p className="t2_text">, &nbsp;</p>}
                        <p className="t2_text">{lang}</p>
                      </>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          )}

          {/* REFERENCES ////////////////////////////////////// */}
          {resumeData.references.length >= 1 &&
            resumeData.references[0].full_name && (
              <div className="t4_sec">
                <h1 className="t4_title">REFERENCES</h1>
                <div className="t4_underline" style={{ marginTop: margin }} />
                {resumeData.references.map((ref, index) => (
                  <div
                    key={index}
                    className="pb-2"
                    style={{ marginTop: -margin }}
                  >
                    <h3 className="t4_text italic">{ref.relationship}</h3>
                    <h2 className="font-bold text-black">{ref.full_name}</h2>
                    <p className="t4_text">{ref.organization}</p>
                    <p className="t4_text">{ref.email}</p>
                    <p className="t4_text">{ref.social_link}</p>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default Template4;
