import React from "react";
import "../Styles/expert.css";

function Expert() {
  const expertImg = [
    "https://www.secretschool.in/assets/images/resource/redit.png",
    "https://www.secretschool.in/assets/images/resource/new1.png",
    "https://www.secretschool.in/assets/images/resource/new4.png",
    "https://www.secretschool.in/assets/images/resource/allian.png",
    "https://www.secretschool.in/assets/images/resource/figma.png",
  ];
  const expertImg2 = [
    "https://www.secretschool.in/assets/images/resource/new3.png",
    "https://www.secretschool.in/assets/images/resource/new6.png",
    "https://www.secretschool.in/assets/images/resource/new5.png",
    "https://www.secretschool.in/assets/images/resource/new2.png",
    "https://www.secretschool.in/assets/images/resource/new3.png",
  ];
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h2 className="expert-title">
        UNLOCK THE SECRET OF SUCCESS FROM OUR INDUSTRY EXPERTS
      </h2>
      <div>
        {expertImg.map((img) => (
          <img style={{ margin: "5px" }} src={img} className="expertimg1" />
        ))}
      </div>

      <div>
        {expertImg2.map((img) => (
          <img style={{ margin: "5px" }} src={img} className="expertimg2" />
        ))}
      </div>
    </div>
  );
}

export default Expert;
