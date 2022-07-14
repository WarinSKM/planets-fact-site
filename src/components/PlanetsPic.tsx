import React from "react";

// ===== type =====
import type { CurrentPageInformation } from "../models/planet";

interface PlanetsPicProps {
  overviewPath: string;
  internalPath: string;
  surfacePath: string;
  currentView: CurrentPageInformation;
}

const PlanetsPic: React.FC<PlanetsPicProps> = ({
  overviewPath,
  internalPath,
  surfacePath,
  currentView,
}) => {
  const getPlanetImage = () => {
    if (currentView === "internal") return internalPath;
    return overviewPath;
  };

  return (
    <div className="relative mx-5">
      <img className="invisible lg:w-full md:w-[184px] w-[111px]" src={getPlanetImage()} />
      <img className="absolute top-0 left-0 lg:w-full md:w-[184px] w-[111px]" src={getPlanetImage()} />
      {currentView === "surface" ? (
        <img
          className="absolute left-1/2 lg:h-[199px] md:h-[126px] h-[76px] top-3/4 translate-x-[-50%]"
          src={surfacePath}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PlanetsPic;
