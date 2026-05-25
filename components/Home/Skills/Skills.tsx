import SectionHeadng from "@/components/Hepler/SectionHeading";
import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeadng>Our Achievements</SectionHeadng>

      <div
        className="w-[90%] mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
        gap-4 items-stretch"
      >
        {skillsData.map((skill, i) => {
          const IconComponent = skill.Icon; // ✅ FIX ADDED

          return (
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              {/* ✅ FIXED HERE */}
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
