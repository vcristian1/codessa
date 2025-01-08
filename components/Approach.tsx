"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Approach = () => {
  return (
    <section id="approach" className="w-full pt-20 lt:pt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.175, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="heading text-[#5e17eb]">
          Strategies <span className="text-black-100 dark:text-white">That Drive Results</span>
        </h1>
      </motion.div>
      
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card
            title="Planning & Strategy"
            icon={<AceternityIcon order="Phase 1" />}
            des="We'll collaborate to map out your website's goals, target audience, 
            and key functionalities. We'll discuss things like site structure, 
            navigation, and content requirements."
            bgClass="bg-chicagoSkyline"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card
            title="Development & Progress Update"
            icon={<AceternityIcon order="Phase 2" />}
            des="Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way."
            bgClass="bg-chicagoTrain"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card
            title="Development & Launch"
            icon={<AceternityIcon order="Phase 3" />}
            des="This is where the magic happens! Based on the approved design, 
            I'll translate everything into functional code, building your website
            from the ground up."
            bgClass="bg-chicagoTheater"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  des,
  bgClass,
  children // Add the bgClass prop
}: {
  title: string;
  icon: React.ReactNode;
  des: string;
  bgClass: string; // Declare bgClass prop type
  children?: React.ReactNode; // Make sure children is optional
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group/canvas-card flex items-center justify-center relative lg:h-[35rem] w-full max-w-sm mx-auto p-4 rounded-3xl overflow-hidden ${bgClass} bg-cover`}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <div className="bg-black/60 w-full h-full absolute inset-0" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold text-white group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 text-white text-center group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {des}
        </p>
        {children} {/* Render the children prop here */}
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 dark:text-white text-white backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
