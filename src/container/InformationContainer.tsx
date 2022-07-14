import React from "react";

import InformationCard from "../components/InformationCard";

interface InformationContainerProp {
  informations: Array<{
    title: string;
    value: string;
    unit: string;
  }>;
}

const InformationContainer: React.FC<InformationContainerProp> = ({
  informations,
}) => {
  return (
    <div className="grid md:grid-cols-4 md:gap-4 grid-cols-1 gap-4">
      {informations.map((item) => (
        <InformationCard
          title={item.title}
          value={item.value}
          unit={item.unit}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default InformationContainer;
