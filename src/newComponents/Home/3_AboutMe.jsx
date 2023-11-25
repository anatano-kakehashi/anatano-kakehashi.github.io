import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
    MainHeading2 as MainHeadingTemplate,
    SubMainHeading as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    PrimaryButton as PrimaryButtonBase,
    Container as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import { home_aboutMe } from "assets/ak-data/AK_Info";
import background from "assets/ak-images/aboutMe/background.png";
import profile from "assets/ak-images/aboutMe/home_profile.png";

const Container = styled(BaseContainer)`
    ${tw`px-8`}
    background: var(--lighter-blue-NT, linear-gradient(0deg, rgba(0, 47, 109, 0.60) 0%, rgba(0, 47, 109, 0.60) 100%), #D9D9D9);
`;

const VertCont = tw.div`py-12 lg:py-20`

const Row = tw.div`flex flex-col md:flex-row justify-between items-center lg:py-10 max-w-screen-2xl mx-auto md:px-8`;
const Column = tw.div``;

const TextColumn = tw(Column)`pt-12 md:pt-0 
mx-auto lg:mx-6 xl:mx-12 2xl:mx-auto
max-w-md lg:max-w-lg xl:max-w-xl`;
const Heading = tw(MainHeadingTemplate)`text-left text-main-white leading-snug lg:tracking-[3.6px]`;
const SubHeading = tw(SubMainHeadingTemplate)`pt-4 text-left text-main-blue font-semibold leading-snug lg:tracking-[2px]`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-white font-roboto font-light lg:max-w-lg xl:max-w-xl`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block bg-main-blue tracking-wide text-center px-12 py-5 rounded-full hocus:bg-main-lighterBlue`;

const ImageColumn = tw(Column)`relative 
mx-auto lg:mx-6 xl:mx-12 2xl:mx-auto`;
const ImageContainer = tw.div`relative z-40`;

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center object-center m-auto w-[270px] h-[270px] lg:w-[360px] lg:h-[360px] xl:w-[450px] xl:h-[450px] rounded rounded-b-none`
  ]);
const Offsetbackground = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`absolute inset-0 mr-10 bg-cover bg-center m-auto w-[250px] h-[310px] lg:w-[340px] lg:h-[420px] xl:w-[440px] xl:h-[520px] rounded rounded-b-none`
]);

var currInfo = home_aboutMe[0];
var currNavPath = "/";
export default function AboutMeHero(props) {
  if(props.language === "ENG"){
    currInfo = home_aboutMe[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <VertCont>
        <Row>
          <ImageColumn>
            <ImageContainer>
              <Image imageSrc={profile} />
            </ImageContainer>
            <Offsetbackground imageSrc={background}/>
          </ImageColumn>
          <TextColumn>
            <Heading>{currInfo.Heading}</Heading>
            <SubHeading>{currInfo.SubHeading}</SubHeading>
            <Description>{currInfo.Description}</Description>
            <PrimaryButton onClick={() => navigate(currNavPath + "aboutMe")}>
              {currInfo.Button}
            </PrimaryButton>
          </TextColumn>
        </Row>
      </VertCont>
    </Container>
  );
};
