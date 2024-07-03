"use client";
import React from "react";
import Drawer from "react-modern-drawer";
import MenuIcon from "./MenuIcon";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";

const ModerDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const nanLinks = ["Home", "About", "Service", "Experts", "Contact"];

  return (
    <>
      <button
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#0b0b0b",
          border: "none",
          marginTop: "5px",
        }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{ height: "250px", width: "100vw" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {nanLinks.map((links) => (
            <Link
              href={""}
              style={{
                borderBottom: "1px solid",
                height: "50px",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <span style={{ marginLeft: "30px" }}>{links}</span>
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default ModerDrawer;
