import React, { useState } from "react";
import logo from "./logo.svg";
import { route } from "./router";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return <Routes>{route.map((item: React.ReactElement) => item)}</Routes>;
}

export default App;
