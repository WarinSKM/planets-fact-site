import { useState } from "react";
// ===== component =====
import Layout from "../layouts/Layout";
import PlanetsPic from "../components/PlanetsPic";
import InformationContainer from "../container/InformationContainer";
import PlanetInformation from "../components/PlanetInfomation";

// ===== type =====
import type { CurrentPageInformation } from "../models/planet";

// ===== data =====
import { saturnData } from "../data/planetData";

// ===== image =====
import SaturnOverviewPic from "../assets/planet-saturn.svg";
import SaturnInternalPic from "../assets/planet-saturn-internal.svg";
import SaturnSurfacePic from "../assets/geology-saturn.png";

export default function Saturn() {
  const [currentView, setCurrentView] =
    useState<CurrentPageInformation>("overview");

  return (
    <Layout active={currentView} planet="saturn" onChange={setCurrentView}>
      <PlanetsPic
        currentView={currentView}
        overviewPath={SaturnOverviewPic}
        internalPath={SaturnInternalPic}
        surfacePath={SaturnSurfacePic}
      />
      <PlanetInformation
        currentView={currentView}
        data={saturnData}
        planet="saturn"
      />
      <InformationContainer informations={saturnData.information} />
    </Layout>
  );
}
