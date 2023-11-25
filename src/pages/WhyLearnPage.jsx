import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "newComponents/headers/Header.jsx";
import Footer from "newComponents/footer/Footer.jsx";
import WhatCS from 'newComponents/WhyLearn/1_Hero.jsx';
import ImportanceHero from 'newComponents/WhyLearn/2_Importance.jsx';
import ReasoningsHero from 'newComponents/WhyLearn/3_Skills.jsx';
import WhyDiveHero from 'newComponents/WhyLearn/4_Why.jsx';
import StartJourneyHero from 'newComponents/Home/StartJourney.jsx';


export default function AboutPage(props){
  
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      <WhatCS language = {props.language} />
      <ImportanceHero language = {props.language} />
      <ReasoningsHero language = {props.language} />
      <WhyDiveHero language = {props.language} />
      <StartJourneyHero language = {props.language} />
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
