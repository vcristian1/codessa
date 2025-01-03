"use client";

import { navItems } from "@/data";
import React from "react";
import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Sponsors from "@/components/ui/Sponsors"

const Home = () => {
  return (
    <main className="relative dark:bg-black-100 bg-slate-200 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        {/* <Grid />
        <Clients />
        <Experience />
        <Approach />
        */}
        <Footer /> 
      </div>
    </main>
  );
};

export default Home;