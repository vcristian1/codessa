"use client";
import React, { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import codessa from "../../public/codessa.svg";

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
  const [showNav, setShowNav] = useState(true); // Track visibility of desktop navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

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
      {/* Floating Navbar (Visible on desktop) */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
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
            <button className="relative inline-flex h-10 w-auto overflow-hidden rounded-lg p-[1px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl"
              >
                Schedule your Consultation
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
