import "@/app/style/template5Style.css";

import { TemplateProps } from "@/types";
import { convertToMonthName } from "@/utils/helper";
import { Fragment } from "react";

const Template5 = ({ bioData, resumeData, margin }: TemplateProps) => {
  return (
    <>
      <div className="t5_header" style={{ marginTop: -margin }}>
        <h1 style={{ marginTop: -margin }}>
          {bioData.first_name} {bioData.last_name}
        </h1>
        <h2 style={{ marginTop: -margin }}>{bioData.job_title}</h2>
        <div className="pb-[10px]">
          <p className="t5_text !text-center" style={{ marginTop: margin - 2 }}>
            {bioData.email} &nbsp;
            {bioData.phone.trim() && " | "}&nbsp;
            {bioData.phone} &nbsp;
            {bioData.address.trim() && " | "} &nbsp;
            {bioData.address}
          </p>
        </div>
      </div>

      <div style={{ marginTop: -margin }}>
        {/* PROFILE & CAREER OBJECTIVE ////////////////////////////////////// */}
        {bioData.bio_summery && (
          <div className="t5_sec">
            <h2 className="t5_title">SUMMARY</h2>
            <div className="t5_underline" style={{ marginTop: margin }} />
            <div
              className="px-1 t5_description"
              style={{ marginTop: -margin }}
              dangerouslySetInnerHTML={{ __html: bioData.bio_summery }}
            />
          </div>
        )}

        {/* EXPERIENCES ////////////////////////////////////// */}
        {(resumeData.experiences[0]?.job_title ||
          resumeData.experiences[0]?.organization_name) && (
          <div className="t5_sec">
            <h2 className="t5_title">EXPERIENCES</h2>
            <div className="t5_underline" style={{ marginTop: margin }} />
            {resumeData.experiences.map((exp, index) => (
              <div
                key={index}
                className={
                  resumeData.experiences.length <= index + 1 ? "" : "pb-[10px]"
                }
                style={{ marginTop: -margin }}
              >
                <h2 className="font-bold text-black">{exp?.job_title}</h2>
                <div className="flex flex-wrap justify-between">
                  <h3 className="text-black">
                    {exp?.organization_name}
                    {exp?.location && " / " + exp?.location}
                  </h3>
                  <h3 className="t5_text italic">
                    {exp?.start_date && convertToMonthName(exp?.start_date)}
                    {!exp?.currently_employed
                      ? exp?.end_date &&
                        " - " + convertToMonthName(exp?.end_date)
                      : " - Present"}
                  </h3>
                </div>
                <div
                  className="t5_description pt-[2px]"
                  dangerouslySetInnerHTML={{
                    __html: exp?.work_description,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* EDUCATION ////////////////////////////////////// */}
        {resumeData.educations.length >= 1 &&
          resumeData.educations[0]?.school_name && (
            <div className="t5_sec">
              <h1 className="t5_title">EDUCATION</h1>
              <div className="t5_underline" style={{ marginTop: margin }} />
              {resumeData.educations.map((edu, index) => (
                <div
                  key={index}
                  className={
                    resumeData.educations.length <= index + 1 ? "" : "pb-[10px]"
                  }
                  style={{ marginTop: -margin }}
                >
                  <h2 className="font-bold text-black">{edu?.course}</h2>
                  <div className="flex flex-wrap justify-between">
                    <p className="t5_text">
                      {edu?.school_name}{" "}
                      {edu?.location && " / " + edu?.location}
                    </p>
                    <h3 className="t5_text italic">
                      {edu.start_date}{" "}
                      {edu.currently_study
                        ? " - Present"
                        : edu.end_date && " - " + edu.end_date}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

        {/* SKILLS ////////////////////////////////////// */}
        {resumeData.skills.length >= 1 && resumeData.skills[0].skill_title && (
          <div className="t5_sec">
            <h1 className="t5_title">SKILLS</h1>
            <div className="t5_underline" style={{ marginTop: margin }} />
            {resumeData.skills.map((skl, index) => (
              <div
                key={index}
                className={
                  resumeData.skills.length <= index + 1 ? "" : "pb-[10px]"
                }
                style={{ marginTop: -margin }}
              >
                <h2 className="font-bold text-black">{skl?.skill_title}</h2>
                <div
                  className={`flex items-center justify-start gap-x-2 flex-wrap whitespace-nowrap`}
                >
                  {skl &&
                    skl.skills_list?.map((item, index) => (
                      <Fragment key={index}>
                        {item !== "" && (
                          <>
                            <p className="t2_text">{item}</p>
                            {skl.skills_list.length > 1 + index && (
                              <p className="t2_text">/</p>
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
            <div className="t5_sec">
              <h1 className="t5_title">CERTIFICATIONS</h1>
              <div className="t5_underline" style={{ marginTop: margin }} />
              <div
                className="grid grid-cols-3 gap-[6px]"
                style={{ marginTop: -margin }}
              >
                {resumeData.certifications.map((certificate, index) => (
                  <div key={index}>
                    {certificate?.certificate_date && (
                      <h3 className="t5_text italic">
                        {convertToMonthName(certificate?.certificate_date)}
                      </h3>
                    )}
                    <h2 className="font-bold text-black">
                      {certificate.certificate_title}
                    </h2>
                    <p className="t5_text"> {certificate.organization}</p>
                    <p className="t5_link"> {certificate.certificate_link}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* PROJECTS ////////////////////////////////////// */}
        {resumeData.projects.length >= 1 &&
          resumeData.projects[0].project_title && (
            <div className="t5_sec">
              <h2 className="t5_title">PROJECTS</h2>
              <div className="t5_underline" style={{ marginTop: margin }} />
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
                    className="t5_description pt-[2px]"
                    dangerouslySetInnerHTML={{
                      __html: project.summery,
                    }}
                  />
                  <p className="t5_link">{project.project_link}</p>
                </div>
              ))}
            </div>
          )}

        {/* SOCIAL LINKS ////////////////////////////////////// */}
        {resumeData.socialLinks[0]?.url && (
          <div className="t5_sec">
            <h2 className="t5_title">SOCIAL LINKS</h2>
            <div className="t5_underline" style={{ marginTop: margin }} />
            <div className="t5_social-links">
              {resumeData?.socialLinks.map((link, index) => (
                <p key={index} className="t5_link">
                  {link.url}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* REFERENCES ////////////////////////////////////// */}
        {resumeData.references.length >= 1 &&
          resumeData.references[0].full_name && (
            <div className="t5_sec">
              <h1 className="t5_title">REFERENCES</h1>
              <div className="t5_underline" style={{ marginTop: margin }} />
              <div
                className="grid grid-cols-3 gap-[6px]"
                style={{ marginTop: -margin }}
              >
                {resumeData.references.map((ref, index) => (
                  <div key={index}>
                    <h3 className="t5_text italic">{ref.relationship}</h3>
                    <h2 className="font-bold text-black">{ref.relationship}</h2>
                    <p className="t5_text">{ref.organization}</p>
                    <p className="t5_text">{ref.email}</p>
                    <p className="t5_text">{ref.social_link}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* LANGUAGE ////////////////////////////////////// */}
        {resumeData.languages.length >= 1 && resumeData?.languages[0] && (
          <div className="t5_sec">
            <h1 className="t5_title">LANGUAGES</h1>
            <div className="t5_underline" style={{ marginTop: margin }} />
            <div
              className={`flex items-center justify-center gap-x-2 flex-wrap whitespace-nowrap`}
              style={{ marginTop: -margin }}
            >
              {resumeData.languages?.map((lang, index) => (
                <Fragment key={index}>
                  {lang !== "" && (
                    <>
                      <p className="t2_text">{lang}</p>
                      {resumeData.languages.length > 1 + index && (
                        <p className="t2_text">/</p>
                      )}
                    </>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Template5;
