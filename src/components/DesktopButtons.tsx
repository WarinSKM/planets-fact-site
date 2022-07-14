import React from "react";
import type { Planets } from "../models/planet";
import Button from "../components/Button";

interface DesktopButtonsProps {
  planet: Planets;
  active: "overview" | "internal" | "surface";
  onChange: Function;
}

const DesktopButtons: React.FC<DesktopButtonsProps> = ({
  planet,
  active,
  onChange,
}) => {
  return (
    <div className="hidden md:block">
      <Button
        className="my-4"
        index="01"
        color={planet}
        active={active === "overview"}
        value="overview"
        onClick={() => onChange("overview")}
      >
        overview
      </Button>
      <Button
        className="my-4"
        index="02"
        color={planet}
        active={active === "internal"}
        value="internal"
        onClick={() => onChange("internal")}
      >
        Internal Structure
      </Button>
      <Button
        className="my-4"
        index="03"
        color={planet}
        active={active === "surface"}
        value="surface"
        onClick={() => onChange("surface")}
      >
        Surface Geology
      </Button>
    </div>
  );
};

export default DesktopButtons;
