import React from "react";

const Resume = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "2rem",
        background: "#0a192f",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        My Resume
      </h1>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              padding: "12px 24px",
              cursor: "pointer",
            }}
          >
            Open in New Tab
          </button>
        </a>

        <a
          href="/resume.pdf"
          download="Manjot_Singh_Resume.pdf"
        >
          <button
            style={{
              padding: "12px 24px",
              cursor: "pointer",
            }}
          >
            Download Resume
          </button>
        </a>
      </div>

      {/* Resume Preview */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          height: "900px",
          borderRadius: "10px",
          overflow: "hidden",
          border: "2px solid #64ffda",
          background: "white",
        }}
      >
        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          width="100%"
          height="100%"
          style={{
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default Resume;