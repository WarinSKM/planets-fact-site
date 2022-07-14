import React, { ReactNode } from "react";
import backgroundStars from "../assets/background-stars.svg";

import Navbar from "./Navbar";
import DesktopButtons from "../components/DesktopButtons";
import MobileButtons from "../components/MobileButtons";

import type { CurrentPageInformation, Planets } from "../models/planet";

interface LayoutProps {
  children: ReactNode[];
  active: CurrentPageInformation;
  planet: Planets;
  onChange: Function;
}
const Layout: React.FC<LayoutProps> = ({
  children,
  active,
  planet,
  onChange,
}) => {
  return (
    <div className="relative min-h-screen layout-container bg-primary pb-8">
      <Navbar />
      <div className="">
        <MobileButtons active={active} planet={planet} onChange={onChange} />
        <div className="lg:px-40 px-7">
          <div className="grid grid-cols-5 py-14">
            <div className="lg:col-span-3 col-span-5 flex justify-center items-center md:py-24 py-14">
              {children[0]}
            </div>
            <div className="lg:col-span-2 col-span-5 lg:block md:grid md:grid-cols-2">
              <div className="">{children[1]}</div>
              <div className="md:flex md:justify-end lg:block">
                <DesktopButtons
                  active={active}
                  planet={planet}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          {children[2]}
        </div>
      </div>
    </div>
  );
};

export default Layout;
