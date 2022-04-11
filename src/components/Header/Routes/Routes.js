import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "../../Content/Content";

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Content />}>
      <Route path="/:contentPath" element={<Content />} />
    </Route>
  </Routes>
);

export default MyRoutes;
