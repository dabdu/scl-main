import React from "react";
import { GiGrainBundle, GiChestnutLeaf, GiGoat } from "react-icons/gi";
import { MdOutlineAgriculture, MdOutlineSchool } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import IconItem from "./IconItem";
const data = [
  { text: "Food Processing", Icon: GiGrainBundle },
  { text: "Vegetable Production", Icon: GiChestnutLeaf },
  { text: "Regenerative Agriculture", Icon: MdOutlineAgriculture },
  { text: "Training School", Icon: MdOutlineSchool },
  { text: "Horticulture", Icon: FaLeaf },
  { text: "Livestock", Icon: GiGoat },
];
const IconsSection = () => {
  return (
    <div className="md:flex hidden items-center justify-around my-10 mx-14  md:mx-48 border-b pb-20 border-black">
      {data.map((item, index) => (
        <IconItem key={index} text={item.text} Icon={item.Icon} index={index} />
      ))}
    </div>
  );
};

export default IconsSection;
