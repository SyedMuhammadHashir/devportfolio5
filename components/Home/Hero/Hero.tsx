import { BaseInfo } from '@/Data/data';
import Image from 'next/image';
import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="w-full min-h-screen pt-[14vh] md:pt-[12vh] bg-[#0f0715] overflow-hidden relative flex items-center">
      <div className="flex flex-col justify-center w-[90%] sm:w-4/5 h-full mx-auto">
        {/* Grid layout: Stacks vertically on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">
          
          {/* 1. Illustration Side - Displays FIRST on mobile, SECOND on desktop */}
          <div 
            data-aos="fade-up"
            className="order-1 lg:order-2 flex justify-center items-center w-full"
          >
            {/* REMOVED rounded-full and fixed sizes. Added fluid width and aspect-ratio */}
            <div className="relative w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[320px] lg:w-full lg:h-[400px]">
              <Image 
                src={BaseInfo.profilePic || "/images/AI-Robotics.png"} 
                alt={BaseInfo.name}
                fill
                className="object-contain" // Fixed: Keeps your vector art intact without cropping it into a circle
                priority
              />
            </div>
          </div>

          {/* 2. Text Content Side - Displays SECOND on mobile, FIRST on desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-4 md:space-y-6">
            <h2 
              data-aos="fade-left"
              className="text-xs sm:text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase"
            >
              Sindh Board of technical Education
            </h2>

            <h1 
              data-aos="fade-left"
              data-aos-delay="100"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3.5rem] font-bold text-white leading-tight"
            >
              Creative Tag Institute of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Science and Technology
              </span>
            </h1>

            <p 
              data-aos="fade-left" 
              data-aos-delay="200" 
              className="text-xs sm:text-sm md:text-base text-white text-opacity-70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Your trusted destination for professional learning and career growth. We offer quality training in IT Courses, English Language, Graphic Designing, Web Development, Digital Marketing, Forex & Crypto Trading, Freelancing, and Online Earning Skills.
            </p>

            <div data-aos="zoom-in" data-aos-delay="300" className="pt-2">
              <button className="px-6 py-3 md:px-8 md:py-3.5 bg-[#1d4ed8] text-white hover:bg-[#1e40af] font-medium rounded-md transition-all duration-150 inline-flex items-center gap-2 shadow-md">
                <span>Download Brochure</span>
                <FaDownload className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
