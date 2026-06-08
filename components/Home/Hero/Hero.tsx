import { BaseInfo } from '@/Data/data';
import Image from 'next/image';
import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  // PDF download function - works with your file structure
  const handleDownloadBrochure = () => {
    // Your PDF is in public/broucher.pdf (note spelling: broucher.pdf)
    const pdfUrl = 'images/broucher.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Creative_Tag_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full min-h-screen pt-[14vh] md:pt-[12vh] bg-[#0f0715] overflow-hidden relative flex items-center">
      <div className="flex flex-col justify-center w-[90%] sm:w-4/5 h-full mx-auto">
        {/* Grid layout: Stacks vertically on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">
          
          {/* 1. Illustration Side - Shows on mobile FIRST, desktop SECOND */}
          <div 
            data-aos="fade-up"
            className="order-1 lg:order-2 flex justify-center items-center w-full"
          >
            <div className="relative w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[320px] lg:w-[450px] lg:h-[320px]">
              <Image 
                src={BaseInfo.profilePic || "/images/AI-Robotics.png"} 
                alt={BaseInfo.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* 2. Text Content Side - Shows on mobile SECOND, desktop FIRST */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-4 md:space-y-6">
            <h2 
              data-aos="fade-left"
              className="text-xs sm:text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase"
            >
              Sindh Board of Technical Education
            </h2>

            <h1 
              data-aos="fade-left"
              data-aos-delay="100"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Creative Tag Institute of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Science and Technology
              </span>
            </h1>

            <p 
              data-aos="fade-left" 
              data-aos-delay="200" 
              className="text-sm sm:text-base text-white text-opacity-70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Your trusted destination for professional learning and career growth. We offer quality training in IT Courses, English Language, Graphic Designing, Web Development, Digital Marketing, Forex & Crypto Trading, Freelancing, and Online Earning Skills.
            </p>

            <div data-aos="zoom-in" data-aos-delay="300" className="pt-2">
              <button 
                onClick={handleDownloadBrochure}
                className="px-6 py-3 md:px-8 md:py-3.5 bg-[#1d4ed8] text-white hover:bg-[#1e40af] font-medium rounded-md transition-all duration-150 inline-flex items-center gap-2 shadow-md hover:shadow-lg"
              >
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
