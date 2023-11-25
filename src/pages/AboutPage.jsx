import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import IntroAbout from 'newComponents/AboutMe/1_Hero.jsx';
import JourneyAbout from 'newComponents/AboutMe/2_Journey.jsx';
import WhatTeachHero from 'newComponents/AboutMe/3_WhatTeach.jsx';
import WhyMeHero from 'newComponents/AboutMe/4_WhyMe.jsx';
import MyGoalHero from 'newComponents/AboutMe/5_Goal.jsx';
import StartJourneyHero from 'newComponents/Home/StartJourney.jsx';

import Header from "newComponents/headers/Header.jsx";
import Footer from "newComponents/footer/Footer.jsx";

export default function AboutPage(props){
  
  return (
      <AnimationRevealPage>
        <Header language = {props.language} />
        <IntroAbout language = {props.language}/>
        <JourneyAbout language = {props.language}/>
        <WhatTeachHero language = {props.language}/>
        <WhyMeHero language = {props.language}/>
        <MyGoalHero language = {props.language}/>
        <StartJourneyHero language = {props.language} />
        <Footer language = {props.language}/>
      </AnimationRevealPage>
  );
}
