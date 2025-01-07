import React from 'react';
import BlockTitle from '../components/ui/BlockTitle';
import ServiceCard from '../components/ui/ServiceCard';
import { SERVICES_DATA } from "@/data";
import { Box, Container, Grid } from 'theme-ui';
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <section id="services" className="pt-10 md:pt-10 lg:pt-14">
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
        className="pt-16 md:pt-16 lg:pt-20 pb-20 md:pb-20 lg:pb-24" 
        >
            <h1 className="heading text-[#5e17eb]">
            Our{" "}
            <span className="text-black-100">
                Web Design & Development
            </span>{" "} Services
            <span className="dark:text-[indigo-500] text-[#5e17eb]">
                {" "} 
            </span>
            </h1>
        </motion.div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map(({ lightImage, darkImage, text, heading, path }, index) => (
            <ServiceCard
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

export default Services;