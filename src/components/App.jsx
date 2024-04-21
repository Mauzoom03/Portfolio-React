<<<<<<< HEAD
import React from "react";
import Header from "./layouts/Header/Header";
import Main from "./pages/Main/Main";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Project from "./pages/Project/Project";
import Footer from "./layouts/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <AboutMe/>
      <Project />
      <Footer />
=======
import React from 'react'
import DesignsController from './DesignsController/DesignsController'
import Catalogue from './Catalogue/Catalogue'

function App() {
  return (
    <div>
      <Catalogue/>
>>>>>>> 090653e926df2c272e87f81637876a086b27a4f7
    </div>
  );
}

export default App;
