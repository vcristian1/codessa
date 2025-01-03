"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import codessa from "../../public/codessa.svg";
import { IoMdClose } from "react-icons/io";
import { FaAlignRight } from "react-icons/fa";
import DarkModeToggle from "@/components/ui/DarkModeToggle"
import codessalight2 from "../../public/codessalight2.svg"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [showNav, setShowNav] = useState(true); // Controls navbar visibility
  const [menuOpen, setMenuOpen] = useState(false); // Tracks if mobile menu is open
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [scrolled, setScrolled] = useState(false); // Track if user has scrolled

  // Track the scroll position to handle navbar behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down; hide the navbar
        setShowNav(false);
      } else {
        // User is scrolling up; show the navbar
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 0); // Track if user has scrolled at all
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: .4 }}
            className={cn(
              "dark:bg-[rgba(0, 0, 0, .4)] bg-black-100 hidden lg:flex overflow-x-auto md:max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 lg:top-10 inset-x-0 mx-auto px-10 py-4 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark: items-center justify-center space-x-4",
              className
            )}
            style={{
              backdropFilter: "blur(80px) saturate(180%)",
              backgroundColor: "",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <Image src={codessa} height={20} width={80} alt="logo" />
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="sm:block text-sm !cursor-pointer">
                  {navItem.name}
                </span>
              </Link>
            ))}
            <button className="relative inline-flex h-10 w-auto overflow-hidden rounded-lg p-[1.5px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl"
              >
                Schedule your Consultation
              </span>
            </button>
            <DarkModeToggle />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navbar */}
      <div
        className={cn(
          "lg:hidden fixed top-0 left-0 right-0 z-[5001] w-full h-[72px] flex justify-between items-center px-8 transition duration-500",
          scrolled ? "bg-slate-200 dark:bg-black-100" : "bg-transparent"
        )}
      >
        <Image className="hidden dark:block z-6" src={codessa} alt="logo" height={25} width={90} />
        <Image className="block dark:hidden z-6" src={codessalight2} alt="logo" height={25} width={90} />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-3 text-white rounded-full"
        >
          {menuOpen ? <IoMdClose className="dark:text-white text-black-100" size={24} /> : <FaAlignRight className="dark:text-white text-black-100" size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-[5000] flex justify-center items-center backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-black-100 text-white w-[80vw] md:w-[400px] p-5 rounded-lg space-y-6"
              style={{
                backdropFilter: "blur(80px) saturate(180%)",
                backgroundColor: "",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  className="block text-lg font-medium hover:text-[#5e17eb]"
                >
                  {navItem.name}
                </Link>
              ))}
              <div className="flex-col">
                <button className="mb-2 relative inline-flex h-10 w-auto overflow-hidden rounded-lg p-[1.5px] focus:outline-none">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                      bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl"
                  >
                    Schedule your Consultation
                  </span>
                </button>
                <DarkModeToggle />
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
