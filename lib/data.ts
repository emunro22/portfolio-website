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
      "Roles included: Apprentice (IT Telecoms), Project Lead (BAE Build Project), Teamcenter Administrator / Automation Specialist, Azure DevOps Engineer (DXC).",
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
      "CloudOps Engineer at ThinkAnalytics, passionate about optimising cloud infrastructure and automating workflows for high availability, performance, and security.",
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
    title: "AWS Cloud Practitioner",
    description:
      "Certified AWS Cloud Practitioner, next step is AWS Solutions Architect",
    tags: ["AWS", "EC2", "Lambda", "CloudWatch", "EMR", "ERD"],
    imageUrl: rmtdevImg,
    url: "https://www.credly.com/badges/1ed87dc1-19a3-4515-8ea1-aa7589148629/linked_in_profile",
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
