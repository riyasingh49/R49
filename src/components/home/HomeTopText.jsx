import React from "react";
import Video from "./Video";

const HomeTopText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[8vw] uppercase leading-[8vw] justify-center flex items-center">
        Inspired by
      </div>
      <div className="text-[8vw] uppercase leading-[8vw] justify-center flex items-center">
        earth’s
        <div className="h-[8vw] w-[16vw] rounded-full -mt-3 overflow-hidden">
          <Video />
        </div>
        gentle
      </div>
      <div className="text-[8vw] uppercase leading-[8vw] justify-center flex items-center">
        magic.
      </div>
    </div>
  );
};

export default HomeTopText;
