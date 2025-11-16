import React from "react";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#eef2ff",
        borderRadius: "10px",
        width: "80%",
        margin: "auto"
      }}
    >
      <h2 style={{ color: "#333" }}>Welcome to My Travel Page</h2>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
       I love to visit New York, Paris, and Tokyo
      </p>
    </main>
  );
}

export default MainContent;
