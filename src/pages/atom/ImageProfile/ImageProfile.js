import React from "react";

export default function ImageProfile({ image }) {
  return (
    <>
      {image !== null ? (
        <img
          src={`${image}`}
          style={{
            color: "#FFF",
            fontWeight: "800",
            marginLeft: "5px",
            borderRadius: "50%",
          }}
          alt=""
          width={50}
          height={50}
        />
      ) : (
        <img
          src="/assets/img/no-image.jpg"
          style={{
            color: "#FFF",
            fontWeight: "800",
            marginLeft: "5px",
            borderRadius: "50%",
          }}
          alt=""
          width={50}
          height={50}
        />
      )}
    </>
  );
}
