import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading as HeadingTitleTemplate, 
  MainParagraph as MainParagraphTemplate,
  PrimaryButton as PrimaryButtonTemplate,
  Container as ContainerTemplate,
  ContentWithPaddingXl as PaddingContainer
} from "assets/styles/TailwindComponents.jsx";

import { useNavigate } from 'react-router-dom';

/* ======== importing some data for text =========== */
import { home_hero } from "assets/ak-data/AK_Info.jsx";

const Container = styled(ContainerTemplate)`
  ${tw`px-8 bg-no-repeat bg-cover bg-center content-center w-full h-auto h-160 md:h-144 lg:h-176 xl:h-208`}
  background-image: url("https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;

const HeroContainer = tw(PaddingContainer)`z-20 relative mx-auto h-full`;
const Content = tw.div`md:px-4 md:py-8 flex flex-col justify-center items-center`;

const Heading = styled(HeadingTitleTemplate)`
  ${tw`text-center text-main-blue leading-snug mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Paragraph = tw(MainParagraphTemplate)`text-main-black italic leading-loose
md:px-2 lg:px-4 my-4 lg:my-8`;

const PrimaryAction = tw(PrimaryButtonTemplate)`rounded-full md:px-12 md:py-5 
text-main-white font-roboto font-extrabold shadow transition duration-300 
bg-main-blue hocus:bg-main-lighterBlue hocus:text-main-white focus:outline-none focus:shadow-outline cursor-pointer`;

var currInfo = home_hero[0];
export default function Home_Hero(props) {
  if(props.language === "ENG"){
    currInfo = home_hero[1];
  }
  const navigate = useNavigate();

  const trialLessonFormJap = [ 
    <PrimaryAction as="a" onClick={() => navigate('/trialLesson')}>
      {currInfo.PrimaryAction}
    </PrimaryAction>
  ];
  const trialLessonFormEng = [ 
    <PrimaryAction as="a" onClick={() => navigate('/eng/trialLesson')}>
      {currInfo.PrimaryAction}
    </PrimaryAction>
  ];
  
  return (
    <Container tw="md:py-6">
      <HeroContainer>
        <Content>
          <Heading>{currInfo.Heading}</Heading>
          <Paragraph tw="pb-2 md:pb-4">{currInfo.Paragraph}</Paragraph>
          {props.language === "JP" ? trialLessonFormJap : trialLessonFormEng}
        </Content>
      </HeroContainer>
    </Container>
  );
};
