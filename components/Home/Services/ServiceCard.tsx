"use client";
import Image from "next/image";
import React from "react";
import Titl from "react-parallax-tilt";

// define the props type
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};
const ServiceCard = ({service}: Props) =>{
    return <Titl className="shadow-2x1 p-6 rounded-lg bg-[#814ced]">
        <Image src={`${service.icon }`} 
        alt={service.title} 
        width={50} height={50} />
        <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}

        </h1>
        <p className="mt-3 text-sm text-white text-opacity-80">
            {service.description}
        </p>
    </Titl>;
};

export default ServiceCard;