import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
      "I completed my apprenticeship after 2 years of studying. I then moved onto studying 'Software Development' at university",
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
    icon: React.createElement(FaReact),
    date: "2022 - Present",
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
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    url: "https://example.com/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    url: "https://example.com/",
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
  "PostgreSQL",
  "Python",
  "Linux",
  "Framer Motion",
] as const;
