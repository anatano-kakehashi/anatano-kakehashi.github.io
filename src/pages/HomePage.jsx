import React, { useState } from 'react';
import Hero from "newComponents/Home/1_Hero.jsx";
import SkillsGained from 'newComponents/Home/2_SkillsGained';
import AboutMeHero from 'newComponents/Home/3_AboutMe';
import StartJourneyHero from 'newComponents/Home/StartJourney';
import TestimonialComponent from "newComponents/Home/Testimonial.jsx";
import Header from "newComponents/headers/Header.jsx";
import Footer from "newComponents/footer/Footer.jsx";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";

const FrameContainer = tw.div`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50`;
const YoutubeVideoFrame = tw.iframe`w-2/3 h-2/3`;
const CloseButton = tw.button`absolute top-0 right-0 mt-4 mr-4 text-main-white bg-main-blue rounded-full p-4 text-2xl hover:bg-main-lighterBlue`;

export default function HomePage(props) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
    if (!isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const videoUrl = "https://www.youtube.com/embed/fETZIYPfyp4?si=JaZsz9JMZ6Cz8gAi";

  return (
    <AnimationRevealPage>
      <Header language={props.language} />
      <Hero language={props.language} toggleVideo={toggleVideo} />
      {isVideoOpen && (
        <FrameContainer>
          <CloseButton onClick={toggleVideo}>X</CloseButton>
          <YoutubeVideoFrame 
            src={videoUrl} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
          ></YoutubeVideoFrame>
        </FrameContainer>
      )}
      <SkillsGained language={props.language} />
      <AboutMeHero language={props.language} />
      <TestimonialComponent language={props.language} />
      <StartJourneyHero language={props.language} />
      <Footer language={props.language} />
    </AnimationRevealPage>
  );
}
