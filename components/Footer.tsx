"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useForm } from 'react-hook-form';
import Link from "next/link";
import codessa2 from "../public/codessa2.svg"
import codessalight from "../public/codessalight.svg"
import Image from "next/image";


const Footer = () => {
  const inputStyles = `bg-gradient-to-r from-[#04071d] to-[#0c0e23] rounded-[12px] border border-[rgba(255,255,255,0.125)] w-full justify-center items-center rounded-lg lt:px-4 lt:py-3 placeholder-white mt-5 text-white`

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
  }

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: .175, duration: 0.8 }}
      variants={{
          hidden: { opacity: 0, y: -60 },
          visible: { opacity: 1, y: 0 },
      }}
      >
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="dark:text-white-200 text-black-100 md:mt-10 my-5 text-center">
            Reach out to our experts today and let&apos;s discuss how we can help you
            achieve your goals.
          </p>
          <form
            action="https://formsubmit.co/cristian.v0223@gmail.com"
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            className="lt:px-40"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "This field is required.",
                maxLength: {
                  value: 100,
                  message: "Max length is 100 characters.",
                },
              })}
            />
            {errors.name?.message && (
              <p className="mt-1 text-primary-500">{String(errors.name.message)}</p>
            )}

            <input
              className={inputStyles}
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "This field is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
            />
            {errors.email?.message && (
              <p className="mt-1 text-primary-500">{String(errors.email.message)}</p>
            )}

            <input
              className={inputStyles}
              type="text"
              placeholder="Phone Number"
              {...register("phone", {
                required: "This field is required.",
              })}
            />
            {errors.phone?.message && (
              <p className="mt-1 text-primary-500">{String(errors.phone.message)}</p>
            )}

            <textarea
              className={inputStyles}
              placeholder="Please provide a description of your need or project"
              rows={4}
              cols={50}
              {...register("message", {
                required: "This field is required.",
                maxLength: {
                  value: 2000,
                  message: "Max length is 2000 characters.",
                },
              })}
            />
            {errors.message?.message && (
              <p className="mt-1 text-primary-500">{String(errors.message.message)}</p>
            )}
            <input
              className={inputStyles}
              type="hidden"
              name="_next"
              value="https://codessa.vercel.app"
            />
            
            <button type="submit" className="relative inline-flex h-12 w-full md:w-60 mt-10 md:mt-10 overflow-hidden rounded-lg p-[1.5px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span
                className="inline-flex h-full w-full items-center justify-center rounded-lg
             bg-slate-950 px-8 text-sm font-medium text-white backdrop-blur-3xl gap-2"
              >
                Submit
              </span>
            </button>
          </form>
          
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-10 lt:px-10">
          <Image src={codessa2} height={50} width={50} alt="logo" className="hidden dark:block tracking-widest text-xs text-center max-w-80">
          </Image>
          <Image src={codessalight} height={50} width={50} alt="logo" className="block dark:hidden tracking-widest text-xs text-center max-w-80">
          </Image>
          <p className="md:text-base text-sm md:font-normal font-light">
            © 2025 Codessa All rights reserved.
          </p>
          <Link href="">Terms & Conditions</Link>
          <Link href="">Privacy</Link>
          <Link href="">Accessibility</Link>


          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20}>
                </img>
              </div>
            ))}
          </div>
          <p className=""><span className="font-bold">Office Location</span> <br></br> 2430 N. 79th Ave <br></br> Elmwood Park, IL <br></br> 773-706-5634</p>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
