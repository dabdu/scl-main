import React from "react";
import { colors } from "../constants/theme";

const ValuesSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:px-72 md:space-x-20 my-10">
      <div
        style={{ color: colors.primary }}
        className={"border-r border-r-yellow-500"}
      >
        <h1 className="text-5xl font-bold">Our Company</h1>
        <p className="text-2xl  font-light">Features</p>
      </div>
      <div>
        <p className="primary-font text-justify">
          Our major strength is our highly trained technical staff base, led by
          a board and management team with over 150 years cumulative corporate
          management experience.
        </p>
      </div>
    </div>
  );
};

export default ValuesSection;
