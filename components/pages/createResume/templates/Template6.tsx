import "@/app/style/template6Style.css";

import { TemplateProps } from "@/types";
import { convertToMonthName } from "@/utils/helper";
import { Fragment } from "react";

const Template6 = ({ bioData, resumeData, margin }: TemplateProps) => {
  return (
    <>
      <div className="t6_header" style={{ marginTop: -margin }}>
        <h1 style={{ marginTop: -margin }}>
          {" "}
          {bioData.first_name} {bioData.last_name}
        </h1>
        <h2 style={{ marginTop: -margin }}>{bioData.job_title}</h2>
        {(bioData.email || bioData.phone || bioData.address) && (
          <div className="t6_line_hr" style={{ marginTop: margin }} />
        )}
        <div
          className="py-[6px] flex justify-between items-center flex-wrap"
          style={{ marginTop: -margin }}
        >
          {bioData.email && <p className="t6_text">{bioData.email}</p>}
          {bioData.phone && <p className="t6_text">{bioData.phone}</p>}
          {bioData.address && <p className="t6_text">{bioData.address}</p>}
        </div>
      </div>

      <div style={{ marginTop: -margin }}>
        {/* PROFILE & CAREER OBJECTIVE ////////////////////////////////////// */}
        {bioData.bio_summery && (
          <div className="t6_sec">
            <h2 className="t6_title">SUMMARY</h2>
            <div
              className="t6_description"
              dangerouslySetInnerHTML={{ __html: bioData.bio_summery }}
            />
          </div>
        )}

        {/* EDUCATION ////////////////////////////////////// */}
        {resumeData.educations.length >= 1 &&
          resumeData.educations[0]?.school_name && (
            <div
              className="bg-[#F2F3F4] w-[475px] translate-x-[-30px] px-[30px]"
              style={{ marginTop: margin }}
            >
              <div className="t6_sec">
                <h1 className="t6_title">EDUCATION</h1>
                <div className="grid grid-cols-3 gap-3">
                  {resumeData.educations.map((edu, index) => (
                    <div key={index}>
                      <h3 className="t6_text italic">
                        {edu.start_date}{" "}
                        {edu.currently_study
                          ? " - Present"
                          : edu.end_date && " - " + edu.end_date}
                      </h3>
                      <h2 className="font-bold text-[#4D453F]">
                        {edu?.course}
                      </h2>
                      <p className="t6_text"> {edu?.school_name}</p>
                      <p className="t6_text"> {edu?.location} </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        {/* SKILLS ////////////////////////////////////// */}
        {resumeData.skills.length >= 1 && resumeData.skills[0].skill_title && (
          <div className="t6_sec">
            <h1 className="t6_title">SKILLS</h1>
            {resumeData.skills.map((skl, index) => (
              <div key={index} className="pb-2">
                <h2 className="font-bold text-[#4D453F]">{skl.skill_title}</h2>
                <div className="grid grid-cols-4">
                  {skl.skills_list?.map(
                    (item, index) =>
                      item !== "" && (
                        <p key={index} className="t6_text t6_list">
                          {item}
                        </p>
                      )
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EXPERIENCES ////////////////////////////////////// */}
        {(resumeData.experiences[0]?.job_title ||
          resumeData.experiences[0]?.organization_name) && (
          <div
            className="bg-[#F2F3F4] w-[475px] translate-x-[-30px] px-[30px]"
            style={{ marginTop: margin }}
          >
            <div className="t6_sec">
              <h2 className="t6_title">WORK EXPERIENCES</h2>
              {resumeData.experiences.map((exp, index) => (
                <div
                  key={index}
                  className={
                    resumeData.experiences.length <= index + 1
                      ? ""
                      : "pb-[10px]"
                  }
                >
                  <h2 className="font-bold text-[#4D453F]">{exp.job_title}</h2>
                  <div className="flex flex-wrap justify-between">
                    <h3 className="text-[#4D453F]">
                      {exp?.organization_name}
                      {exp?.location && " / " + exp?.location}
                    </h3>
                    <h3 className="t6_text italic">
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
          </div>
        )}

        {/* CERTIFICATIONS ////////////////////////////////////// */}
        {resumeData.certifications.length >= 1 &&
          resumeData.certifications[0]?.certificate_title && (
            <div className="t6_sec">
              <h1 className="t6_title">CERTIFICATIONS</h1>

              <div className="grid grid-cols-3 gap-[6px]">
                {resumeData.certifications.map((certificate, index) => (
                  <div key={index}>
                    {certificate?.certificate_date && (
                      <h3 className="t6_text italic">
                        {convertToMonthName(certificate?.certificate_date)}
                      </h3>
                    )}
                    <h2 className="font-bold text-[#4D453F]">
                      {certificate.certificate_title}
                    </h2>
                    <p className="t6_text">{certificate.organization}</p>
                    <p className="t6_link">{certificate.certificate_link}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* PROJECTS ////////////////////////////////////// */}
        {resumeData.projects.length >= 1 &&
          resumeData.projects[0].project_title && (
            <div
              className="bg-[#F2F3F4] w-[475px] translate-x-[-30px] px-[30px]"
              style={{ marginTop: margin }}
            >
              <div className="t6_sec">
                <h2 className="t6_title">PROJECTS</h2>
                {resumeData.projects.map((project, index) => (
                  <div
                    key={index}
                    className={
                      resumeData.projects.length <= index + 1 ? "" : "pb-[10px]"
                    }
                  >
                    <h2 className="font-bold text-[#4D453F]">
                      {project.project_title}
                    </h2>
                    <div
                      className="t5_description pt-[2px]"
                      dangerouslySetInnerHTML={{
                        __html: project.summery,
                      }}
                    />
                    <p className="t6_link">{project.project_link}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* SOCIAL LINKS ////////////////////////////////////// */}
        {resumeData.socialLinks[0]?.url && (
          <div className="t6_sec">
            <h2 className="t6_title">SOCIAL LINKS</h2>
            <div className="t6_social-links grid grid-cols-2">
              {resumeData?.socialLinks.map((link, index) => (
                <p key={index} className="t6_link">
                  {link.url}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* REFERENCES ////////////////////////////////////// */}
        {resumeData.references.length >= 1 &&
          resumeData.references[0].full_name && (
            <div
              className="bg-[#F2F3F4] w-[475px] translate-x-[-30px] px-[30px]"
              style={{ marginTop: margin }}
            >
              <div className="t6_sec">
                <h1 className="t6_title">REFERENCES</h1>
                <div className="grid grid-cols-3 gap-[6px]">
                  {resumeData.references.map((ref, index) => (
                    <div key={index}>
                      <h3 className="t6_text italic">{ref.relationship}</h3>
                      <h2 className="font-bold text-[#4D453F]">
                        {ref.full_name}
                      </h2>
                      <p className="t6_text">{ref.organization}</p>
                      <p className="t6_text">{ref.email}</p>
                      <p className="t6_text">{ref.social_link}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        {/* LANGUAGE ////////////////////////////////////// */}
        {resumeData.languages.length >= 1 && resumeData?.languages[0] && (
          <div className="t6_sec">
            <h1 className="t6_title">LANGUAGES</h1>
            <div className="langua grid grid-cols-4 gap-x-3">
              {resumeData.languages.map((lang, index) => (
                <p key={index} className="t6_list t6_text">
                  {lang}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Template6;
