const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Centered horizontally in the container
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100%", // Take full width of its parent
      }}
    >
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vTKGUYGJ_DC5h1ffNTzmHeUx5RSV4qEJNOkvRyw-fQEkzzSJRqcrI0Z0Lu_wFgrMCAdA47dfgIzHV9z/pub?embedded=true"
        style={{
          width: "100%", // Make iframe responsive by allowing it to fill the width of its parent
          height: "80vh", // Adjust height based on the viewport, might adjust to use 100% if needed
          maxWidth: "800px", // Maximum width of the iframe
          border: "none",
          margin: "0 auto", // Center the iframe in the div if its width is less than the maximum width
        }}
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
