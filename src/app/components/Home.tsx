import React from "react";
import SubtractIcon from "./SubtractIcon";
import CallIcon from "./CallIcon";
import VideoIcon from "./VideoIcon";
import "../Styles/home.css";
import Link from "next/link";

function Home() {
  return (
    <div className="home-container">
      <div className="home-cont1">
        <div className="home-join">
          <span>----</span>
          <span style={{ marginLeft: "10px" }}>Join</span>
        </div>
        <h1 className="home-h1">
          Secret School Innovative Solution For Business{" "}
          <span style={{ color: "#FF3C00" }}>Success</span>
        </h1>
        <span className="span-home">
          Empowering Tommorows Titans: Learn ,Launch,Lead
        </span>
        <div className="home-underline"></div>
        <div className="home-button-call">
          <Link href={"/pages/contact"} className="home-button">
            Contact <SubtractIcon />
          </Link>
          <div className="home-call">
            <div style={{ marginTop: "10px" }}>
              <CallIcon />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <span style={{ fontSize: "16px", color: "grey", margin: "10px" }}>
                Call Everyday
              </span>{" "}
              <span style={{ fontSize: "18px", color: "white" }}>
                +91 81297 63535
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          style={{ opacity: "0.55", zIndex: "-1" }}
          src="https://www.secretschool.in/assets/images/slider/hero-img.png"
          className="home-img"
        />
        <Link
          href={"https://www.youtube.com/watch?v=BS4TUd7FJSg&feature=youtu.be"}
          className="home-videoIcon"
        >
          <VideoIcon />
        </Link>
      </div>
    </div>
  );
}

export default Home;
