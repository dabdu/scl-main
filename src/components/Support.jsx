import React from "react";

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportImg from "../assets/support.jpg";
import FeatureItem from "./FeatureItem";
const data = [
  {
    id: 1,
    title: "Food",
    title2: "Processing",
    desc: "Our food production line is configured to produce commercial quantity of quality oil from Soy beans, Extruded Soya meal and animal feed.",
    imgLink:
      "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/Food_Processing.png",
  },
  {
    id: 2,
    title: "Vegetable",
    title2: "Production",
    desc: "Tonnes of cherry tomatoes, cucumbers, peppers and tomatoes are churned out of the 1-hectare ultra-modern greenhouse all year round and shipped",
    imgLink:
      "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/vegetable_fruits.png",
  },
  {
    id: 3,
    title: "Regenerative",
    title2: "Agriculture",
    desc: "Our thirty-hectare agroforestry project is most probably the first of its kind in sub-Saharan Africa on such scale. It follows the Vetri and Brazilian models",
    imgLink:
      "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/regenerative_agric.png",
  },
  {
    id: 4,
    title: "Horiculture",
    desc: "With over 150 species of plants in its nursery, SCL farms has been able set up an enviable stock of plants to sustain the farm and for commercial purposes.",
    imgLink:
      "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/horticulture-1.png",
  },
  {
    id: 5,
    title: "Livestock",
    desc: "Livestock plays a very crucial role in the overall agroforestry systems. With only five cows, SCL was able utilize the dung and urine to turn more ...",
    imgLink:
      "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/livestock_scl-1.png",
  },
  {
    id: 6,
    title: "Apiary",
    title2: "(Bee Keepng)",
    desc: "With an array of more than fifty hives spread around our organic forest, the SCL honey farming takes advantage of the over a hundred tree species.",
    imgLink:
      "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/apiary_honey_prod_scl.png",
  },
];
const Support = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-6 pt-12 sm:pt-20 text-black md:px-60 py-20"
      style={{ background: "rgba(232, 231, 231, 0.43)" }}
    >
      {data.map((item, index) => (
        <FeatureItem
          key={item.id}
          imgLink={item.imgLink}
          title={item.title}
          desc={item.desc}
          title2={item.title2}
        />
      ))}
    </div>
  );
};

export default Support;
