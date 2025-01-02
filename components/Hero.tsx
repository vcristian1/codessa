"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image"
import codessa from "../public/codessa.svg"
import codessa2 from "../public/codessa2.svg"


const Hero = () => {
  return (
    <div className="pb-20 pt-20 md:pt-32">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        {/* <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        /> */}
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="pink"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="indigo" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image src={codessa2} height={20} width={100} alt="logo" className="tracking-widest text-xs text-center max-w-80">
          </Image>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Stress-Free Websites for Small Businesses."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl">
          Chicago Web Design and Development Firm creating custom websites that take the hassle out of your online presence. You focus on your business—let us handle your website with care.</p>

          <a href="#about">
            <MagicButton
              title="View our Portfolio"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;