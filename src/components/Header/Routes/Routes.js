import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "../../Content/Content";

const MyRoutes = () => (
  <Routes>
    <Route exact path="/kursProject" element={<Content />}>
      <Route path="/kursProject/:contentPath" element={<Content />} />
    </Route>
  </Routes>
);

export default MyRoutes;
