"use client";
import React, { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import codessa from "../../public/codessa.svg";
import { IoMdClose } from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [menuOpen, setMenuOpen] = useState(false); // Track if the mobile menu is open
  const [scrolled, setScrolled] = useState(false); // Track if user has scrolled

  // Track the scroll position to change the background of the mobile navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true); // Set scrolled to true when the user scrolls down
      } else {
        setScrolled(false); // Reset when the user scrolls back to the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Floating Navbar (Visible on desktop) */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "hidden md:flex overflow-x-auto md:max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-4 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(80px) saturate(180%)",
            backgroundColor: "rgba(0, 0, 0, .4)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <Image src={codessa} height={20} width={80} alt="logo" />
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="sm:block text-sm !cursor-pointer">
                {navItem.name}
              </span>
            </Link>
          ))}
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Talk to our Experts</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Hamburger Icon (Visible on mobile) */}
      {/* Hamburger Icon (Visible on mobile) */}
    <div
      className={cn(
        "md:hidden fixed top-0 left-0 right-0 z-[5001] w-full h-[72px] flex justify-between items-center px-8 transition duration-500",
        scrolled ? "backdrop-blur-2xl" : "bg-transparent"
      )}
    >
      {/* Logo on the far left */}
      <Image className="z-6" src={codessa} alt="logo" height={25} width={90} />

      {/* Hamburger icon on the far right */}
      <button
        onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility on click
        className="p-3 text-white rounded-full"
      >
        {menuOpen ? (
          <IoMdClose size={24} /> // Show close icon when menu is open
        ) : (
          <FaAlignRight size={20} /> // Show hamburger icon when menu is closed
        )}
      </button>
    </div>

      {/* Mobile Navbar (Visible when hamburger is clicked) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-[5000] flex justify-center items-center backdrop-blur-lg bg-black/50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="w-[80vw] md:w-[400px] p-6 rounded-lg shadow-lg space-y-6"
              style={{
                backdropFilter: "blur(80px) saturate(180%)",
                backgroundColor: "rgba(0, 0, 0, .4)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  className="block text-lg font-medium hover:text-blue-400"
                >
                  {navItem.name}
                </Link>
              ))}
              <button className="w-full text-center text-sm font-medium text-black bg-white py-2 rounded-full">
                Talk to our Experts
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
