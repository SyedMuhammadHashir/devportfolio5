"use client";

import React from "react";
import SectionHeadng from "@/components/Hepler/SectionHeading";
import { motion } from "framer-motion";


const College = () => {
  return (
    <section
      id="college"
      className="pt-20 pb-20 bg-[#050709] overflow-hidden"
    >

      <SectionHeadng>
        College Admissions
      </SectionHeadng>


      <div className="
      w-[90%]
      mx-auto
      mt-12
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-12
      items-center
      ">


        {/* LEFT SIDE CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >


          <h2 className="
          text-3xl
          md:text-5xl
          font-bold
          leading-tight
          "
          >

          Regular Intermediate in 
          <span className="text-red-500">
             {" "}Computer Science
          </span>

          </h2>



          <h3 className="
          mt-5
          text-2xl
          text-red-400
          font-semibold
          "
          >

          Diploma in Information Technology

          </h3>



          <p className="
          mt-6
          text-gray-300
          text-lg
          leading-8
          "
          >

          Sindh Board of Technical Education (SBTE) approved
          2-years regular intermediate diploma program admissions
          are now open for Matric Science Group pass male and
          female students.

          </p>




          {/* FEATURES */}

          <motion.div
          whileHover={{
            scale:1.03
          }}

          className="
          mt-8
          bg-[#111827]
          p-6
          rounded-xl
          border
          border-gray-700
          "
          >


          <h3 className="
          text-2xl
          font-semibold
          text-red-400
          "
          >

          🎓 Admission Highlights

          </h3>



          <ul className="
          mt-5
          space-y-4
          text-gray-300
          ">


          <li>
          ✅ Matric Science Group Pass Male & Female Students
          </li>


          <li>
          ✅ 2-Years Regular Intermediate Diploma Program
          </li>


          <li>
          ✅ Admissions Are Open
          </li>


          <li>
          ✅ Approved by Sindh Board of Technical Education
          </li>


          </ul>


          </motion.div>





          <motion.button

          whileHover={{
            scale:1.08
          }}

          className="
          mt-8
          bg-red-600
          hover:bg-red-700
          px-8
          py-3
          rounded-full
          text-white
          font-semibold
          shadow-lg
          "
          >

          Apply Now

          </motion.button>



        </motion.div>






        {/* RIGHT SIDE IMAGE */}


        <motion.div

        initial={{
          opacity:0,
          scale:0.8
        }}

        whileInView={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:0.8
        }}

        viewport={{
          once:true
        }}

        className="
        flex
        justify-center
        "

        >



        <motion.img

        src="/images/college.png"

        alt="College Admission"

        animate={{
          y:[0,-15,0]
        }}

        transition={{
          duration:3,
          repeat:Infinity
        }}

        className="
        w-full
        max-w-md
        rounded-3xl
        shadow-2xl
        "

        />



        </motion.div>



      </div>


    </section>
  );
};


export default College;