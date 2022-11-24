import React from "react";
import videoBg from "../assets/sclbgvideo.mp4";

const Hero = () => {
  return (
    <div name="home" className="w-full home" style={{ height: "100vh" }}>
      {/* <div className="home-overlay"></div> */}
      <div className="home-content">
        {/* <p className="font-bold text-5xl text-white z-10 pt-30">
          SCL: SAI ANWARAI JUMAI CONSULTAIRE LIMITED
        </p> */}
        <p className="font-medium text-xl  text-white z-10">
          People. Crops. Livestock. Environment
        </p>
      </div>
      {/* <p className="font-bold text-2xl text-white z-10 py-40">
            SCL: SAI ANWARAI JUMAI CONSULTAIRE LIMITED
          </p> */}
      {/* <p className="font-bold text-5xl text-white z-10">
            People. Crops. Livestock. Environment
          </p> */}
    </div>
  );
};

export default Hero;
