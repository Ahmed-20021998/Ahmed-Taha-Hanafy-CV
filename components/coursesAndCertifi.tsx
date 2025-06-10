"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Udacty from "../public/Udacty.jpg"
import pythonCer from "../public/pythonCer.jpg"
import PythonCer2 from "../public/PythonCer2.jpg"
import ndPlace from "../public/ndPlace.jpg"
import Olympiad from "../public/Olympiad.jpg"






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

export default function CertificationsSection() {
  const certificates = [
    {
      title: "Web Development Certificate",
      organization: "UDACITY",
      date: "February 2021",
      image: Udacty,
    },
    {
      title: "Python Certificate",
      organization: "Future Academy",
      date: "July 2022",
      image: pythonCer,
    },
    {
      title: "Python Certificate",
      organization: "Information Technology Specialist",
      date: "December 2022",
      image: PythonCer2,
    },
    {
      title: "Graduation Project Achievement",
      organization: "2nd Place National & Academy Level",
      date: "2024",
      image: ndPlace,
    },
    {
      title: "ITA-SDGs Olympiad Participation",
      organization: "6th Olympiad",
      date: "2024",
      image: Olympiad,
    },
  ];

  const selfStudyCourses = [
    "CS50 Online Course (Self-study) 2023",
    "Data Struture",
    "Algorithms",
    "Problem Sloving",
    "OOP",
    "Next.js",
    "React Native",
    "FastAPI",
    "Express JS",
    "Supabase",
    "Convex",
    "API",
    "Microservices",
    "Principles of RAG (LLM)",

  ];

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
        <span style={{ color: "#FFC067" }}>Courses & Certifications</span>
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp(0.2)}
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                width={100}
                height={100}
                style={{ width: "100%", height: "160px" }}
                priority
              />
              <div style={{ padding: "16px" }}>
                <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px", color: "#333" }}>
                  {cert.title}
                </h4>
                <p style={{ fontSize: "14px", color: "#555" }}>{cert.organization}</p>
                <p style={{ fontSize: "13px", color: "#999" }}>{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        <h4
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#333333",
            marginBottom: "12px",
          }}
        >
          Self-Study Courses
        </h4>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {selfStudyCourses.map((course, i) => (
            <span
              key={i}
              style={{
                padding: "6px 14px",
                backgroundColor: "#f0f0f0",
                borderRadius: "100px",
                fontSize: "14px",
                color: "#333333",
                fontWeight: 500,
              }}
            >
              {course}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
