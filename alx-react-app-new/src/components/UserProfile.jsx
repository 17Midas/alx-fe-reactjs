import React from "react";

function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "20px auto",
        width: "300px",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5"
      }}
    >
      <h2 style={{ color: "blue", marginBottom: "10px" }}>{props.name}</h2>

      <p style={{ margin: "5px 0" }}>
        Age:{" "}
        <span style={{ fontWeight: "bold", color: "darkgreen" }}>
          {props.age}
        </span>
      </p>

      <p style={{ marginTop: "8px", lineHeight: "1.5" }}>{props.bio}</p>
    </div>
  );
}

export default UserProfile;
