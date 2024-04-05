import React from "react";
import {
  CgServer,
  CgWebcam,
  CgWebsite,
  CgWorkAlt,
  CgYinyang,
} from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Apprentice - DXC Technology",
    location: "Glasgow, Scotland",
    description:
      "I completed my Level 6 and Level 8 apprenticeship after 2 years of studying. I then moved onto studying 'Software Development' at Glasgow Caledonian University",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "University",
    location: "Glasgow Caledonian with DXC ",
    description:
      "I am currently studying 'Software Development' at Glasgow Cali University, I am in my Second year out of a Four year course",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
  {
    title: "Full-Stack Freelance Web Developer",
    location: "Glasgow, Scotland",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWebsite),
    date: "2022 - Present",
  },
  {
    title: "BAE Project Lead",
    location: "DXC, Glasgow, Scotland",
    description:
      "Proficiently managed a compact team, administering, deploying, and constructing laptops for BAE projects. Utilized advanced configuration techniques, ensuring timely deliveries and exceeding deadlines. Earned accolades for skilled execution, enhancing productivity and cost savings. Showcased adept administrative skills, driving successful cross-functional teams for victorious project outcomes.",
    icon: React.createElement(FaReact),
    date: "April 2022 - Nov 2023",
  },
  {
    title: "Application Engineer",
    location: "DXC, Glasgow, Scotland",
    description:
      "Led PLM project for BAE Systems and Rheinmetall BAE Systems Land. Managed Teamcenter versions 11, 13, and 14, overseeing Oracle and SQL scripts. Led team through implementation, customization, and support phases, supporting critical server migration for enhanced collaboration.",
    icon: React.createElement(CgServer),
    date: "Nov 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Freelance Portfolio",
    description:
      "This is my Freelance Portfolio to show off my work and send to clients, check out my Portfolio and Testimonials for more info! ",
    tags: ["React", "Next.js", "Tailwind", "CSS"],
    imageUrl: corpcommentImg,
    url: "https://euanmunro.info/",
  },
  {
    title: "Quizmify - Coming Soon",
    description:
      "Full Stack AI Quiz Platform with NextJS 13, TailwindCSS, OpenAI, Next Auth",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "OpenAI", "NextAuth"],
    imageUrl: rmtdevImg,
    url: "https://example.com/quizmify",
  },
  {
    title: "Chat with any PDF - Coming Soon",
    description:
      "Discover its OCR capabilities, user-friendly interface, and commitment to data security. Explore the future of PDFs with AI ",
    tags: ["React", "Next.js", "Tailwind", "OpenAI", "Stripe", "TypeScript"],
    imageUrl: wordanalyticsImg,
    url: "https://example.com/chatwithpdf",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "SQLite",
  "SQLPlus",
  "Powershell",
  "PostgreSQL",
  "Python",
  "Linux",
  "Framer Motion",
  "AI",
  "Blockchain",
] as const;
