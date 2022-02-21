import React from "react";

export default function ImageProfile({ image, ht, wt, BoRa }) {
  const styles = {
    imgBoRa: {
      color: "#FFF",
      fontWeight: "800",
      marginLeft: "5px",
      borderRadius: "50%",
    },
    img: {
      color: "#FFF",
      fontWeight: "800",
      marginLeft: "5px",
    },
  };
  return (
    <>
      {image !== null ? (
        <img
          src={`${image}`}
          style={BoRa === true ? styles.imgBoRa : styles.img}
          alt=""
          width={wt}
          height={ht}
        />
      ) : (
        <img
          src="/assets/img/no-image.jpg"
          style={BoRa === true ? styles.imgBoRa : styles.img}
          alt=""
          width={wt}
          height={ht}
        />
      )}
    </>
  );
}
