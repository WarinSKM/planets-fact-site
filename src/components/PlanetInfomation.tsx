import React from "react";
import type {
  Planets,
  Information,
  CurrentPageInformation,
} from "../models/planet";
import iconSource from "/icon-source.svg";

interface PlanetInformationProp {
  data: Information;
  planet: Planets;
  currentView: CurrentPageInformation;
}

const PlanetInformation: React.FC<PlanetInformationProp> = ({
  data,
  planet,
  currentView,
}) => {
  return (
    <div className="text-white text-center md:text-start">
      <h1 className="uppercase mb-4 md:text-5xl text-4xl">{data.name}</h1>
      <p className="w-full mb-2">{data[currentView]}</p>
      <p className="text-light">
        Source :{" "}
        <a href={data.source[currentView]} className="underline" target="_blank">
          Wikipedia
          <img className="inline ml-2" src={iconSource} />
        </a>
      </p>
    </div>
  );
};

export default PlanetInformation
