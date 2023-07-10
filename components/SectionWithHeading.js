import React, { Children } from "react";
import SectionContainer from "./SectionContainer";

export default function SectionWithHeading({ children, heading }) {
  return (
    <SectionContainer>
      <div className="border-l border-gray-700 py-8 xl:py-20">
        <div className="heading-with-leftborder">
          <h2 className="font-bold text-2xl lg:text-6xl leading-tight ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 text-white">
            {heading}
          </h2>
        </div>
        <div className="ml-4 lg:ml-12 xl:ml-16 2xl:ml-36 lg:text-xl 2xl:text-xl">
          {children}
        </div>
      </div>
    </SectionContainer>
  );
}
