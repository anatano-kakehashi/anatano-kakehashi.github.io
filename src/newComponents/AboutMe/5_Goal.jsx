import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
  MainHeading as MainHeadingTemplate,
  MainParagraph as MainParagraphTemplate,
  Container as BaseContainer,
  ContentWithPaddingXl as PaddingContainer
} from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { aboutMe_MyGoalHero } from "assets/ak-data/AK_Info.jsx";

const Container = tw(BaseContainer)`bg-main-white lg:px-0`;
const Row = tw.div`flex flex-col md:flex-row justify-between items-center mx-auto bg-main-white`;

const TextColumn = tw.div`md:w-1/2 bg-main-lightestBlue
px-6 lg:px-8 py-12 lg:py-40`;
const ImageColumn = tw.div`relative my-8 md:mt-0 mx-auto`;

const ImageContainer = tw.div`relative z-40`;

const SubHeading = tw(MainHeadingTemplate)`pt-4 text-left text-main-blue font-bold leading-snug`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-black font-light tracking-wide`;

const Image_Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1491147334573-44cbb4602074?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  ${tw`absolute inset-0 bg-cover bg-center m-auto
  mr-8 mb-8
  md:mr-12 md:mb-12
  lg:mr-16 lg:mb-16
  w-[250px] h-[250px]
  sm:w-[300px] sm:h-[300px]
  md:w-[250px] md:h-[250px]
  lg:w-[300px] lg:h-[300px] 
  xl:w-[350px] xl:h-[350px] 
  2xl:w-[400px] 2xl:h-[400px] 
  rounded`}`;

const Image_Computer = styled.div
  `background-image: url("https://images.unsplash.com/photo-1587614380862-0294308ae58b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  ${tw`bg-cover bg-center object-center m-auto z-30
  ml-8 mt-8
  md:ml-12 md:mt-12
  lg:ml-16 lg:mt-16
  w-[250px] h-[250px]
  sm:w-[300px] sm:h-[300px]
  md:w-[250px] md:h-[250px]
  lg:w-[300px] lg:h-[300px] 
  xl:w-[350px] xl:h-[350px] 
  2xl:w-[400px] 2xl:h-[400px] 
  rounded`}`;

var currInfo = aboutMe_MyGoalHero[0];
export default function MyGoalHero(props) {
  if(props.language === "ENG"){
    currInfo = aboutMe_MyGoalHero[1];
  }

  return (
    <Container>
      <PaddingContainer tw="py-0">
        <Row>
          <ImageColumn>
            <ImageContainer>
              <Image_Computer />
            </ImageContainer>
            <Image_Background />
          </ImageColumn>
          <TextColumn>
            <SubHeading>{currInfo.Heading}</SubHeading>
            <Description>
              {currInfo.Paragraph[0]}
              <span tw="text-main-lightBlue font-bold">
                  {currInfo.Paragraph[1]} 
              </span>
            </Description>
          </TextColumn>
        </Row>
      </PaddingContainer>
    </Container>
  );
};
