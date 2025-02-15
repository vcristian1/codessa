"use client";
import { FaBook } from "react-icons/fa";
import { useState } from "react";
import { projects } from "@/data";
import { Box, Container, Button, Heading, Text } from "theme-ui";
import { keyframes } from "@emotion/react";
import BlockTitle from "./ui/BlockTitle";
import tabImage1 from "../public/project1.svg";
import tabImage2 from "../public/project2.svg";
import tabImage3 from "../public/project3.svg";
import MagicButton from "./MagicButton";
import Link from "next/link"
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
    <div id="projects" className="py-20 lt:py-20 bg-slate-200 dark:bg-black-100 w-full">
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: .175, duration: 0.8 }}
      variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
      }} 
      >
        <h1 className="text-left tb:text-center font-bold text-4xl md:text-5xl text-[#5e17eb] my-5 lt:my-8 w-full">
          Featured{" "}
          <span className="text-black-100 dark:text-white">
              Web Design & Development
          </span>{" "}Projects
        </h1>
      </motion.div>

      <Box as="section" className="xs:pt-[60px] lg:pt-[10px] dark:bg-black-100 ">
        <Container className="relative">
          <Box className="sm:overflow-x-auto mb-8">
          <motion.div 
            className="lt:flex justify-center items-center gap-2 lg:gap-x-6"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.175, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, y: -60 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <button
              onClick={() => handleTab("health")}
              className={`inline-flex h-14 w-full md:w-60 md:mt-10 overflow-hidden focus:outline-none lt:text-left
                transition duration-500
                ${tab.active === "health" ? "opacity-100 lt:border-b-2 border-black-100 dark:border-slate-200" : "opacity-30 hover:opacity-50 "}`}
            >
              <span className="inline-flex flex-col h-full w-full text-2xl font-semibold text-black dark:text-white">
                <span className="font-semibold">Peace Pelvic Health</span>
                <span className="text-xs text-gray-500 font-normal">Holistic Pelvic Floor Therapy</span>
              </span>
            </button>

            <button
              onClick={() => handleTab("colibri")}
              className={`inline-flex h-14 w-full md:w-60 md:mt-10 overflow-hidden focus:outline-none lt:text-left
                transition duration-500
                ${tab.active === "colibri" ? "opacity-100 lt:border-b-2 border-black-100 dark:border-slate-200" : "opacity-30 hover:opacity-50 "}`}
            >
              <span className="inline-flex flex-col h-full w-full text-2xl font-semibold text-black dark:text-white">
                <span className="font-semibold">Colibri Construction</span>
                <span className="text-xs text-gray-500 font-normal">Finding your next contractor made easy</span>
              </span>
            </button>

            <button
              onClick={() => handleTab("wedding")}
              className={`inline-flex h-14 w-full md:w-60 md:mt-10 overflow-hidden focus:outline-none lt:text-left
                transition duration-500
                ${tab.active === "wedding" ? "opacity-100 lt:border-b-2 border-black-100 dark:border-slate-200" : "opacity-30 hover:opacity-50 "}`}
            >
              <span className="inline-flex flex-col h-full w-full text-2xl font-semibold text-black dark:text-white">
                <span className="font-semibold">Holy Matrimony</span>
                <span className="text-xs text-gray-500 font-normal">A thoughtful platform for your special day</span>
              </span>
            </button>
          </motion.div>

          </Box>
          <div className="min-h-[190px] relative lt:mx-6">
            {tab.active === "health" && (
              <div className="lg:flex xs:pt-[-10px] pt-[80px] lg:pt-[40px] lg:min-h-[500px]">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ delay: 0, duration: 0.9 }}
                className="tb:flex tb:gap-x-6 lg:gap-x-10"
              >
                <Image src={tabImage1} height={500} width={500} alt="tab image" className="xxs:items-center rounded-lg" />
                <div className="tb:flex-col xs:mt-10 lt:text-left">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.58, duration: 0.9 }} // Delay after image and heading
                    className="rounded-2xl border border-gray-200 dark:border-black-100 p-5 md:p-5 lg:p-7 bg-slate-200 shadow-md dark:bg-gradient-to-r dark:from-[#04071d] dark:to-[#0c0e23]"
                  >
                    <Heading className="text-2xl font-semibold text-black-100 dark:text-slate-200">The Challenge</Heading>
                    <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                      Peace Pelvic Health PLLC needed an accessible website to highlight their expertise, treatments, and zen-inspired brand. It was essential for the site to be accessible while maximizing visibility through strong SEO.
                    </Text>
                  </motion.div>
                  {/* <div className="xs:mt-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.88, duration: 0.9 }} // Delay for next paragraph
                      className="rounded-2xl border border-gray-200 dark:border-black-100 p-5 md:p-5 lg:p-7 bg-slate-200 shadow-md dark:bg-gradient-to-r dark:from-[#04071d] dark:to-[#0c0e23]"
                      >
                      <Heading className="text-2xl font-semibold text-black-100 dark:text-slate-200">The Results</Heading>
                      <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                      Peace Pelvic Health PLLC ranks #1 on search engines for their business name. Achieved a 70% increase in website visits within three months. Inquiries and bookings rose by 33%, driving new client acquisition.
                      </Text>
                    </motion.div>
                  </div> */}
                </div>
                <div className="lg:flex-col xs:mt-10 lt:text-left">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.18, duration: 0.9 }} // Delay for last paragraph
                    className="rounded-2xl border border-gray-200 dark:border-black-100 p-5 md:p-5 lg:p-7 bg-slate-200 shadow-md dark:bg-gradient-to-r dark:from-[#04071d] dark:to-[#0c0e23]"                
                    >
                    <Heading className="text-2xl font-semibold text-black-100 dark:text-slate-200">The Solution</Heading>
                    <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                      We designed and launched an accessible, SEO-optimized website tailored to Peace Pelvic Health&apos;s serene brand identity. The calming design, user-friendly layout, and compliance with accessibility standards showcase their services and location.
                    </Text>
                    
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.48, duration: 0.9 }}
                  >
                    <MagicButton
                        title="View Case Study"
                        icon={<FaBook />}
                        position="right"
                        href="/"
                      />
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
              className="lg:flex lg:gap-x-10"
            >
              <Image src={tabImage2} height={500} width={500} alt="tab image" className="" />
              <div className="lg:flex-col xs:mt-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.58, duration: 0.9 }} // Delay after image and heading
                  className="rounded-2xl border border-gray-200 dark:border-black-100 p-5 md:p-5 lg:p-7 bg-slate-200 shadow-md dark:bg-gradient-to-r dark:from-[#04071d] dark:to-[#0c0e23]"
                >
                  <Heading className="text-2xl font-semibold text-black-100 dark:text-slate-200">The Challenge</Heading>
                  <Text className="text-black-100 dark:text-slate-200 xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl">
                  Colibri Construction Services needed a custom website to expand their strong word-of-mouth business online. They required a focus on SEO to attract potential clients searching for construction services in Chicago.
                  </Text>
                </motion.div>
                {/* <div className="xs:mt-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.88, duration: 0.9 }} // Delay for next paragraph
                    className="rounded-2xl border border-gray-200 dark:border-black-100 p-5 md:p-5 lg:p-7 bg-slate-200 shadow-md dark:bg-gradient-to-r dark:from-[#04071d] dark:to-[#0c0e23]"
                  >
                    <Heading className="text-2xl font-semibold text-black-100 dark:text-slate-200">The Results</Heading>
                    <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                    Colibri now has a custom website that ranks well for construction services in Chicago, driving traffic and increasing visibility. The user-friendly design allows for easy content updates and management of inquiries, converting visitors into leads.
                    </Text>
                  </motion.div>
                </div> */}
              </div>
              <div className="lg:flex-col xs:mt-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.18, duration: 0.9 }} // Delay for last paragraph
                  className="rounded-2xl border border-gray-200 dark:border-black-100 p-5 md:p-5 lg:p-7 bg-slate-200 shadow-md dark:bg-gradient-to-r dark:from-[#04071d] dark:to-[#0c0e23]"
                >
                  <Heading className="text-2xl font-semibold text-black-100 dark:text-slate-200">The Solution</Heading>
                  <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                  We built a scalable, SEO-optimized website that reflects Colibri&apos;s brand. The design is flexible for future tech integrations, with integrated testimonials and an inquiry form to help grow their online presence and generate leads
                  </Text>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.48, duration: 0.9 }}
                  >
                    <a href="/Colibri">
                      <MagicButton
                        title="View Case Study"
                        icon={<FaBook />}
                        position="right"
                      />
                    </a>
                    
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
                className="lg:flex lg:gap-x-10"
              >
                <Image src={tabImage3} height={500} width={500} alt="tab image" className="" />
                <div className="lg:flex-col xs:mt-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.58, duration: 0.9 }} // Delay after image and heading
                    className="rounded-2xl border border-gray-200 dark:border-black-100 p-5 md:p-5 lg:p-7 bg-slate-200 shadow-md dark:bg-gradient-to-r dark:from-[#04071d] dark:to-[#0c0e23]"
                  >
                    <Heading className="text-2xl font-semibold text-black-100 dark:text-slate-200">The Challenge</Heading>
                    <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                    Jacqueline needed a wedding website to provide guests with essential event details, including ceremony time, location, registry information, and FAQs. The website also needed a barn-style design to reflect the wedding venue with a section showcasing their love story.
                    </Text>
                  </motion.div>
                  {/* <div className="xs:mt-10">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.88, duration: 0.9 }} // Delay for next paragraph
                      className="rounded-2xl border border-gray-200 dark:border-black-100 p-5 md:p-5 lg:p-7 bg-slate-200 shadow-md dark:bg-gradient-to-r dark:from-[#04071d] dark:to-[#0c0e23]"
                    >
                      <Heading className="text-2xl font-semibold text-black-100 dark:text-slate-200">The Results</Heading>
                      <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                      Jacqueline&apos;s guests can easily access all event information, reducing confusion and ensuring a smooth experience. The personal story section added a heartfelt touch, while the registry integration simplified gift-giving.
                      </Text>
                    </motion.div>
                  </div> */}
                </div>
                <div className="lg:flex-col xs:mt-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.18, duration: 0.9 }} // Delay for last paragraph
                    className="rounded-2xl border border-gray-200 dark:border-black-100 p-5 md:p-5 lg:p-7 bg-slate-200 shadow-md dark:bg-gradient-to-r dark:from-[#04071d] dark:to-[#0c0e23]"
                  >
                    <Heading className="text-2xl font-semibold text-black-100 dark:text-slate-200">The Solution</Heading>
                    <Text className="xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl text-gray-800 dark:text-gray-300">
                    We created a custom, barn-inspired website with clear event details, a dedicated registry section, and a personal story. The design is user-friendly and tailored to the venue&apos;s style, making it the go-to resource.
                    </Text>
                  </motion.div>
                  <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.48, duration: 0.9 }}
                  >
                    <MagicButton
                        title="View Case Study"
                        icon={<FaBook />}
                        position="right"
                        href="/"
                      />
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
