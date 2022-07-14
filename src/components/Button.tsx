import React, { ReactNode } from "react";
import type { Planets } from "../models/planet";

interface ButtonProps {
  color: Planets;
  index: string;
  children: string;
  active: boolean;
  className?: string;
  onClick?: Function;
  value: string;
}

const Button: React.FC<ButtonProps> = ({
  color,
  children,
  index,
  active,
  className,
  onClick,
  value,
}) => {
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (typeof onClick === "function") onClick(event, value);
  };

  const getColor = (): string => {
    switch (color) {
      case "mercury":
        return "bg-mercury border-mercury";
      case "earth":
        return "bg-earth border-earth";
      case "jupiter":
        return "bg-jupiter border-jupiter";
      case "mars":
        return "bg-mars border-mars";
      case "neptune":
        return "bg-neptune border-neptune";
      case "saturn":
        return "bg-saturn border-saturn";
      case "uranus":
        return "bg-uranus border-uranus";
      case "venus":
        return "bg-venus border-venus";
      default:
        return "";
    }
  };

  return (
    <button
      className={`uppercase text-white w-[350px] flex justify-start items-center py-2 px-5 ${
        active
          ? getColor()
          : "border border-light hover:bg-second-primary hover:border-second-primary"
      } ${className}`}
      onClick={onClickHandler}
    >
      <h3 className="mr-4">{index}</h3>
      <h3>{children}</h3>
    </button>
  );
};

export default Button;
