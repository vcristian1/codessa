import React from 'react';
import BlockTitle from '../components/ui/BlockTitle';
import WhyChooseCard from '../components/ui/WhyChooseCard';
import { WhyChooseData } from "@/data";
import { Box, Container, Grid } from 'theme-ui';
import { motion } from "framer-motion";

const WhyChoose: React.FC = () => {
  return (
    <section id="whychoose" className="py-14 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: .175, duration: 0.8 }}
        variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
        }}
        className="pb-20 md:pb-20 lg:pb-24" 
        >
            <h1 className="heading text-black-100 dark:text-white">
            Why Choose{" "}
            <span className="text-[#5e17eb]">
                Codessa
            </span>{" "} As Your Web Design Firm
            <span className="dark:text-[indigo-500] text-[#5e17eb]">
                {" "} 
            </span>
            </h1>
        </motion.div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {WhyChooseData.map(({ lightImage, darkImage, text, heading, path }, index) => (
            <WhyChooseCard
              darkImage={darkImage}
              lightImage={lightImage}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;