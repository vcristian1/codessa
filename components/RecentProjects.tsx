"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Box, Container, Button, Heading, Text } from "theme-ui";
import dotPattern from "../public/dot-pattern.svg";
import { keyframes } from "@emotion/react";
import BlockTitle from "./ui/BlockTitle";
import tabImage1 from "../public/project1.svg";
import tabImage2 from "../public/project2.svg";
import tabImage3 from "../public/project3.svg";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Spotlight } from "./ui/Spotlight";

const RecentProjects = () => {
  const [tab, setTab] = useState({
    active: "health",
  });

  const handleTab = (tab: string) => {
    setTab({
      active: tab,
    });
  };

  return (
    <div id="projects" className="py-10 bg-slate-200 dark:bg-black-100">
      <div>
        <Spotlight
            className="z-[0] mt-[-325px] md:-left-32 left-[-100px]"
            fill="gray"
          />
      </div>
      <h1 className="heading">
        Where{" "}
        <span className="dark:text-[indigo-500] text-[#5e17eb]">
          Solutions
        </span>{" "}Meet
        <span className="dark:text-[indigo-500] text-[#5e17eb]">
          {" "}Success
        </span>
      </h1>
      
      <Box as="section" className="xs:pt-[60px] lg:pt-[40px] bg-[var(--background)] dark:bg-black-100">
        <Container className="relative">
          <Box className="overflow-hidden sm:overflow-x-auto mb-8">
            <div className="flex justify-center items-center gap-2 lg:gap-x-6">
              <button
                onClick={() => handleTab("health")}
                className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1.5px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                    bg-slate-950 px-4 lg:px-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 
                    ${tab.active === "health" ? "dark:bg-slate-700 bg-slate-700 from-purple-500 to-indigo-500" : "bg-black-100 dark:bg-black-100"} `}
                >
                  Peace PLLC
                </span>
              </button>

              <button
                onClick={() => handleTab("colibri")}
                className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1.5px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                    bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2
                    ${tab.active === "colibri" ? "dark:bg-slate-700 bg-slate-700 from-purple-500 to-indigo-500" : "bg-black-100 dark:bg-black-100"} `}
                >
                  Colibri C.S.
                </span>
              </button>

              <button
                onClick={() => handleTab("wedding")}
                className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1.5px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                  className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                    bg-slate-950 px-2 text-sm font-med text-white backdrop-blur-3xl gap-2
                    ${tab.active === "wedding" ? "dark:bg-slate-700 bg-slate-700 from-purple-500 to-indigo-500" : "bg-black-100 dark:bg-black-100"} `}
                >
                  CV
                </span>
              </button>
            </div>
          </Box>
          <div className="min-h-[190px] relative">
            {tab.active === "health" && (
              <div className="lg:flex xs:pt-[-10px] pt-[80px] lg:pt-[40px] lg:min-h-[500px]">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ delay: 0, duration: 0.9 }}
                className="lg:flex lg:gap-x-4"
              >
                <Image src={tabImage1} height={500} width={500} alt="tab image" className="" />
                <div className="lg:flex-col xs:mt-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.58, duration: 0.9 }} // Delay after image and heading
                  >
                    <Heading className="text-2xl font-semibold text-black dark:text-white">The Challenge</Heading>
                    <Text className="text-gray-800 dark:text-gray-300 xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl">
                      Peace Pelvic Health PLLC needed an accessible website to highlight their expertise, treatments, and zen-inspired brand. It was essential for the site to be accessible while maximizing visibility through strong SEO.
                    </Text>
                  </motion.div>
                  <div className="xs:mt-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.88, duration: 0.9 }} // Delay for next paragraph
                    >
                      <Heading className="text-2xl font-semibold text-black dark:text-white">The Results</Heading>
                      <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                        Peace Pelvic Health PLLC ranks #1 on search engines for their business name. Achieved a 70% increase in website visits within three months. Inquiries and bookings rose by 33%, driving new client acquisition. Fully compliant with WCAG standards, ensuring inclusivity.
                      </Text>
                    </motion.div>
                  </div>
                </div>
                <div className="lg:flex-col xs:mt-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.18, duration: 0.9 }} // Delay for last paragraph
                  >
                    <Heading className="text-2xl font-semibold text-black dark:text-white">The Solution</Heading>
                    <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                      We designed and launched an accessible, SEO-optimized website tailored to Peace Pelvic Health&apos;s serene brand identity. The calming design, user-friendly layout, and compliance with accessibility standards showcase their services and location.
                    </Text>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            )}
            {tab.active === "colibri" && (
            <div className="lg:flex xs:pt-[-10px] pt-[80px] lg:pt-[40px] lg:min-h-[500px]">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ delay: 0, duration: 0.9 }}
              className="lg:flex lg:gap-x-4"
            >
              <Image src={tabImage2} height={500} width={500} alt="tab image" className="" />
              <div className="lg:flex-col xs:mt-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.58, duration: 0.9 }} // Delay after image and heading
                >
                  <Heading className="text-2xl font-semibold text-black dark:text-white">The Challenge</Heading>
                  <Text className="text-gray-800 dark:text-gray-300 xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl">
                  Colibri Construction Services needed a custom website to expand their strong word-of-mouth business online. They required flexibility for future technology integrations and a focus on SEO to attract potential clients searching for construction services in Chicago.
                  </Text>
                </motion.div>
                <div className="xs:mt-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.88, duration: 0.9 }} // Delay for next paragraph
                  >
                    <Heading className="text-2xl font-semibold text-black dark:text-white">The Results</Heading>
                    <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                    Colibri now has a custom website that ranks well for construction services in Chicago, driving traffic and increasing visibility. The user-friendly design allows for easy content updates and management of inquiries, converting visitors into leads.
                    </Text>
                  </motion.div>
                </div>
              </div>
              <div className="lg:flex-col xs:mt-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.18, duration: 0.9 }} // Delay for last paragraph
                >
                  <Heading className="text-2xl font-semibold text-black dark:text-white">The Solution</Heading>
                  <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                  We built a scalable, SEO-optimized website that reflects Colibri's brand. The design is flexible for future tech integrations, with integrated testimonials and an inquiry form to help grow their online presence and generate leads
                  </Text>
                </motion.div>
              </div>
            </motion.div>
          </div>
            )}
            {tab.active === "wedding" && (
              <div className="lg:flex xs:pt-[-10px] pt-[80px] lg:pt-[40px] lg:min-h-[500px]">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ delay: 0, duration: 0.9 }}
                className="lg:flex lg:gap-x-4"
              >
                <Image src={tabImage3} height={500} width={500} alt="tab image" className="" />
                <div className="lg:flex-col xs:mt-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.58, duration: 0.9 }} // Delay after image and heading
                  >
                    <Heading className="text-2xl font-semibold text-black dark:text-white">The Challenge</Heading>
                    <Text className="text-gray-800 dark:text-gray-300 xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl">
                    CV needed a wedding website to provide guests with essential event details, including ceremony time, location, and registry information. The site also needed a barn-style design to reflect the wedding venue and a personal touch showcasing their love story.
                    </Text>
                  </motion.div>
                  <div className="xs:mt-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.88, duration: 0.9 }} // Delay for next paragraph
                    >
                      <Heading className="text-2xl font-semibold text-black dark:text-white">The Results</Heading>
                      <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                      CV's guests can easily access all event information, reducing confusion and ensuring a smooth experience. The personal story section added a heartfelt touch, while the registry integration simplified gift-giving.
                      </Text>
                    </motion.div>
                  </div>
                </div>
                <div className="lg:flex-col xs:mt-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.18, duration: 0.9 }} // Delay for last paragraph
                  >
                    <Heading className="text-2xl font-semibold text-black dark:text-white">The Solution</Heading>
                    <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                    We created a custom, barn-inspired website with clear event details, a dedicated registry section, and a personal story. The design is user-friendly and tailored to the couple's unique style, making it the go-to resource for their wedding day.
                    </Text>
                  </motion.div>
                </div>
              </motion.div>
            </div>       
            )}
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
