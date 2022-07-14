import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// ===== component =====
import Layout from "../layouts/Layout";
import PlanetsPic from "../components/PlanetsPic";
import InformationContainer from "../container/InformationContainer";
import PlanetInformation from "../components/PlanetInfomation";

// ===== type =====
import type { CurrentPageInformation, Planets } from "../models/planet";

// ===== data =====
import { planetData } from "../data/planetData";

export default function IndexPage() {
  const [currentView, setCurrentView] =
    useState<CurrentPageInformation>("overview");

  const { planet } = useParams();

  useEffect(() => {
    setCurrentView("overview");
  }, [planet]);

  const imagePath = [
    `/src/assets/planet-${planet}.svg`,
    `/src/assets/planet-${planet}-internal.svg`,
    `/src/assets/geology-${planet}.png`,
  ];

  return (
    <Layout
      active={currentView}
      planet={(planet as Planets) ?? "mercury"}
      onChange={setCurrentView}
    >
      <PlanetsPic
        currentView={currentView}
        overviewPath={imagePath[0]}
        internalPath={imagePath[1]}
        surfacePath={imagePath[2]}
      />
      <PlanetInformation
        currentView={currentView}
        data={planetData[planet as Planets]}
        planet={(planet as Planets) ?? "mercury"}
      />
      <InformationContainer
        informations={planetData[planet as Planets].information}
      />
    </Layout>
  );
}
