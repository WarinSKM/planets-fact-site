import React from "react";

import type { Planets } from "../models/planet";

interface MobileButtonsProps {
  planet: Planets;
  active: "overview" | "internal" | "surface";
  onChange: Function;
}
const MobileButtons: React.FC<MobileButtonsProps> = ({
  planet,
  active,
  onChange,
}) => {
  return (
    <div className="flex md:hidden justify-around items-center text-white border-b border-[#979797]">
      <Button
        active={active === "overview"}
        planet={planet}
        onClick={() => onChange("overview")}
      >
        OVERVIEW
      </Button>
      <Button
        active={active === "internal"}
        planet={planet}
        onClick={() => onChange("internal")}
      >
        Structure
      </Button>
      <Button
        active={active === "surface"}
        planet={planet}
        onClick={() => onChange("surface")}
      >
        Surface
      </Button>
    </div>
  );
};

interface ButtonProp {
  children: string;
  active: boolean;
  planet: Planets;
  onClick: Function;
}

const Button: React.FC<ButtonProp> = ({
  children,
  active,
  planet,
  onClick,
}) => {
  const getColor = (planet: Planets): string => {
    switch (planet) {
      case "mercury":
        return "border-mercury";
      case "earth":
        return "border-earth";
      case "jupiter":
        return "border-jupiter";
      case "mars":
        return "border-mars";
      case "neptune":
        return "border-neptune";
      case "saturn":
        return "border-saturn";
      case "uranus":
        return "border-uranus";
      case "venus":
        return "border-venus";
      default:
        return "";
    }
  };

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (typeof onClick === "function") onClick(event);
  };

  return (
    <button
      className={`py-3 border-b-4 ${
        active ? getColor(planet) : "border-transparent"
      }`}
      onClick={onClickHandler}
    >
      <h3 className="text-[10px] uppercase font-bold">{children}</h3>
    </button>
  );
};

export default MobileButtons;
