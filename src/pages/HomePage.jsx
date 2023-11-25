import React from 'react';

import Hero from "newComponents/Home/1_Hero.jsx";
import SkillsGained from 'newComponents/Home/2_SkillsGained';
import AboutMeHero from 'newComponents/Home/3_AboutMe';
import StartJourneyHero from 'newComponents/Home/StartJourney';
import TestimonialComponent from "newComponents/Home/Testimonial.jsx";
import Header from "newComponents/headers/Header.jsx";
import Footer from "newComponents/footer/Footer.jsx";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";


export default function HomePage(props){
  
  return (
      <AnimationRevealPage>
        <Header language = {props.language} />
        <Hero language = {props.language}/>
        <SkillsGained language = {props.language}/>
        <AboutMeHero language = {props.language}/>
        <TestimonialComponent language = {props.language}/>
        <StartJourneyHero language = {props.language}/>
        <Footer language = {props.language}/>
      </AnimationRevealPage>
    
  );
}
