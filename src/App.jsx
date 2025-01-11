import React from "react";
import GlobalStyles from 'assets/styles/GlobalStyles.jsx';
import { css } from "styled-components/macro"; //eslint-disable-line

import HomePage from "pages/HomePage.jsx";
import AboutPage from "pages/AboutPage.jsx";
import WhyLearnPage from "pages/WhyLearnPage.jsx";
import ServicesPage from "pages/ServicesPage";
import FaqPage from "pages/FaqPage.jsx";
import TrialLessonPage from "pages/TrialLessonPage.jsx";
import TestimonialPage from "pages/TestimonialPage.jsx";
import ContactPage from "pages/ContactPage.jsx";

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
          <Route path="/faq" element = {<FaqPage language = "JP"/>} />
          <Route path="/eng/faq" element = {<FaqPage language = "ENG"/>} />
          <Route path="/feedback" element = {<TestimonialPage language = "JP"/>} />
          <Route path="/eng/feedback" element = {<TestimonialPage language = "ENG"/>} />
          <Route path="/trialLesson" element = {<TrialLessonPage language = "JP"/>} />
          <Route path="/eng/trialLesson" element = {<TrialLessonPage language = "ENG"/>} />
          <Route path="/contact" element = {<ContactPage language = "JP"/>} />
          <Route path="/eng/contact" element = {<ContactPage language = "ENG"/>} />
        </Routes>
      </Router>
    </>
  );
}
