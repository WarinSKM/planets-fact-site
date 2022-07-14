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

  return (
    <Layout
      active={currentView}
      planet={(planet as Planets) ?? "mercury"}
      onChange={setCurrentView}
    >
      <PlanetsPic
        currentView={currentView}
        overviewPath={`/src/assets/planet-${planet}.svg`}
        internalPath={`/src/assets/planet-${planet}-internal.svg`}
        surfacePath={`/src/assets/geology-${planet}.png`}
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
