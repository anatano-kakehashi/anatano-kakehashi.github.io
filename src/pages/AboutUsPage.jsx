import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import IntroAbout from 'newComponents/AboutUs/Hero.jsx';
import OurTeachers from 'newComponents/AboutUs/OurTeachers.jsx';
import WhyMeHero from 'newComponents/AboutUs/WhyUs.jsx';
import MyGoalHero from 'newComponents/AboutUs/Goal.jsx';
import StartJourneyHero from 'newComponents/Home/StartJourney.jsx';

import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";

export default function AboutPage(props){
  
  return (
      <AnimationRevealPage>
        <Header language = {props.language} />
        <IntroAbout language = {props.language}/>
        <OurTeachers language = {props.language}/>
        <WhyMeHero language = {props.language}/>
        
        <MyGoalHero language = {props.language}/>
        <StartJourneyHero language = {props.language} />
        <Footer language = {props.language}/>
      </AnimationRevealPage>
  );
}
