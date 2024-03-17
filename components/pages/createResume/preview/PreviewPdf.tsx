const PreviewPdf = () => {
  const styles = {
    previewContainer: {
      padding: "30px",
      backgroundColor: "white",
      lineHeight: "normal",
    },
  };
  return (
    <main style={styles.previewContainer} className="a4-container ">
      <div>
        <div>
          <h1>Manoj Rai</h1>
          <h2>Front-end developer</h2>
        </div>
        <div>
          <p>manojthulung03@gmail.com</p>
          <p>+977 9899009980</p>
          <p>Lalitpur, Nepal</p>
        </div>
      </div>
      <div>
        <h2>PROFILE & CAREER OBJECTIVE</h2>
        <p>
          With 1+ years of experience in developing user-friendly, responsive
          websites with optimized cross-browser compatibility and performance,
          I’m on a relentless journey to master web design and development. I’ve
          contributed to projects that enhance brand identity through
          captivating web layouts. I’m seeking exciting projects that push my
          creative and technical skills, allowing me to create user-friendly
          front-end solutions and shape the web.
        </p>
      </div>
    </main>
  );
};

export default PreviewPdf;
