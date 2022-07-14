import { Route } from "react-router-dom";

import Mercury from "./pages/mercury";
import Venus from "./pages/venus";
import Earth from "./pages/earth";
import Mars from "./pages/mars";
import Jupiter from "./pages/jupiter";
import Saturn from "./pages/saturn";
import Uranus from "./pages/uranus";
import Neptune from "./pages/neptune";

export const route = [
  <Route path="/" element={<Mercury />} key="/" />,
  <Route path="/mercury" element={<Mercury />} key="/" />,
  <Route path="/venus" element={<Venus />} key="/" />,
  <Route path="/earth" element={<Earth />} key="/" />,
  <Route path="/mars" element={<Mars />} key="/" />,
  <Route path="/jupiter" element={<Jupiter />} key="/" />,
  <Route path="/saturn" element={<Saturn />} key="/" />,
  <Route path="/uranus" element={<Uranus />} key="/" />,
  <Route path="/neptune" element={<Neptune />} key="/" />,
];
