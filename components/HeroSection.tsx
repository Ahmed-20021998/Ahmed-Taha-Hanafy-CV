"use client";
import React, { useEffect, useState } from "react";
import ATAPhotoroom from "../public/ATAPhotoroom.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay,
      },
    },
  });

  return (
    <div
      style={{
        padding: "5%",
        marginTop:10,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Name */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp(0)}
        style={{
          fontSize: isMobile ? 30 : 48,
          fontWeight: 700,
          marginBottom: 30,
          lineHeight: 1.2,
        }}
      >
        Ahmed Taha Hanafy Taha
      </motion.h1>

      {/* Image Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp(0.4)}
        style={{
          backgroundColor: "#FFC067",
          height: isMobile ? 240 : 320,
          width: isMobile ? 240 : 320,
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Image
          src={ATAPhotoroom}
          alt="ATH"
          style={{
            width: isMobile ? "160%" : "220%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeUp(0.8)}
        style={{
          fontSize: isMobile ? 24 : 32,
          fontWeight: 500,
          color: "#333",
        }}
      >
        Software Developer
      </motion.h2>
    </div>
  );
}
