"use client";
import { useState } from "react";
import { BioFormProps } from "@/types";
import jsPDF from "jspdf";
import "svg2pdf.js";
import "@/app/style/template1Style.css";
import Link from "next/link";

const PreviewPdf = ({ bioData }: { bioData: BioFormProps }) => {
  const [margin, setMargin] = useState(0);
  const resumeDoc = new jsPDF({
    unit: "px",
    compress: true,
  });

  const handleDownload = async () => {
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
        .then(() => setMargin(0)); //reset to original style.
    }
  };

  return (
    <main className="a4-container leading-[12px] text-[rgb(82,86,89)]">
      <div
        id="a4-cover"
        style={{
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: "9px",
        }}
      >
        <div className="header">
          <div>
            <h1 onClick={handleDownload} className="">
              Manoj rai
            </h1>
            <h2>Front-end developer</h2>
          </div>
          <div>
            <p className="text">manojthulung03@gmail.com</p>
            <p className="text">+977 9899009980</p>
            <p className="text">Lalitpur, Nepal</p>
          </div>
        </div>
        <br />
        <div className="h-line" style={{ marginTop: 0 + margin }} />
        <div>
          <h2 className="title">PROFILE & CAREER OBJECTIVE</h2>
          <p className="text-content">
            With 1+ years of experience in developing user-friendly, responsive
            websites with optimized cross-browser compatibility and performance,
            I’m on a relentless journey to master web design and development.
            I’ve contributed to projects that enhance brand identity through
            captivating web layouts. <br /> I’m seeking exciting projects that
            push my creative and technical skills, allowing me to create
            user-friendly front-end solutions and shape the web.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-3 py-2">
          <div className="col-span-2">
            <div>
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
            </div>

            <div className="pt-3 pb-2">
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
            </div>

            <div className="py-2">
              <h2 className="title">TRAINING</h2>
              <div className="py-1 px-[6px]">
                <div className="pb-2">
                  <h3 className="font-bold text-black">Graphic Design</h3>
                  <p className="text">International Computer Institue</p>
                  <p className="text">Ithhari, Nepal</p>
                  <p className="italic text">2018</p>
                </div>
              </div>
            </div>

            <div className="py-2">
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
            </div>
          </div>
          <div className="col-span-3">
            <div>
              <h2 className="title">EXPERIENCE</h2>
              <div className="py-1 px-[6px]">
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

                <div className="pb-2">
                  <h3 className="italic">2021 July - 2021 October</h3>
                  <h3 className="font-bold text-black">
                    Front-end Developer Intern
                  </h3>
                  <h3 className="italic text-black font-semibold">
                    Turtle Innovation Pvt. Ltd. | Kanchanpur, Nepal
                  </h3>
                  <ul className="pl-[13px] pr-0 list-disc">
                    <li>Worked with the OnlineBasket team using JavaScript.</li>
                    <li>
                      Worked on multiple small front-end projects using SASS,
                      JavaScript, and ReactJs.
                    </li>
                    <li>
                      Designed UIs for News portals, school forms, and
                      passwordgeneration web pages.
                    </li>
                  </ul>
                </div>

                <div className="pb-2">
                  <h3 className="italic">2021 July - 2021 October</h3>
                  <h3 className="font-bold text-black">
                    Front-end Developer Intern
                  </h3>
                  <h3 className="italic text-black font-semibold">
                    Turtle Innovation Pvt. Ltd. | Kanchanpur, Nepal
                  </h3>
                  <ul className="pl-[13px] pr-0 list-disc">
                    <li>Worked with the OnlineBasket team using JavaScript.</li>
                    <li>
                      Worked on multiple small front-end projects using SASS,
                      JavaScript, and ReactJs.
                    </li>
                    <li>
                      Designed UIs for News portals, school forms, and
                      passwordgeneration web pages.
                    </li>
                  </ul>
                </div>

                <div className="pb-2">
                  <h3 className="italic">2021 July - 2021 October</h3>
                  <h3 className="font-bold text-black">
                    Front-end Developer Intern
                  </h3>
                  <h3 className="italic text-black font-semibold">
                    Turtle Innovation Pvt. Ltd. | Kanchanpur, Nepal
                  </h3>
                  <ul className="pl-[13px] pr-0 list-disc">
                    <li>Worked with the OnlineBasket team using JavaScript.</li>
                    <li>
                      Worked on multiple small front-end projects using SASS,
                      JavaScript, and ReactJs.
                    </li>
                    <li>
                      Designed UIs for News portals, school forms, and
                      passwordgeneration web pages.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PreviewPdf;
