import { useState } from "react";
// ===== component =====
import Layout from "../layouts/Layout";
import PlanetsPic from "../components/PlanetsPic";
import InformationContainer from "../container/InformationContainer";
import PlanetInformation from "../components/PlanetInfomation";

// ===== type =====
import type { CurrentPageInformation } from "../models/planet";

// ===== data =====
import { uranusData } from "../data/planetData";

// ===== image =====
import UranusOverviewPic from "../assets/planet-uranus.svg";
import UranusInternalPic from "../assets/planet-uranus-internal.svg";
import UranusSurfacePic from "../assets/geology-uranus.png";

export default function Uranus() {
  const [currentView, setCurrentView] =
    useState<CurrentPageInformation>("overview");

  return (
    <Layout active={currentView} planet="uranus" onChange={setCurrentView}>
      <PlanetsPic
        currentView={currentView}
        overviewPath={UranusOverviewPic}
        internalPath={UranusInternalPic}
        surfacePath={UranusSurfacePic}
      />
      <PlanetInformation
        currentView={currentView}
        data={uranusData}
        planet="uranus"
      />
      <InformationContainer informations={uranusData.information} />
    </Layout>
  );
}
