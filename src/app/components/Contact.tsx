import React from "react";
import "../Styles/contact.css";
import MessageIcon from "./MessageIcon";
import LocationIcon from "./LocationIcon";
import CallIcon from "./CallIcon";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-message">
        <h1 style={{ marginLeft: "15px" }}>Get In Touch</h1>
        <div>
          <input
            type="text"
            placeholder="     Name"
            className="contact-textField"
          />
          <input
            type="text"
            placeholder="     Email Address"
            className="contact-textField"
          />
          <input
            type="number"
            placeholder="     Phone Number"
            className="contact-textField"
          />
          <input
            type="text"
            placeholder="     From"
            className="contact-textField"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="     Your Message"
            className="contact-textField2"
          />
        </div>
        <button className="contact-button">Send Message</button>
      </div>

      <div>
        <div style={{ display: "flex", margin: "50px" }}>
          <div className="icon-div">
            <LocationIcon />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <span className="contact-span1">Company Location</span>
            <div className="contact-span2">
              1A, FIRST FLOOR, Beebizzle Building, Pantheerankavu, Kozhikode,
              Kerala-673019
            </div>
          </div>
        </div>

        <div style={{ display: "flex", margin: "50px" }}>
          <div className="icon-div">
            <CallIcon />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <span className="contact-span1">Telephone Number</span>
            <div className="contact-span2">+91 77368 62147</div>
            <div className="contact-span2" style={{ marginTop: "0" }}>
              +91 80894 32334
            </div>
          </div>
        </div>

        <div style={{ display: "flex", margin: "50px" }}>
          <div className="icon-div">
            <MessageIcon />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <span className="contact-span1">Our Email Address</span>
            <div className="contact-span2">contact@secretschool.in</div>
            <div className="contact-span2" style={{ marginTop: "0" }}>
              info@secretschool.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// <MessageIcon/>
//         <LocationIcon/>
