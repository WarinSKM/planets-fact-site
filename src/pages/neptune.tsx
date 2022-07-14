import { useState } from "react";
// ===== component =====
import Layout from "../layouts/Layout";
import PlanetsPic from "../components/PlanetsPic";
import InformationContainer from "../container/InformationContainer";
import PlanetInformation from "../components/PlanetInfomation";

// ===== type =====
import type { CurrentPageInformation } from "../models/planet";

// ===== data =====
import { neptuneData } from "../data/planetData";

// ===== image =====
import NeptuneOverviewPic from "../assets/planet-neptune.svg";
import NeptuneInternalPic from "../assets/planet-neptune-internal.svg";
import NeptuneSurfacePic from "../assets/geology-neptune.png";

export default function Neptune() {
  const [currentView, setCurrentView] =
    useState<CurrentPageInformation>("overview");

  return (
    <Layout active={currentView} planet="neptune" onChange={setCurrentView}>
      <PlanetsPic
        currentView={currentView}
        overviewPath={NeptuneOverviewPic}
        internalPath={NeptuneInternalPic}
        surfacePath={NeptuneSurfacePic}
      />
      <PlanetInformation
        currentView={currentView}
        data={neptuneData}
        planet="neptune"
      />
      <InformationContainer informations={neptuneData.information} />
    </Layout>
  );
}
