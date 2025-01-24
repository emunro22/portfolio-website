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
    title: "DXC Technology",
    location: "Glasgow, Scotland",
    description:
      "I started my career as an apprentice, completing Level 6 and Level 8 HNC/HND in IT Telecommunications in just 10 months. I then led the BAE Build Project, deploying 15,000 laptops and saving £250,000 through process improvements. After specialising in Teamcenter administration and workflow automation, I moved into my current role as an Azure DevOps Engineer at DXC, where I build CI/CD pipelines and leverage Terraform, Kubernetes, and Docker for scalable deployments.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2021 - January 2025",
  },
  {
    title: "University",
    location: "Glasgow, Scotland",
    description:
      "After completing my apprenticeship I then went on to study 'Software Development within a Business' at Glasgow Caledonian University, I recieved a Bachelors Degree in this field",
    icon: React.createElement(LuGraduationCap),
    date: "September 2022 - 2025",
  },
  {
    title: "ThinkAnalytics",
    location: "Glasgow, Scotland",
    description:
      "I am now a CloudOps Engineer at ThinkAnalytics, passionate about optimising cloud infrastructure and automating workflows for high availability, performance, and security.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2025 - Present",
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
  "Web Dev (React, Next.js, TypeScript)",
  "IAC (Terraform, Ansible)",
  "Scripting (Python and Bash)",
  "Containerisation (Docker, Kubernetes)",
  "Azure",
  "AWS",
  "CICD (Gitlab)",
  "Teamcenter (BMIDE, SQL)",
] as const;
