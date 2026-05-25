import { BaseInfo } from '@/Data/data';
import Image from 'next/image';
import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          {/* Text Content */}
          <div>
      <h2
  data-aos="fade-left"
  className="text-sm sm:text-base md:text-lg mb-4 text-gray-400 font-medium tracking-wide"
>
  {BaseInfo.name}
</h2>
            {/* title */}
       <h1
  data-aos="fade-left"
  data-aos-delay="100"
  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl font-bold text-white leading-snug"
>
  {BaseInfo.position}
</h1>
                 {/* Description */}
                      <p data-aos="fade-left" data-aos-delays="200" className="mt-6 text-sm md:text-base text-white text-opacity-60">
                 {BaseInfo.description}
                  </p>

               {/* Button */}
            <button
  data-aos="zoom-in"
  data-aos-delay="300"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/images/broucher.pdf";
    link.download = "broucher.pdf";
    link.click();
  }}
  className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
>
  <span>Download Broucher</span>
  <FaDownload />
</button>


          </div>

          {/* Image content */}
          <div data-aos="fade-left" data-aos-delays="400"className="mx-auto hidden lg:block rounded-[3rem] border-[-3.5px] border-blue-950 overflow-x-hidden">

            <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={500} height={500}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
