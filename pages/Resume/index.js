const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px", // Adds general padding
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "auto", // Adjusts height based on the content
          overflow: "hidden",
          padding: "0 10px", // Adds padding on the sides for mobile view
          boxSizing: "border-box", // Ensures padding is included in the width calculation
        }}
      >
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTKGUYGJ_DC5h1ffNTzmHeUx5RSV4qEJNOkvRyw-fQEkzzSJRqcrI0Z0Lu_wFgrMCAdA47dfgIzHV9z/pub?embedded=true"
          style={{
            width: "100%",
            height: "80vh", // Or use 'auto' to adjust based on the content
            border: "none",
          }}
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
