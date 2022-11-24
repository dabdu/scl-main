import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { colors } from "../constants/theme";

const FeatureItem = ({ imgLink, title, title2 }) => {
  return (
    <div
      className="bg-white rounded-sm relative"
      style={{ height: "265px", width: "204px" }}
    >
      <h3
        className="font-bold primary-font my-3 text-center"
        style={{ lineHeight: "1px" }}
      >
        {title}
      </h3>
      <p className="text-center font-light">{title2}</p>
      <img
        src={imgLink}
        className={"absolute bottom-0"}
        style={{ height: "202px", width: "100%" }}
      />
    </div>
  );
};

export default FeatureItem;
