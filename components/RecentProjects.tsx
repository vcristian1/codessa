"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Box, Container, Button, Heading, Text } from "theme-ui";
import dotPattern from "../public/dot-pattern.svg";
import { keyframes } from "@emotion/react";
import BlockTitle from "./ui/BlockTitle";
import tabImage1 from "../public/p1.svg";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const RecentProjects = () => {
  const [tab, setTab] = useState({
    active: "construction",
  });

  const handleTab = (tab: string) => {
    setTab({
      active: tab,
    });
  };

  return (
    <div className="py-10 bg-slate-200 dark:bg-black-100">
      <h1 className="heading">
        Featured Projects:{" "}
        <span className="dark:text-[indigo-500] text-[#5e17eb]">
          Real Results, Real Impact
        </span>{" "}
      </h1>
      <Box as="section" className="pt-[80px] bg-[var(--background)] dark:bg-gray-900">
        <Container className="relative">
          <Box className="overflow-hidden sm:overflow-x-auto mb-8">
            <div className="flex justify-center items-center border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => handleTab("construction")}
                className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1.5px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                    bg-slate-950 px-8 text-sm font-medium text-white backdrop-blur-3xl gap-2 
                    ${tab.active === "construction" ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "bg-slate-950 dark:bg-slate-800"} `}
                >
                  Construction
                </span>
              </button>

              <button
                onClick={() => handleTab("realestate")}
                className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1.5px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                    bg-slate-950 px-8 text-sm font-medium text-white backdrop-blur-3xl gap-2
                    ${tab.active === "realestate" ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "bg-slate-950 dark:bg-slate-800"} `}
                >
                  Real Estate
                </span>
              </button>

              <button
                onClick={() => handleTab("health")}
                className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1.5px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                    bg-slate-950 px-8 text-sm font-medium text-white backdrop-blur-3xl gap-2
                    ${tab.active === "health" ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "bg-slate-950 dark:bg-slate-800"} `}
                >
                  Health Care
                </span>
              </button>
            </div>
          </Box>
          <div className="min-h-[190px] relative">
            {tab.active === "construction" && (
              <div className="pt-[80px]">
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: .4 }}
                >
                  <Image src={tabImage1} alt="tab image" className="tabImage animate-fadeIn" />
                  <Heading className="text-xl font-semibold text-black dark:text-white">Challenge</Heading>
                  <Text className="text-lg text-gray-800 dark:text-gray-300">
                    Colibri needed a website that showcased their experience, brand, and services. It was important to Colibri that they could
                    be found on Google.
                  </Text>
                  <Heading className="text-xl font-semibold text-black dark:text-white">Solution</Heading>
                  <Text className="text-lg text-gray-800 dark:text-gray-300">
                    Colibri needed a website that showcased their experience, brand, and services. It was important to Colibri that they could
                    be found on Google.
                  </Text>
                </motion.div>
              </div>
            )}
            {tab.active === "realestate" && (
              <div>
              <Image src={tabImage1} alt="tab image" className="tabImage animate-fadeIn" />
              <Heading className="text-xl font-semibold text-black dark:text-white">Challenge</Heading>
              <Text className="text-lg text-gray-800 dark:text-gray-300">
                Colibri needed a website that showcased their experience, brand, and services. It was important to Colibri that they could
                be found on Google.
              </Text>
            </div>
            )}
            {tab.active === "health" && (
              <div>
                <Image src={tabImage1} alt="tab image" className="tabImage animate-fadeIn" />
                <Heading className="text-xl font-semibold text-black dark:text-white">Challenge</Heading>
                <Text className="text-lg text-gray-800 dark:text-gray-300">
                  Colibri needed a website that showcased their experience, brand, and services. It was important to Colibri that they could
                  be found on Google.
                </Text>
              </div>            )}
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default RecentProjects;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
