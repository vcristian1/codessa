import React from 'react';
import Image from 'next/image'; // Using `next/image` for optimized image handling
import Link from 'next/link';
import arrowAngle from '../../public/arrow-angle.svg';
import { useTheme } from 'next-themes'; // Import useTheme hook

type ServiceCardProps = {
  lightImage: string; // Add light mode image
  darkImage: string;  // Add dark mode image  
  text: string;
  heading: string;
  path: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ lightImage, darkImage, text, heading, path }) => {

  return (
    <div className="flex flex-col md:flex-row text-center md:text-left lt:mx-auto">
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <Image src={darkImage} className="hidden dark:block" alt={heading} width={100} height={100} />
        <Image src={lightImage} className="block dark:hidden" alt={heading} width={100} height={100} />
      </div>
      <div className="mt-5 md:mt-0 md:ml-8">
        <h3 className="text-2xl font-semibold text-black dark:text-white">{heading}</h3>
        <p className="text-gray-800 dark:text-gray-300 xxs:text-lg xs:text-sm itp:text-lg xr:text-lg text-sm md:text-lg lg:text-1xl">{text}</p>
        <Link href={path} passHref>
            {/* <span className="inline-flex items-center text-blue-600 font-medium">
                Learn More
                <Image src={arrowAngle} alt="angle icon" width={16} height={16} className="ml-2" />
            </span> */}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
