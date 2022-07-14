import { useState } from "react";
// ===== component =====
import Layout from "../layouts/Layout";
import PlanetsPic from "../components/PlanetsPic";
import InformationContainer from "../container/InformationContainer";
import PlanetInformation from "../components/PlanetInfomation";

// ===== type =====
import type { CurrentPageInformation } from "../models/planet";

// ===== data =====
import { venusData } from "../data/planetData";

// ===== image =====
import VenusOverviewPic from "../assets/planet-venus.svg";
import VenusInternalPic from "../assets/planet-venus-internal.svg";
import VenusSurfacePic from "../assets/geology-venus.png";

export default function Venus() {
  const [currentView, setCurrentView] =
    useState<CurrentPageInformation>("overview");

  return (
    <Layout active={currentView} planet="venus" onChange={setCurrentView}>
      <PlanetsPic
        currentView={currentView}
        overviewPath={VenusOverviewPic}
        internalPath={VenusInternalPic}
        surfacePath={VenusSurfacePic}
      />
      <PlanetInformation
        currentView={currentView}
        data={venusData}
        planet="venus"
      />
      <InformationContainer informations={venusData.information} />
    </Layout>
  );
}
