import { Route, Navigate } from "react-router-dom";

import IndexPage from "./pages";

export const route = [
  <Route path="/" element={<Navigate replace to="/mercury" />} key="redirect-route" />,
  <Route path="/:planet" element={<IndexPage />} key="/" />,
];
