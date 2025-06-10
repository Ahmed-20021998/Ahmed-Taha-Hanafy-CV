"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FA from "../public/FA.png"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  },
});

export default function EducationSection() {
  return (
    <section
      style={{
        padding: "100px 24px",
        backgroundColor: "#F0F0F0",
        color: "#000",
      }}
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp(0)}
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "64px",
          color: "#1a1a1a",
        }}
      >
        <span style={{ color: "#FFC067" }}>Education</span>
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp(0.2)}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
          textAlign: "center",
        }}
      >
        {/* 👇 Faculty Image */}
        <Image
          src={FA} // ✅ Replace with your image path (local or external URL)
          alt="Faculty"
          width={160}
          height={160}
          style={{
            width: "160px",
            height: "160px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "24px",
            
          }}
          priority
        />

        <h3
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#333333",
            marginBottom: "12px",
          }}
        >
          Studied Computer Science at Future Academy
        </h3>
        <p
          style={{
            fontSize: "16px",
            color: "#E6A841",
            marginBottom: "12px",
            fontWeight:"bold"
          }}
        >
          Higher Future Institute for Specialized Technological Studies
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#666666",
            marginBottom: "8px",
          }}
        >
          Graduation Year: <strong style={{ color: "#E6A841" }}>2024</strong>
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#666666",
            marginBottom: "8px",
          }}
        >
          GPA: <strong style={{ color: "#E6A841" }}>3.5 / 4.00</strong>
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#666666",
          }}
        >
          Graduation Project: <strong style={{ color: "#E6A841" }}>A+</strong>
        </p>
      </motion.div>
    </section>
  );
}
