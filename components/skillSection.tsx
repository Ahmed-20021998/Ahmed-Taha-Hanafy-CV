"use client";
import React from "react";
import { motion } from "framer-motion";
import python from "../public/python.png"
import JS from "../public/JS.png"
import DS from "../public/DS.png"
import OOP from "../public/OOP.png"
import ALgorithm from "../public/ALgorithm.png"
import problem from "../public/problem.png"
import Next from "../public/Next.png"
import react from "../public/react.png"
import fast from "../public/fast.png"
import mono from "../public/mono.png"
import mico from "../public/mico.png"
import RAG from "../public/RAG.png"
import LLM from "../public/LLM.png"
import vector from "../public/vector.png"
import supabase from "../public/supabase.png"
import convex from "../public/convex.png"
import clerk from "../public/clerk.png"
import stripe from "../public/stripe.png"
import resend from "../public/resend.png"
import node from "../public/node.png"




import Image from "next/image";


const groupedSkills = [
    {
        title: "Programming Languages",
        skills: [
            { name: "JavaScript", image: JS },
            { name: "Python", image: python },
        ],
    },
    {
        title: "Computer Science Concepts",
        skills: [
            { name: "Object Oriented Programming", image: OOP },
            { name: "Data Structure", image: DS },
            { name: "Algorithms", image: ALgorithm },
            { name: "Problem Solving", image: problem },
        ],
    },
    {
        title: "Frameworks & Tools",
        skills: [
            { name: "Next.JS", image: Next },
            { name: "React Native", image: react},
            { name: "FastAPI", image: fast },
            { name: "Node.JS", image: node },
        ],
    },
    {
        title: "Software Architecture",
        skills: [
            { name: "Monolithic Architecture", image: mono },
            { name: "Microservices Architecture", image: mico },

        ],
    },
    {
        title: "Princples of RAG & LLM",
        skills: [
            { name: "RAG", image: RAG },
            { name: "LLM Integration", image: LLM },
            { name: "Database vector", image: vector },

        ],
    },
    {
        title: "Dealt with Baas",
        skills: [
            { name: "Supabase Database", image: supabase },
            { name: "Convex", image: convex },
        ],
    },
    {
        title: "Dealt with Services",
        skills: [
            { name: "Clerk Authintication", image: clerk },
            { name: "Stripe Payment", image: stripe },
            { name: "Resend Email", image: resend },

        ],
    },
    
];
const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
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

export default function SkillsSection() {
    return (
        <div
            className="px-6 py-20 mt-20"
            style={{
                backgroundColor: "#F0F0F0", // Tailwind's gray-100
                colorScheme: "light dark",
            }}
        >
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp(0)}
                className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
            >
                <span style={{color:"#FFC067"}}>My Skills</span>
            </motion.h2>

            <div className="space-y-16 max-w-6xl mx-auto">
                {groupedSkills.map((group, groupIndex) => (
                    <div key={group.title}>
                        <motion.h3
                            variants={fadeUp(groupIndex * 0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-2xl font-semibold text-center mb-8 text-gray-700 dark:text-gray-300"
                        >
                            {group.title}
                        </motion.h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {group.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    variants={fadeUp(index * 0.1)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    style={{
                                        backgroundColor: "#f3f4f6", // Tailwind's gray-100
                                        borderRadius: "1rem",
                                        padding: "1.5rem",
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                    }}
                                    className="flex flex-col items-center justify-center hover:shadow-lg hover:scale-105"
                                >
                                    <div className="text-indigo-500 mb-3">
                                        <Image
                                            src={skill.image}
                                            alt={skill.name}
                                            width={40}
                                            height={40}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                objectFit: "contain",
                                                marginBottom: "0.75rem",
                                            }}
                                            priority
                                        />
                                    </div>
                                    <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
