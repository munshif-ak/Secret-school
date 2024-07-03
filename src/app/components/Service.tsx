import React from "react";
import "../Styles/service.css";
import SubtractIcon from "./SubtractIcon";

function Service() {
  const serviceCard = [
    {
      cardNo: "01",
      title1: "Innovative Business Ideation",
      para: "Collaborative brainstorming sessions to generate unique and viable business ideas tailored to the clients interests and market opportunities.",
    },
    {
      cardNo: "02",
      title1: "Idea Validation",
      para: "Utilization of market research and Validation techniques to assess the feasibility and potential of business ideas ,ensuring alignment with market needs and trends.",
    },
    {
      cardNo: "03",
      title1: "Brand Development",
      para: "Assistance in creating compelling brand identities , including brand naming, logo design and brand positioning strategies to establish a strong presence in the market.",
    },
    {
      cardNo: "04",
      title1: "Investor Readiness",
      para: "Preparation of investment pitches,detailed project reports (DPRs),and investor presentations to secure funding from potential investors and venture capitalists.",
    },
  ];
  return (
    <div className="srvice-container">
      <div className="service-title">
        <h2 className="service-title1">
          Our <span style={{ color: "#FF3C00" }}>Offerings</span>
        </h2>
        <button className="home-button">
          Our Service <SubtractIcon />
        </button>
      </div>
      <div className="service-card-container">
        {serviceCard.map((service) => (
          <div className="service-card">
            <span
              style={{ fontWeight: "bolder", fontSize: "48px", opacity: "0.3" }}
            >
              {service.cardNo}
            </span>
            <span className="service-card-head">I{service.title1} </span>
            <div className="service-underline"></div>
            <p className="service-para">{service.para}</p>
            <button className="service-button">
              Know more{" "}
              <span
                style={{
                  color: "#FF3C00",
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                +
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
