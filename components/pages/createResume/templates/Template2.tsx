import "@/app/style/template2Style.css";
import { TemplateProps } from "@/types";
import { convertToMonthName } from "@/utils/helper";
import Link from "next/link";
import { Fragment } from "react";

const Template2 = ({ bioData, resumeData, margin }: TemplateProps) => {
  return (
    <>
      <div className="t2_header" style={{ marginTop: -margin }}>
        <h1>
          {bioData.first_name} {bioData.last_name}
        </h1>
        <h2>{bioData.job_title}</h2>
        {(bioData.email || bioData.phone || bioData.address) && (
          <hr style={{ marginBottom: -margin }} />
        )}
        <div className="t2_sub-header">
          {bioData.email && <p className="t2_text">{bioData.email}</p>}
          {bioData.phone && <p className="t2_text">|</p>}
          {bioData.phone && <p className="t2_text">{bioData.phone}</p>}
          {bioData.address && <p className="t2_text">|</p>}
          {bioData.address && <p className="t2_text">{bioData.address}</p>}
        </div>
        {(bioData.email || bioData.phone || bioData.address) && (
          <hr style={{ marginTop: margin }} />
        )}
      </div>

      {/* PROFILE & CAREER OBJECTIVE ////////////////////////////////////// */}
      {bioData.bio_summery && (
        <div className="t2_sec !pt-2" style={{ marginTop: -margin }}>
          <h2 className="t2_title">PROFILE & CAREER OBJECTIVE</h2>
          <div
            className="px-1 pt-[6px] t2_description"
            dangerouslySetInnerHTML={{ __html: bioData.bio_summery }}
          />
        </div>
      )}

      {/* SOCIAL LINKS ///////////////////////////////////////////// */}
      {resumeData.socialLinks[0]?.url && (
        <>
          <hr style={{ marginTop: margin }} />
          <div className="t2_sec" style={{ marginTop: -margin }}>
            <h2 className="t2_title">CONTACT</h2>
            <div className="pt-2 px-1">
              {resumeData?.socialLinks.map((link, index) => (
                <Link key={index} href={link.url} target="__blank">
                  <p className="t2_link">{link.url}</p>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* EXPERIENCE ///////////////////////////////////////////// */}
      {(resumeData.experiences[0]?.job_title ||
        resumeData.experiences[0]?.organization_name) && (
        <>
          <hr style={{ marginTop: margin }} />
          <div className="t2_sec" style={{ marginTop: -margin }}>
            <h2 className="t2_title">EXPERIENCE</h2>
            {resumeData.experiences.map((exp, index) => (
              <div key={index} className="pt-2 px-1">
                <h2 className="font-bold">{exp?.job_title}</h2>
                <div className="flex items-center justify-between">
                  <p className="t2_sub-title">
                    {exp?.organization_name}
                    {exp?.location && " | " + exp?.location}
                  </p>
                  <p className="t2_sub-title italic">
                    {exp?.start_date && convertToMonthName(exp?.start_date)}
                    {!exp?.currently_employed
                      ? exp?.end_date &&
                        " - " + convertToMonthName(exp?.end_date)
                      : " - Present"}
                  </p>
                </div>
                <div
                  className="t2_description pt-[2px]"
                  dangerouslySetInnerHTML={{
                    __html: exp?.work_description,
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {/* EDUCATION ///////////////////////////////////////////// */}
      {resumeData.educations.length >= 1 &&
        resumeData.educations[0]?.school_name && (
          <>
            <hr style={{ marginTop: margin }} />
            <div className="t2_sec" style={{ marginTop: -margin }}>
              <h2 className="t2_title">EDUCATION</h2>
              {resumeData.educations.map((edu, index) => (
                <div key={index} className="pt-2 px-1">
                  <h2 className="font-bold">{edu?.course}</h2>
                  <div className="flex items-center justify-between">
                    <p className="t2_sub-title">
                      {edu?.school_name}{" "}
                      {edu?.location && " | " + edu?.location}
                    </p>
                    <p className="t2_sub-title italic">
                      {edu.start_date}{" "}
                      {edu.currently_study
                        ? " - Present"
                        : edu.end_date && " - " + edu.end_date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      {/* SKILLS ///////////////////////////////////////////// */}
      {resumeData.skills.length >= 1 && resumeData.skills[0].skill_title && (
        <>
          <hr style={{ marginTop: margin }} />
          <div className="t2_sec" style={{ marginTop: -margin }}>
            {resumeData.skills.map((skl, index) => (
              <div key={index} className={index > 0 ? "pt-3" : ""}>
                <h2 className="t2_title uppercase">{skl.skill_title}</h2>
                <div className="pt-1 px-1 flex items-center justify-start gap-x-2 flex-wrap whitespace-nowrap">
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
              </div>
            ))}
          </div>
        </>
      )}

      {/* PROJECTS ///////////////////////////////////////////// */}
      {resumeData.projects.length >= 1 &&
        resumeData.projects[0].project_title && (
          <>
            <hr style={{ marginTop: margin }} />
            <div className="t2_sec" style={{ marginTop: -margin }}>
              <h2 className="t2_title uppercase">PROJECTS</h2>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="pt-2 px-1">
                  <p className="t2_sub-title">{project.project_title}</p>
                  <div
                    className="t2_description pt-[2px]"
                    dangerouslySetInnerHTML={{
                      __html: project.summery,
                    }}
                  />
                  <p className="t2_link">{project.project_link}</p>
                </div>
              ))}
            </div>
          </>
        )}

      {/* CERTIFICATION ///////////////////////////////////////////// */}
      {resumeData.certifications.length >= 1 &&
        resumeData.certifications[0].certificate_title && (
          <>
            <hr style={{ marginTop: margin }} />
            <div className="t2_sec" style={{ marginTop: -margin }}>
              <h2 className="t2_title">CERTIFICATION</h2>
              {resumeData.certifications.map((certificate, index) => (
                <div key={index} className="pt-2 px-1">
                  <h2 className="font-bold">{certificate.certificate_title}</h2>
                  <div className="flex items-center justify-between">
                    <p className="t2_sub-title">{certificate.organization}</p>
                    <p className="t2_sub-title italic">
                      {certificate.certificate_date}
                    </p>
                  </div>
                  <p className="t2_link">{certificate.certificate_link}</p>
                </div>
              ))}
            </div>
          </>
        )}

      {/* LANGUAGES ///////////////////////////////////////////// */}
      {resumeData.languages.length >= 1 && resumeData?.languages[0] && (
        <>
          <hr style={{ marginTop: margin }} />
          <div className="t2_sec" style={{ marginTop: -margin }}>
            <h2 className="t2_title">LANGUAGES</h2>
            <div className="pt-2 px-1 flex items-center justify-start gap-x-2">
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

      {/* REFERENCES ///////////////////////////////////////////// */}
      {resumeData.references.length >= 1 &&
        resumeData.references[0].full_name && (
          <>
            <hr style={{ marginTop: margin }} />
            <div className="t2_sec" style={{ marginTop: -margin }}>
              <h2 className="t2_title">REFERENCES</h2>
              {resumeData.references.map((ref, index) => (
                <div key={index} className="pt-2 px-1">
                  <h2 className="font-bold">
                    {ref.full_name}
                    {ref.relationship && " - " + ref.relationship}
                  </h2>
                  <p className="t2_sub-title">{ref.organization}</p>
                  <p className="t2_text italic">{ref.email}</p>
                  <p className="t2_link">{ref.social_link}</p>
                </div>
              ))}
            </div>
          </>
        )}
    </>
  );
};

export default Template2;
