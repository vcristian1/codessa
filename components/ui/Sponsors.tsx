import React from "react";
import Colibri from "../../public/Colibri.svg";
import CV from "../../public/CV.svg";
import PeacePelvicHealth from "../../public/PeacePelvicHealth.svg"
import ColibriLight from "../../public/ColibriLight.svg";
import CVLight from "../../public/CVLight.svg";
import PeacePelvicHealthLight from "../../public/PeacePelvicHealthLight.svg"
import Image from "next/image"

const Sponsors = () => {
    return (
        <div className="bg-slate-100 dark:bg-black-100">
            <div className="flex justify-center xs:gap-[1px] lg:gap-6">
                <Image src={PeacePelvicHealth} className="hidden dark:block" height={100} width={170} alt="client-peace-pelvic-health" />
                <Image src={PeacePelvicHealthLight} className="block dark:hidden" height={100} width={170} alt="client-peace-pelvic-health" />
                <Image src={Colibri} className="hidden dark:block" height={100} width={170} alt="client-colibri-construction-services" />
                <Image src={ColibriLight} className="block dark:hidden" height={100} width={170} alt="client-peace-pelvic-health" />
                <Image src={CV} className="hidden dark:block" height={100} width={170} alt="client-cristian-vargas" />
                <Image src={CVLight} className="block dark:hidden" height={100} width={170} alt="client-cristian-vargas" />

            </div>
        </div>
            
    )
}

export default Sponsors;