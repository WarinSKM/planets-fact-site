import { useState } from "react";
// ===== component =====
import Layout from "../layouts/Layout";
import PlanetsPic from "../components/PlanetsPic";
import InformationContainer from "../container/InformationContainer";
import PlanetInformation from "../components/PlanetInfomation";

// ===== type =====
import type { CurrentPageInformation } from "../models/planet";

// ===== data =====
import { jupiterData } from "../data/planetData";

// ===== image =====
import JupiterOverviewPic from "../assets/planet-jupiter.svg";
import JupiterInternalPic from "../assets/planet-jupiter-internal.svg";
import JupiterSurfacePic from "../assets/geology-jupiter.png";

export default function Jupiter() {
  const [currentView, setCurrentView] =
    useState<CurrentPageInformation>("overview");

  return (
    <Layout active={currentView} planet="jupiter" onChange={setCurrentView}>
      <PlanetsPic
        currentView={currentView}
        overviewPath={JupiterOverviewPic}
        internalPath={JupiterInternalPic}
        surfacePath={JupiterSurfacePic}
      />
      <PlanetInformation
        currentView={currentView}
        data={jupiterData}
        planet="jupiter"
      />
      <InformationContainer informations={jupiterData.information} />
    </Layout>
  );
}
