import React from "react";
import { motion } from "framer-motion";
import WelcomeGraphicDark from "../public/chicagobean.png";
import WelcomeGraphicLight from "../public/chicagoriver.png";
import Image from "next/image";
import { Box, Container, Button, Heading, Text } from "theme-ui";


const About = () => {
    return (
        <section id="about" className="py-20 lt:py-24">
            {/* Image and Main Header Here */}
            <motion.div 
                className="lt:flex mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: .175, duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }} 
            >
                {/* Text Content */}
                <div className="px-3 lt:w-4/5">
                    {/* Headings Here */}
                    <motion.div 
                        className="lt:w-5/6 lt:px-12 lt:px-18"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: .175, duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 },
                        }} 
                    >
                        <h1 className="font-bold text-4xl md:text-5xl text-[#5e17eb] my-5 lt:my-8">
                        Chicago{" "}
                        <span className="text-black-100 dark:text-white">
                            Web Design & Development
                        </span>{" "}Firm
                        </h1>
                        <p className="lt:text-left md:tracking-wider mb-4 xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl">
                        Codessa is a Web Design and Development Firm based in Chicago, offering personalized, stress-free website solutions. We combine custom development with the convenience of platforms like Squarespace, ensuring clients receive a tailored website without the need for ongoing management. We handle everything—from design and SEO optimization to deployment and regular updates/content changes. 
                        </p>
                    </motion.div>
                </div>
                
                {/* Image Section */}
                <div className="sm:w-1/3">
                    <Image 
                        src={WelcomeGraphicDark} 
                        alt="home-page-graphic" 
                        className="rounded-[20px] w-full h-auto hidden dark:block" 
                        width={300} 
                        height={300} 
                    />
                    <Image 
                        src={WelcomeGraphicLight} 
                        alt="home-page-graphic" 
                        className="rounded-[20px] w-full h-auto block dark:hidden" 
                        width={300} 
                        height={300} 
                    />
                </div>
            </motion.div>
        </section>
    );
}

export default About;