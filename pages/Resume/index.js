const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTKGUYGJ_DC5h1ffNTzmHeUx5RSV4qEJNOkvRyw-fQEkzzSJRqcrI0Z0Lu_wFgrMCAdA47dfgIzHV9z/pub?embedded=true"
        style={{ width: "600px", height: "800px", border: "none" }}
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
