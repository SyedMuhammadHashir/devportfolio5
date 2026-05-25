// About.tsx

import SectionHeadng from "@/components/Hepler/SectionHeading";
import { aboutInfo } from "@/Data/data";
import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="pt-16 pb-16 bg-[#050709]">
        <SectionHeadng>About Us</SectionHeadng>

        {/* Main Layout */}
        <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20">
          
          {/* Left Side */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="text-[26px] sm:text-4xl lg:text-5xl font-bold text-gray-200 titleTxtMain">
              {aboutInfo.title}
            </h1>

            {/* Description */}
            <div className="mt-6 space-y-6">
              {aboutInfo.description.map((para, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-gray-400 leading-[2rem]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            className="space-y-10"
          >
            {/* Vision Card */}
            <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Vision
              </h2>

              <p className="text-base sm:text-lg text-gray-400 leading-[2rem]">
                {aboutInfo.vision}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#111827] p-8 rounded-2xl border border-gray-800 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Mission
              </h2>

              <p className="text-base sm:text-lg text-gray-400 leading-[2rem]">
                {aboutInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;