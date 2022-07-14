import { useState } from "react";
// ===== component =====
import Layout from "../layouts/Layout";
import PlanetsPic from "../components/PlanetsPic";
import InformationContainer from "../container/InformationContainer";
import PlanetInformation from "../components/PlanetInfomation";

// ===== type =====
import type { CurrentPageInformation } from "../models/planet";

// ===== data =====
import { earthData } from "../data/planetData";

// ===== image =====
import EarthOverviewPic from "../assets/planet-earth.svg";
import EarthInternalPic from "../assets/planet-earth-internal.svg";
import EarthSurfacePic from "../assets/geology-earth.png";

export default function Earth() {
  const [currentView, setCurrentView] =
    useState<CurrentPageInformation>("overview");

  return (
    <Layout active={currentView} planet="earth" onChange={setCurrentView}>
      <PlanetsPic
        currentView={currentView}
        overviewPath={EarthOverviewPic}
        internalPath={EarthInternalPic}
        surfacePath={EarthSurfacePic}
      />
      <PlanetInformation
        currentView={currentView}
        data={earthData}
        planet="earth"
      />
      <InformationContainer informations={earthData.information} />
    </Layout>
  );
}
