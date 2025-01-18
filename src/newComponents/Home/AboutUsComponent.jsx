import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
  MainHeading2 as MainHeadingTemplate,
  MainParagraph as MainParagraphTemplate,
  PrimaryButton as PrimaryButtonBase,
  Container as BaseContainer,
  ContentWithPaddingXl as PaddingContainer
} from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { new_home_aboutMe } from "assets/ak-data/AK_Info.jsx";

import profile from "assets/ak-images/aboutMe/aboutUs.png";

const Container = styled(BaseContainer)`
${tw`bg-main-white lg:px-0`}
background: var(--lighter-blue-NT, linear-gradient(0deg, rgba(0, 47, 109, 0.60) 0%, rgba(0, 47, 109, 0.60) 100%), #D9D9D9)`;
const Row = tw.div`flex flex-col md:flex-row justify-between items-center mx-auto`;

const TextColumn = styled.div` ${tw`
px-6 lg:px-8 py-12 lg:py-40 lg:ml-8`}`;
const ImageColumn = tw.div`relative mt-16 lg:my-8 md:ml-12 md:mt-0 mx-auto`;

const ImageContainer = tw.div`relative z-40`;

const SubHeading = tw(MainHeadingTemplate)`pt-4 text-left text-main-white font-bold leading-snug`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-white font-light tracking-wide lg:pr-12`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-4 md:mt-8 inline-block bg-main-blue tracking-wide text-center md:px-8 md:py-4 rounded-full hocus:bg-main-lighterBlue`;

const Image_Background = styled.div`background-image: url("https://images.unsplash.com/photo-1618339279706-df3b511d7742?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  ${tw`absolute inset-0 bg-cover bg-center m-auto mr-6 lg:mr-8
  w-[250px] h-[300px] lg:w-[400px] lg:h-[480px]
  rounded`}`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto z-30
  w-[250px] h-[250px]
  lg:w-[400px] lg:h-[400px] 
  rounded`]);

var currInfo = new_home_aboutMe[0];
var currNavPath = "/jp/";
export default function MyGoalHero(props) {
  if(props.language === "ENG"){
    currInfo = new_home_aboutMe[1];
    currNavPath = "/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <PaddingContainer tw="py-0">
        <Row>
          <ImageColumn>
            <ImageContainer>
              <Image imageSrc={profile} />
            </ImageContainer>
            <Image_Background />
          </ImageColumn>
          <TextColumn>
            <SubHeading>{currInfo.SubHeading}</SubHeading>
            <Description>
              {currInfo.Description}
            </Description>
            <PrimaryButton onClick={() => navigate(currNavPath + "aboutUs")}>
              {currInfo.Button}
            </PrimaryButton>
          </TextColumn>
        </Row>
      </PaddingContainer>
    </Container>
  );
};
