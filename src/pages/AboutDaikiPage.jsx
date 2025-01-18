import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import IntroAbout from 'newComponents/AboutDaiki/Hero.jsx';
import JourneyAbout from 'newComponents/AboutDaiki/Journey.jsx';
import OurTeachers from 'newComponents/AboutUs/OurTeachers.jsx';
import StartJourneyHero from 'newComponents/Home/StartJourney.jsx';

import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";

export default function AboutPage(props){
  
  return (
      <AnimationRevealPage>
        <Header language = {props.language} />
        <IntroAbout language = {props.language}/>
        <JourneyAbout language = {props.language}/>
        <OurTeachers removeHeaders = {true} language = {props.language}/>
        <StartJourneyHero language = {props.language} />
        <Footer language = {props.language}/>
      </AnimationRevealPage>
  );
}
