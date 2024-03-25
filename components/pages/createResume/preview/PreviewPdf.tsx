"use client";
import "@/app/style/template1Style.css";
import { BioFormProps } from "@/types";
import html2pdf from "html2pdf.js";

const PreviewPdf = ({ bioData }: { bioData: BioFormProps }) => {
  const handleDownload = () => {
    console.log("hello world ");
    if (typeof window !== "undefined") {
      const resumeCover = document.getElementById("a4-cover");

      const opt = {
        margin: 0,
        filename: "MyResume.pdf",
        // image: { type: "jpeg", quality: 1 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        enableLinks: true,
      };

      html2pdf(resumeCover, opt);
    }
  };

  // const styles = {
  //   previewContainer: {
  //     padding: "30px",
  //     backgroundColor: "white",
  //     lineHeight: "normal",
  //     fontFamily: '"Times New Roman", Times, serif',
  //     color: "rgba(0,0,0,0.7)",
  //     fontSize: "9.5px",
  //   },
  //   header: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     alignItems: "start",
  //   },
  // };

  // console.log("data ", bioData);

  return (
    <main
      id="a4-cover"
      className="a4-container bg-white leading-[12px] text-[rgba(0,0,0,0.7)] text-[9px]"
      style={{
        fontFamily: '"Times New Roman", Times, serif',
      }}
    >
      <div className="">
        <div className="header">
          <div>
            <h1 onClick={handleDownload}>Manoj rai</h1>
            <h2>Front-end developer</h2>
          </div>
          <div>
            <p>manojthulung03@gmail.com</p>
            <p>+977 9899009980</p>
            <p>Lalitpur, Nepal</p>
          </div>
        </div>
        <div>
          <h2 className="title">PROFILE & CAREER OBJECTIVE</h2>
          <p className="py-1 px-[6px]">
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
                <a href="https://www.manojrai.info.np" target="__blank">
                  <p className="link">Manoj Rai</p>
                </a>
                <p className="link">Manoj Thulung</p>
                <p className="link">manojrai.info.np</p>
                <p className="link">manojthulung03@gmail.com</p>
                <p className="link">@manojrai0</p>
                <p className="link">Lalitpur, Nepal</p>
              </div>
            </div>

            <div className="pt-3 pb-2">
              <h2 className="title">EDUCATION</h2>
              <div className="py-1 px-[6px]">
                <div className="pb-2">
                  <h3 className="font-bold text-black">BSc (Hons) Computing</h3>
                  <p>Itahari International College</p>
                  <p>Morang, Nepal</p>
                  <p className="italic">2019 - 2022</p>
                </div>
                <div className="pb-2">
                  <h3 className="font-bold text-black">
                    High School (Science)
                  </h3>
                  <p>Shree Janasahayog High School asdf asdf asdf</p>
                  <p>Sunsari, Nepal</p>
                  <p className="italic">2019 - 2022</p>
                </div>
                <div className="pb">
                  <h3 className="font-bold text-black">
                    Purwanchal Higher Seconday School asdf asdf sdfsdad
                  </h3>
                  <p>Itahari International College</p>
                  <p>Sunsari, Nepal</p>
                  <p className="italic">2016</p>
                </div>
              </div>
            </div>

            <div className="py-2">
              <h2 className="title">TRAINING</h2>
              <div className="py-1 px-[6px]">
                <div className="pb-2">
                  <h3 className="font-bold text-black">Graphic Design</h3>
                  <p>International Computer Institue</p>
                  <p>Ithhari, Nepal</p>
                  <p className="italic">2018</p>
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
                  <ul className="pl-[13px] pr-0 list-disc">
                    <li>
                      Development and deployment of features on web and mobile
                      applications with NextJs, ReactJs, VueJs, & React Native
                    </li>
                    <li>Debugging and troubleshooting software issues.</li>
                    <li>
                      Collaboration with cross-functional teams to implement
                      innovative solutions.
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
