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
    title: "Technology Apprentice - DXC Technology",
    location: "Glasgow, Scotland",
    description:
      "I completed my Level 6 and Level 8 apprenticeship after 10 months. I then moved onto studying 'Software Development' at Glasgow Caledonian University",
    icon: React.createElement(CgWorkAlt),
    date: "January 2021 - May 2022",
  },
  {
    title: "University",
    location: "Glasgow Caledonian with DXC ",
    description:
      "I am currently studying 'Software Development' at Glasgow Cali University, I am in my Third Year, I am predicted to get a 1st class honours",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
  {
    title: "Full-Stack Freelance Web Developer",
    location: "Glasgow, Scotland",
    description:
      "Designed and developed responsive websites tailored to client needs using a tech stack that includes HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Tailwind, Prisma, MongoDB, SQLite, Python, and Linux. Managed projects from concept to deployment with effective client communication, resulting in a portfolio of over 25 successful projects across various industries.",
    icon: React.createElement(CgWebsite),
    date: "May 2022 - December 2024",
  },
  {
    title: "Application Engineer",
    location: "DXC, Glasgow, Scotland",
    description:
      "Teamcenter Administrator with expertise in versions 11, 13, and 14, leading server migrations across four environments and managing 15 servers to ensure optimal reliability and performance. Collaborated with cross-functional teams to customise Teamcenter configurations using BMIDE and SQL for over 2,000 users, while enhancing operational efficiency through workflow improvements, task automation, and bash scripting, optimising system architecture for scalability in enterprise-level PLM implementations.",
    icon: React.createElement(CgServer),
    date: "Nov 2023 - Dec 2024",
  },
  {
    title: "DevOps Engineer",
    location: "DXC, Glasgow, Scotland",
    description:
      "Working within the public sector, working with alot of DevOps technologies such as Azure, Jenkins, Terraform, Kubernetes, Openshift etc",
    icon: React.createElement(CgServer),
    date: "Oct 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Freelance Portfolio",
    description:
      "This is my Freelance Portfolio to show off my work and send to clients, check out my Portfolio and Testimonials for more info! ",
    tags: ["React", "Next.js", "Tailwind", "CSS"],
    imageUrl: corpcommentImg,
    url: "https://euanmunro.website/",
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
  "Teamcenter",
  "BMIDE",
  "Powershell",
  "Ansible",
  "Azure",
  "AWS",
  "Docker",
  "Jenkins",
  "Kubernetes",
  "OpenShift",
  "Terraform",
] as const;
