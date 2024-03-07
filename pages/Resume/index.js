const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end", // Aligns items to the right
        alignItems: "center",
        height: "100%",
      }}
    >
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTKGUYGJ_DC5h1ffNTzmHeUx5RSV4qEJNOkvRyw-fQEkzzSJRqcrI0Z0Lu_wFgrMCAdA47dfgIzHV9z/pub?embedded=true"
        style={{
          width: "70%",
          height: "80vh",
          border: "none",
          justifyContent: "center",
        }} // Adjusted to use viewport height (vh)
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
