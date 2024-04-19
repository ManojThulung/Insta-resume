import { BioFormProps, ResumeDataProps } from "@/types";
import { convertToMonthName } from "@/utils/helper";
import Link from "next/link";

import "@/app/style/template1Style.css";

const Template1 = ({
  bioData,
  resumeData,
  margin,
}: {
  bioData: BioFormProps;
  resumeData: ResumeDataProps;
  margin: number;
}) => {
  return (
    <>
      {" "}
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
                <div className="py-[2px] px-[6px]">
                  {resumeData?.socialLinks.map((link, index) => (
                    <Link key={index} href={link.url} target="__blank">
                      <p className="link">{link.url}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          {/* EDUCATION SECTION  ********/}
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

          {/* SKILLS SECTION *************/}
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
                            className="flex justify-start items-start gap-1"
                          >
                            {skl && <p className="text">•</p>}
                            <p className="text">{skl}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

          {/* CERTIFICATIONS  SECTION ************/}
          {resumeData.certifications.length >= 1 &&
            resumeData.certifications[0].certificate_title && (
              <div className="py-2">
                <h2 className="title pb-1">CERTIFICATION</h2>
                {resumeData.certifications.map((certificate, index) => (
                  <div key={index} className="mb-2 px-[6px]">
                    <p className="italic text">
                      {/* {certificate.certificate_date} */}
                      {certificate.certificate_date &&
                        convertToMonthName(certificate.certificate_date)}
                    </p>
                    <h3 className="font-bold text-black">
                      {certificate.certificate_title}
                    </h3>
                    <p className="text">{certificate.organization}</p>
                    <p className="link">{certificate.certificate_link}</p>
                  </div>
                ))}
              </div>
            )}

          {/* REFERENCES SECTION ***************/}
          {resumeData.references.length >= 1 &&
            resumeData.references[0].full_name && (
              <div className="py-2">
                <h2 className="title pb-1">REFERENCES</h2>
                {resumeData.references.map((reference, index) => (
                  <div key={index} className="mb-2 px-[6px]">
                    <h3 className="font-bold text-black">
                      {reference.full_name}
                    </h3>
                    <p className="italic text">{reference.relationship}</p>
                    <p className="text">{reference.organization}</p>
                    <p className="text">{reference.email}</p>
                    <p className="link">{reference.social_link}</p>
                  </div>
                ))}
              </div>
            )}

          {resumeData.languages.length >= 1 && resumeData.languages[0] && (
            <div className="py-2">
              <h2 className="title pb-1">LANGUAGES</h2>
              {resumeData.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex justify-start items-start px-[6px] gap-1"
                >
                  {lang && <p className="text">•</p>}
                  <p className="text">{lang}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* EXPERIENCE SECTION *************/}
        <div className="col-span-3">
          {resumeData.experiences[0].job_title ||
          resumeData.experiences[0].organization_name ? (
            <div>
              <h2 className="title">EXPERIENCE</h2>
              <div className="py-1 px-[6px]">
                {resumeData.experiences.map((exp, index) => (
                  <div key={index} className="pb-2">
                    <h3 className="italic">
                      {exp?.start_date && convertToMonthName(exp?.start_date)}{" "}
                      {!exp?.currently_employed
                        ? exp?.end_date &&
                          "- " + convertToMonthName(exp?.end_date)
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
              <div className="pt-3">
                <h2 className="title">PROJECTS</h2>
                <div className="py-1 px-[6px]">
                  {/* {resumeData.projects.map((project, index) => (<))} */}
                  npm{" "}
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
    </>
  );
};

export default Template1;
