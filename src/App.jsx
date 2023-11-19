import React from "react";
import GlobalStyles from 'assets/styles/GlobalStyles.jsx';
import { css } from "styled-components/macro"; //eslint-disable-line

import HomePage from "pages/HomePage.jsx";
import AboutPage from "pages/AboutPage.jsx";
import WhyLearnPage from "pages/WhyLearnPage.jsx";
import ServicesPage from "pages/ServicesPage";
import ScrollToTop from "helpers/scrollToTop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element = {<HomePage language = "JP"/>} />
          <Route exact path="/eng" element = {<HomePage language = "ENG"/>} />
          <Route path="/whyLearn" element = {<WhyLearnPage language = "JP"/>} />
          <Route path="/eng/whyLearn" element = {<WhyLearnPage language = "ENG"/>} />
          <Route path="/aboutMe" element = {<AboutPage language = "JP"/>} />
          <Route path="/eng/aboutMe" element = {<AboutPage language = "ENG"/>} />
          <Route path="/service" element = {<ServicesPage language = "JP"/>} />
          <Route path="/eng/service" element = {<ServicesPage language = "ENG"/>} />
        </Routes>
      </Router>
    </>
    
  );
}
