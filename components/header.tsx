"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Background container */}
      <div className="fixed top-6 left-0 right-0 flex justify-center z-[999]">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
        {/* Navigation pill */}
        <nav className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border border-white/40 dark:border-black/40 rounded-full shadow-lg shadow-black/[0.03] dark:shadow-black/20 p-1">
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.name;
              
              return (
                <motion.li
                  key={link.hash}
                  className="relative"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                    className={clsx(
                      "relative flex items-center justify-center",
                      "px-4 py-2 rounded-full text-sm font-medium",
                      "transition-all duration-200 ease-out",
                      "select-none whitespace-nowrap",
                      isActive
                        ? "text-gray-950 dark:text-gray-200"
                        : "text-gray-500 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300"
                    )}
                  >
                    {/* Active background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    
                    {/* Text */}
                    <span className="relative z-10">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
              </motion.div>
      </div>
    </header>
  );
}