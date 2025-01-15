"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 lt:py-24">
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
        <h1 className="heading">
          Trusted By Those
          <span className="text-purple"> Who Matter Most</span>
          {" "}
        </h1>
        </motion.div>


        <div className="flex flex-col items-center mt-10 lt:mt-10">
          <div
            // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
            className="h-[90vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
    </section>
  );
};

export default Clients;
