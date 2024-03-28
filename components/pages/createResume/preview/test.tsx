import jsPDF from "jspdf";
import { DribbleIcon } from "@/assets/icon";

const Test = () => {
  const doc = new jsPDF({
    unit: "px",
    compress: true,
  });

  const handleDownload = async () => {
    const element = document.getElementById("a4-cover");

    if (element) {
      doc.html(element, {
        callback: async function (doc) {
          doc.save("file.pdf");
        },
        autoPaging: "text",
        margin: [20, 0, 20, 0],
      });
    }
  };

  return (
    <main id="a4-cover" onClick={handleDownload}>
      <h1>Title</h1>
      <DribbleIcon id="svg" /> {/* svg icon  */}
      <p className="text-[9px] text-[rgb(82,86,89)]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
      </p>
    </main>
  );
};

export default Test;
