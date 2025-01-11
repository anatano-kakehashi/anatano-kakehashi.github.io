import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";

import Hero from "newComponents/ContactUs/1_Hero.jsx";
import TrialLessonForm from "newComponents/ContactUs/TrialLessonForm.jsx";
import StartJourney from 'newComponents/Home/StartJourney.jsx';

export default function FaqPage(props){
  
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      <Hero language = {props.language} />
      <TrialLessonForm language = {props.language} />
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}