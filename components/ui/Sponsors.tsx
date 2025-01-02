import React from "react";
import Colibri from "../../public/Colibri.svg";
import CV from "../../public/CV.svg";
import PeacePelvicHealth from "../../public/PeacePelvicHealth.svg"
import Image from "next/image"

const Sponsors = () => {
    return (
        <div id="clients" className="relative z-10 w-full bg-primary-100 py-10">
            <div className="mx-auto xs:w-1/2 sm:w-3/4 md:w-1/2 lg:w-full">
            <div className="flex justify-center xs:gap-[1px] lg:gap-6">
                <Image src={PeacePelvicHealth} height={100} width={170} alt="client-peace-pelvic-health" />
                <Image src={Colibri} height={100} width={170} alt="client-colibri-construction-services" />
                <Image src={CV} height={100} width={170} alt="client-cristian-vargas" />
            </div>
            </div>
      </div>
    )
}

export default Sponsors;