"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Clinic Site",
    duration: "Mar 2024",
    type: "Web Development",
    embedUrl: "https://www.youtube.com/embed/m2_RLYZn654",
    tools: ["Html", "CSS", "JS", "FASTAPI"],
  },
  {
    name: "Grocery store site",
    duration: "Mar 2025",
    type: "Web Development",
    embedUrl: "https://www.youtube.com/embed/UyHlXQxsEgM",
    tools: ["Html", "CSS", "JS", "FASTAPI"],
  },
  {
    name: "E-Commerce Site",
    duration: "Apr 2025",
    type: "Web Development",
    embedUrl: "https://www.youtube.com/embed/MZMMraSvPnM?list=PLnGRb0Pma5MYwUD5d9jF0K3k0kDNs47R4",
    tools: ["Next.JS", "Clerk", "Stripe", "Resend" ],
  },
  {
    name: "P-Creative Translator",
    duration: "Apr 2025",
    type: "Web Development",
    embedUrl: "https://www.youtube.com/embed/ov2G_eNJ2cI?list=PLnGRb0Pma5MZqFKC43uv2ezmlmTLhU0Dt",
    tools: ["Next.JS", "FASTAPI", "Supabase", "Microservices" ],
  },
  {
    name: "P-Creative Community",
    duration: "May 2025",
    type: "Mobile Development",
    embedUrl: "https://www.youtube.com/embed/g7Q_prX60sc",
    tools: ["React Native", "Convex", "FASTAPI", "Clerk" ],
  },
];

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

export default function ProjectExperienceSection() {
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
        <span style={{ color: "#FFC067" }}>Project Experience</span>
      </motion.h2>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={fadeUp(index * 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              gap: "40px",
              alignItems: "center",
              marginBottom: "100px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1 1 400px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={project.embedUrl}
                title={project.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ aspectRatio: "16 / 9", borderRadius: "20px" }}
              ></iframe>
            </div>

            <div style={{ flex: "1 1 400px", textAlign: "left" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#333333",
                  marginBottom: "8px",
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#666666",
                  marginBottom: "8px",
                }}
              >
                {project.duration}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#FF7F50",
                  fontWeight: "500",
                  marginBottom: "16px",
                }}
              >
                Track: {project.type}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      padding: "6px 14px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "100px",
                      fontSize: "14px",
                      color: "#333333",
                      fontWeight: 500,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
