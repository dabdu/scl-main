import React from "react";
import { colors } from "../constants/theme";

const About = () => {
  return (
    <div>
      <center>
        <div className="py-12" style={{ width: "500px" }}>
          <h1
            className="font-bold text-3xl md:text-5xl text-left"
            style={{ color: colors.primary }}
          >
            Agro-Allied Company
          </h1>
          <p
            className=" italic text-md text-left pt-1 mb-8"
            style={{ color: colors.primary }}
          >
            People. Crops. Livestock. Environment
          </p>
          <p className="text-justify text-md  primary-font">
            SCL is a fully indigenous limited liability Agro-Allied company
            registered in 2010. The company was incorporated to carry out
            variety of Agro-Allied businesses and services.
          </p>
          <p className="text-justify py-3 primary-font">
            Our core philosophy of building sustainable and profitable crop,
            livestock and agro-allied businesses and entrepreneurs based on the
            understanding of the interconnection between the environment,
            livestock and people.
          </p>
        </div>
      </center>

      {/* Mission and Vission */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px] m-auto md:space-x-44 mx-10 md:mx-48 border-t border-gray-900 py-20">
        <div className="mb-12 mr-10">
          <h1
            className="text-4xl font-bold py-2"
            style={{ color: colors.primary }}
          >
            Vision
          </h1>
          <p className="text-justify text-md  primary-font">
            To realize the lost glory of Agriculture and its imperative
            importance in the sustenance of the Nigerian People.
          </p>
        </div>
        <div className="ml-10">
          <h1
            className="text-4xl font-bold py-2 "
            style={{ color: colors.primary }}
          >
            Mission
          </h1>
          <p className="text-justify text-md  primary-font">
            To produce premium products and services with the aid of modern
            concepts and technology, thus making Agro-Allied Business a major
            source of economic empowerment and livelihood to Nigerians.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
