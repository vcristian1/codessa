"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image"
import codessa from "../public/codessa.svg"
import codessa2 from "../public/codessa2.svg"
import Sponsors from "./ui/Sponsors"
import codessalight from "../public/codessalight.svg"

const Hero = () => {
  return (
    <div className="pb-20 xxs:pt-24 xs:pt-24 md:pt-32">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
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
          className="h-screen w-full dark:bg-black-100 bg-slate-100
          absolute top-0 left-0 flex items-center justify-center"
        >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative xxs:my-20 xs:my-16 xr:my-24 itp:my-24 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image src={codessa2} height={20} width={100} alt="logo" className="hidden dark:block tracking-widest text-xs text-center max-w-80">
          </Image>
          <Image src={codessalight} height={20} width={100} alt="logo" className="block dark:hidden tracking-widest text-xs text-center max-w-80">
          </Image>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Stress-Free Websites for Small Businesses."
            className="text-center xxs:text-[42px] xs:text-[38px] itp:text-[44px] xr:text-[48px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl">
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
      <Sponsors/>
    </div>
  );
};

export default Hero;