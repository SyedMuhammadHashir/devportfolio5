import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    percent: string;
    Icon: React.ElementType;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { title, percent, Icon } = skill;

  return (
    <div
      className="flex flex-col justify-between items-center p-6 bg-gray-900 text-white 
      rounded-lg hover:bg-blue-900 transition-all duration-300 cursor-pointer 
      h-full min-h-[220px]"
    >
      {/* ICON */}
      <Icon className="text-4xl text-blue-400 mb-2" />

      {/* TITLE */}
      <h1 className="text-[18px] font-semibold mb-2 text-center">
        {title}
      </h1>

      {/* VALUE */}
      <p className="text-[22px] font-bold text-gray-200">
        {percent}
      </p>
    </div>
  );
};

export default SkillCard;
