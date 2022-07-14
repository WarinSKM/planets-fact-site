import React from "react";

interface InformationCardProp {
  title: string;
  value: string;
  unit: string;
}

const InformationCard: React.FC<InformationCardProp> = ({
  title,
  value,
  unit,
}) => {
  return (
    <div className="md:block flex items-center justify-between bg-transparent border border-light p-3 text-white uppercase">
      <h4 className="text-light">{title}</h4>
      <h2 className="lg:text-[40px] lg:leading-[52px]  md:text-2xl text-xl">{value + ' ' + unit}</h2>
    </div>
  );
};

export default InformationCard;
