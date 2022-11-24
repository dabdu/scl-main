import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { colors } from "../constants/theme";

const Footer = () => {
  const info = "items-center";
  const text = "text-sm text-white ml-3 py-1";
  return (
    <div
      className="w-full mt-24 mygray text-white py-y px-2 sm:px-20 bg-black"
      // style={{ backgroundColor: colors.gray, fontFamily: "Poppins" }}
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-5 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2" style={{color: "#EEBE12"}}>Services</h6>
          <ul>
            <li className={text}>Apiculture</li>
            <li className={text}>Warehousing</li>
            <li className={text}>Green House Farming</li>
          </ul>
        </div>
        <div className="col-span-2 md:space-y-2">
          <h6 className="font-bold uppercase pt-2" style={{color: "#EEBE12"}}>contact</h6>
          <div className={`${info}`}>
            {/* Icon */}
            <div className="flex items-center">
              <MdEmail color={"white"} />
              <p className={"text-lg text-white ml-3"}>info@sclng.com</p>
            </div>
            <div className="flex items-center my-4">
              <BiPhoneCall color={"white"} />
              <p className={"text-lg text-white ml-3"}>(234) 0818 779 4810</p>
            </div>
          </div>
          <div className={"flex items-center"}>
            {/* Icon */}
            <FaMapMarkerAlt color={"red"} />
            <p className={"text-md text-white ml-3"}>
              SCL Farms, Dama-kusa Village, Kwali Area Council, Abuja.
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="font-bold uppercase" style={{color: "#EEBE12"}}>Subscribe to our newsletter</p>
          <p className="py-4" style={{ color: "white", fontSize: "12px" }}>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button
              className="p-2 mb-4 rounded-md text-gray-500"
              style={{ backgroundColor: "#000"}}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white text-sm">
        <p className="py-4">Copyrights 2016 - 2022 SCL. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
