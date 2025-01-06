import React from "react";
import Colibri from "../../public/Colibri.svg";
import CV from "../../public/CV.svg";
import PeacePelvicHealth from "../../public/PeacePelvicHealth.svg"
import ColibriLight from "../../public/ColibriLight.svg";
import CVLight from "../../public/CVLight.svg";
import PeacePelvicHealthLight from "../../public/PeacePelvicHealthLight.svg"
import Image from "next/image"
import {
    motion,
  } from "framer-motion";

const Sponsors = () => {
    return (
        <motion.div 
            id="clients" 
            className="hidden lt:block relative z-10 bg-slate-200 dark:bg-black-100 mx-auto overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: .175, duration: 0.8 }}
            variants={{
                hidden: { opacity: 0, y: -60 },
                visible: { opacity: 1, y: 0 },
            }}    
        >
            <div className="flex justify-evenly xs:gap-[1px] ">
                <Image src={PeacePelvicHealth} className="hidden dark:block" height={100} width={150} alt="client-peace-pelvic-health" />
                <Image src={PeacePelvicHealthLight} className="block dark:hidden" height={100} width={150} alt="client-peace-pelvic-health" />
                <Image src={Colibri} className="hidden dark:block" height={100} width={150} alt="client-colibri-construction-services" />
                <Image src={ColibriLight} className="block dark:hidden" height={100} width={150} alt="client-peace-pelvic-health" />
            </div>
        </motion.div>
            
    )
}

export default Sponsors;