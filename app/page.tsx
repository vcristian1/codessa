"use client";

import { navItems } from "@/data";
import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import About from "@/components/About"
import WhyChoose from "@/components/WhyChoose"
// import Experience from "@/components/Experience";
import Services from "@/components/Services"
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Sponsors from "@/components/ui/Sponsors"
import AnimatedCursor from "react-animated-cursor"

const Home = () => {

  return (
    <main className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 relative dark:bg-black-100 bg-slate-200 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="block xxs:hidden">
        <AnimatedCursor
            innerSize={14}
            outerSize={14}
            color='94, 23, 245'
            outerAlpha={0.1}
            innerScale={0.4}
            outerScale={5}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
        />
      </div>
      <div  className="hidden lt:block">
        <AnimatedCursor
            innerSize={14}
            outerSize={14}
            color='94, 23, 245'
            outerAlpha={0.2}
            innerScale={0.4}
            outerScale={5}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
        />
      </div>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        <Services />
        <Clients />
        {/* <Grid />
        <Experience />
        */}
        <WhyChoose />
        <Approach />
        <Footer /> 
      </div>
    </main>
  );
};

export default Home;