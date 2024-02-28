import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Links from "./Links";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/singer/*" element={<Links />} />
        <Route path="/" element={<Navigate to="/singer" />} />
      </Routes>
    </Router>
  );
}
