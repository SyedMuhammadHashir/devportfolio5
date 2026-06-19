import SectionHeadng from "@/components/Hepler/SectionHeading"; // Kept your original typo path intact
import { collegeAdmissionInfo, CollegeInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const College = () => {
  return (
    <section id="college">
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeadng>College</SectionHeadng>
      
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
        
        {/* Left Side: Text Content */}
        <div 
          data-aos="fade-right" 
          data-aos-anchor-placement="top-center"
          className="flex flex-col justify-center"
        >
          <h1 className="text-[26px] sm:text-4xl lg:text-5xl font-bold text-gray-200 titleTxtMain leading-tight">
            {collegeAdmissionInfo.title}
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mt-2 italic">
            {collegeAdmissionInfo.subtitle}
          </h2>
          
          <p className="mt-6 text-base text-gray-400 leading-relaxed">
            {collegeAdmissionInfo.description}
          </p>

          {/* Features / Bullet Points List */}
          <div className="mt-8 space-y-4">
            {collegeAdmissionInfo.features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 bg-gray-900/40 p-3 rounded-lg border border-gray-800/50 dir-rtl text-right lg:dir-ltr lg:text-left"
              >
                <div className="mt-1 bg-blue-600/20 p-2 rounded-full text-blue-400 shrink-0">
                  <FaCheck className="text-sm" />
                </div>
                <p className="text-gray-300 font-medium text-sm sm:text-base pr-2 lg:pr-0">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Picture Frame */}
       

      </div>
    </div>
    </section>
  );
};

export default College;