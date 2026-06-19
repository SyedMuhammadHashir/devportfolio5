"use client";

import React from "react";
import SectionHeadng from "@/components/Hepler/SectionHeading";
import { motion } from "framer-motion";

const English = () => {
  return (
    <section
      id="english"
      className="pt-20 pb-20 bg-[#050709] overflow-hidden"
    >
      <SectionHeadng>English Language Course</SectionHeadng>

      <div className="w-[90%] mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Elevate Your English:
            <span className="text-red-500">
              {" "}Communication Skills Development Program
            </span>
          </h2>


          <p className="mt-6 text-gray-300 text-lg leading-8">
            In today’s global world, mastering the English language is more
            than just learning words—it is about unlocking opportunities,
            building connections, and commanding respect.
          </p>


          <p className="mt-5 text-gray-300 text-lg leading-8">
            Our English Language & Communication Skills Development Program
            is designed to transform hesitant learners into fluent,
            fearless, and confident English speakers.
          </p>



          {/* OFFER BOX */}

          <motion.div
            whileHover={{scale:1.03}}
            className="mt-8 bg-[#111827] p-6 rounded-xl border border-gray-700"
          >

            <h3 className="text-2xl font-semibold text-red-400">
              🚀 What We Offer
            </h3>


            <ul className="mt-4 space-y-4 text-gray-300">

              <li>
                ✅ <b className="text-white">
                Mastery over Grammar:
                </b>
                <br/>
                Learn grammar concepts in simple and practical ways to
                create accurate sentences.
              </li>


              <li>
                ✅ <b className="text-white">
                Dynamic Conversation Classes:
                </b>
                <br/>
                Improve speaking through discussions, role plays,
                and real-world conversations.
              </li>

            </ul>

          </motion.div>




          <motion.div
            whileHover={{scale:1.03}}
            className="mt-6 bg-[#111827] p-6 rounded-xl border border-gray-700"
          >

            <h3 className="text-2xl font-semibold text-red-400">
              🎯 Why Choose Our Institute?
            </h3>


            <ul className="mt-4 space-y-3 text-gray-300">

              <li>
              ✔ Personalized Individual Focus
              </li>

              <li>
              ✔ Confidence Building & Public Speaking
              </li>

              <li>
              ✔ Fluency Driven Learning Approach
              </li>

              <li>
              ✔ Practical Communication Training
              </li>

            </ul>

          </motion.div>



          <motion.button
            whileHover={{scale:1.08}}
            className="
            mt-8
            bg-red-600
            hover:bg-red-700
            px-8
            py-3
            rounded-full
            font-semibold
            text-white
            shadow-lg
            "
          >
            Join Next Batch Now
          </motion.button>


        </motion.div>





        {/* RIGHT IMAGE */}

        <motion.div
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.8}}
          viewport={{once:true}}
          className="flex justify-center"
        >

          <motion.img
            src="/images/English.png"
            alt="English Language Course"
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


export default English;