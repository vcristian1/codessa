import React from 'react';
import Image from 'next/image'; // Using `next/image` for optimized image handling
import Link from 'next/link';
import arrowAngle from '../../public/arrow-angle.svg';
import { useTheme } from 'next-themes'; // Import useTheme hook
import { motion } from "framer-motion";

type ServiceCardProps = {
  lightImage: string; // Add light mode image
  darkImage: string;  // Add dark mode image  
  text: string;
  heading: string;
  path: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ lightImage, darkImage, text, heading, path }) => {

  return (
    <motion.div 
      className="flex flex-col md:flex-row text-center md:text-left lt:mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: .175, duration: 0.8 }}
      variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <Image src={darkImage} className="hidden dark:block" alt={heading} width={100} height={100} />
        <Image src={lightImage} className="block dark:hidden" alt={heading} width={100} height={100} />
      </div>
      <div className="mt-5 md:mt-0 md:ml-8">
        <h3 className="text-2xl font-semibold text-black dark:text-white">{heading}</h3>
        <p className="text-gray-800 dark:text-gray-300 xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl">{text}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
