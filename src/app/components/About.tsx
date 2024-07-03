import React from "react";
import "../Styles/about.css";
import SubtractIcon from "./SubtractIcon";
import Link from "next/link";

function About() {
  return (
    <div className="about-main-container">
      <div style={{ marginTop: "60px" }}>
        <img
          src="https://www.secretschool.in/assets/images/about/about.png"
          className="about-img"
        />
      </div>
      <div>
        <h2 className="about-title">
          WHAT BRINGS <span style={{ color: "#FF3C00" }}>YOU HERE???</span>
        </h2>
        <p className="about-para">
          Starting a business is like sailing into unknown territory, where each
          obstacle is a chance to learn and every change brings opportunity. In
          the crowded world of business, we THE SECRET SCHOOL stands to innovate
          and stay strong. We specialize in providing innovative ideas and
          comprehensive frameworks to kickstart your entrepreneurial journey. In
          the dynamic landscape of startups, having a solid foundation is
          crucial, and that's where we excel. Join us as we empower aspiring
          entrepreneurs to navigate the complexities of startup launching with
          confidence and clarity. Let's transform your ideas into reality
          together!
        </p>
        <div className="about-underLine"></div>
        <Link
          href={"/pages/service"}
          style={{ marginTop: "30px" }}
          className="home-button"
        >
          Learn more <SubtractIcon />
        </Link>
      </div>
    </div>
  );
}

export default About;
