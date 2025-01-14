import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {SectionDescription,
  MainHeading2 as MainHeadingTemplate,
  PrimaryButton as PrimaryButtonBase,
  ContentWithPaddingXl as ContentBase
} from "assets/styles/TailwindComponents.jsx";

import { useNavigate } from 'react-router-dom';

import { startJourneyInfo } from "assets/ak-data/AK_Info";

const PrimaryBackgroundContainer = styled.div`
  ${tw`text-gray-100 bg-no-repeat bg-cover bg-left md:bg-center content-center w-full h-auto lg:h-176 z-10`}
  background-image: url("https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;

const Container = tw(ContentBase)`pt-16 pb-10 lg:py-24`

const Row = tw.div`flex flex-row`;
const TextColumn = tw.div`md:ml-6 lg:ml-16 lg:mt-10 px-8 md:px-0 text-center md:text-left md:w-1/2`;

const Heading = tw(MainHeadingTemplate)`font-openSans lg:text-left leading-tight lg:tracking-[3.6px]`;
const Description = tw(SectionDescription)`tracking-wide font-roboto text-gray-100 font-light text-left
md:mt-4 mx-auto lg:mx-0 lg:max-w-lg`;

const PrimaryButton = tw(PrimaryButtonBase)`font-roboto text-sm sm:text-base cursor-pointer
mt-6 md:mt-8 md:py-4 md:px-6 
bg-main-yellow inline-block hocus:bg-main-backgroundYellow rounded-full`;

var currInfo = startJourneyInfo[0];
var currNavPath = "/jp/";
export default function StartJourneyHero(props) {
  if(props.language === "ENG"){
    currInfo = startJourneyInfo[1];
    currNavPath = "/";
  }
  const navigate = useNavigate();

  return (
    <PrimaryBackgroundContainer>
      <Container>
        <Row>
          <TextColumn>
            <Heading>{currInfo.Heading}</Heading>
            <Description>{currInfo.Description1}</Description>
            <Description tw="text-main-yellow tracking-widest">{currInfo.Description2}</Description>
            <PrimaryButton as="a" onClick={() => navigate(currNavPath + 'trialLesson')}>
              {currInfo.Button}
            </PrimaryButton>
          </TextColumn>
        </Row>
      </Container>
    </PrimaryBackgroundContainer>
  );
};
