import { useState } from "react";
// ===== component =====
import Layout from "../layouts/Layout";
import PlanetsPic from "../components/PlanetsPic";
import InformationContainer from "../container/InformationContainer";
import PlanetInformation from "../components/PlanetInfomation";

// ===== type =====
import type { CurrentPageInformation } from "../models/planet";

// ===== data =====
import { marsData } from "../data/planetData";

// ===== image =====
import MarsOverviewPic from "../assets/planet-mars.svg";
import MarsInternalPic from "../assets/planet-mars-internal.svg";
import MarsSurfacePic from "../assets/geology-mars.png";

export default function Mars() {
  const [currentView, setCurrentView] =
    useState<CurrentPageInformation>("overview");

  return (
    <Layout active={currentView} planet="mars" onChange={setCurrentView}>
      <PlanetsPic
        currentView={currentView}
        overviewPath={MarsOverviewPic}
        internalPath={MarsInternalPic}
        surfacePath={MarsSurfacePic}
      />
      <PlanetInformation
        currentView={currentView}
        data={marsData}
        planet="mars"
      />
      <InformationContainer informations={marsData.information} />
    </Layout>
  );
}
