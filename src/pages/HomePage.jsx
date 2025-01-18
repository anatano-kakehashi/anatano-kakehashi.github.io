import React from 'react';

import Hero from "newComponents/Home/1_Hero.jsx";
import SkillsGained from 'newComponents/Home/2_SkillsGained.jsx';
import AboutMeHero from 'newComponents/Home/3_AboutMe.jsx';
import AboutUsComponent from 'newComponents/Home/AboutUsComponent.jsx';

import StartJourneyHero from 'newComponents/Home/StartJourney';
// import TestimonialComponent from "newComponents/Home/Testimonial.jsx";
import NewTestimonialComponent from "newComponents/Testimonial/Testimonial.jsx";

import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

export default function HomePage(props){
  return (
      <AnimationRevealPage>
        <Header language = {props.language} />
        <Hero language = {props.language}/>
        <SkillsGained language = {props.language}/>
        {/* <AboutMeHero language = {props.language}/> */}
        <AboutUsComponent language = {props.language}/>
        {/* <TestimonialComponent language = {props.language}/> */}
        <NewTestimonialComponent language = {props.language} isHome={true} />
        <StartJourneyHero language = {props.language}/>
        <Footer language = {props.language}/>
      </AnimationRevealPage>
    
  );
}
