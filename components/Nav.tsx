"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AT from "../public/AT.jpg";
import { MdMenu } from "react-icons/md";

export default function Nav() {
  const [showSecondNav, setShowSecondNav] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Mark component as mounted

    const handleScroll = () => {
      setShowSecondNav(window.scrollY > 200); // Trigger point
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return null; // Prevent mismatch by skipping SSR

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "75px",
          zIndex: 999,
        }}
      >
        {/* First Navbar: Hamburger */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "75px",
            backgroundColor: "#F0F0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 5%",
            transition: "opacity 0.7s ease",
            opacity: showSecondNav ? 0 : 1,
            pointerEvents: showSecondNav ? "none" : "auto",
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: 30 }}>myCV</h1>
          <MdMenu size={30} />
        </div>

        {/* Second Navbar: Image + Name */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "75px",
            backgroundColor: "#F0F0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0 5%",
            transition: "opacity 0.7s ease",
            opacity: showSecondNav ? 1 : 0,
            pointerEvents: showSecondNav ? "auto" : "none",
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              height: "70px",
              width: "70px",
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <Image
              src={AT}
              alt="AT"
              style={{
                height: "70px",
                width: "70px",
                borderRadius: 100,
                border: "2px solid black",
              }}
            />
          </div>

          <div style={{ marginLeft: "10px" }}>
            <h2 style={{ fontWeight: "bold" }}>Ahmed Taha Hanafy Taha</h2>
            <h2 style={{ fontWeight: "bold", color: "#FFC067" }}>
              Software Developer
            </h2>
          </div>
        </div>
      </div>

      {/* Padding so content doesn't hide under fixed navbar */}
      <div style={{ marginTop: "85px" }}></div>
    </>
  );
}
