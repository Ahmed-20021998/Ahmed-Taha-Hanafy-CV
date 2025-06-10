"use client";

import React from "react";
import { Linkedin, Mail, Phone, MapPin} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#F0F0F0",
        padding: "16px 24px",
        zIndex: 50,
        justifyContent:"space-between"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row", // responsive main direction
          gap: "12px",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
          color: "#333",
          flexWrap: "wrap",
        }}
      >
        {/* Left Info */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{color:"#FFC067"}}><Mail size={16} /></span>
            <span>ataha7054@gmail.com</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{color:"#FFC067"}}><Phone size={16} /></span>
            <span>+201068764855</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{color:"#FFC067"}}><MapPin size={16} /></span>
            <span>36 Mahmoud El Gendy street, Gesr El Suez</span>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
