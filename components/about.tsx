"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am currently a CloudOps Engineer at{" "}
        <span className="font-medium">ThinkAnalytics</span>, I have always wanted work within the Cloud{" "}
        <span className="font-medium">
          since I started within Tech
        </span>
        . <span className="italic">My favorite part of CloudOps</span> is the
        problem-solving aspect. I <span className="underline">enjoy</span> the
        feeling of finally figuring out a solution to a problem.
      </p>
      <p>
        <span className="italic">When Im not coding</span>, I enjoy fitness. I
        enjoy running, going to the gym, boxing & playing guitar, I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          the Stock Market, Blockchain & AWS        </span>
        .
      </p>
    </motion.section>
  );
}
