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
  Container as BaseContainer,
  ContentWithPaddingXl as PaddingContainer
} from "assets/styles/TailwindComponents.jsx";

import { home_aboutMe } from "assets/ak-data/AK_Info";
import background from "assets/ak-images/aboutMe/background.png";
import profile from "assets/ak-images/aboutMe/home_profile.png";

const Container = styled(BaseContainer)`
  ${tw`px-8`}
  background: var(--lighter-blue-NT, linear-gradient(0deg, rgba(0, 47, 109, 0.60) 0%, rgba(0, 47, 109, 0.60) 100%), #D9D9D9);
`;

const Content = tw(PaddingContainer)`max-w-screen-lg pt-16 pb-10 lg:py-32`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center mx-auto lg:px-8 lg:py-16 bg-main-white rounded-2xl`;
const HeadingRow = tw.div`flex flex-col justify-between items-center lg:pb-16`
const Column = tw.div``;

const TextColumn = tw(Column)`pt-12 md:pt-0 lg:px-12`;
const Heading = tw(MainHeadingTemplate)`text-left text-main-white leading-snug lg:tracking-[3.6px]`;
const SubHeading = tw(SubMainHeadingTemplate)`py-4 text-left text-main-blue font-semibold leading-snug lg:tracking-[2px]`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-black font-roboto font-light`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-4 md:mt-8 inline-block bg-main-blue tracking-wide text-center md:px-8 md:py-4 rounded-full hocus:bg-main-lighterBlue`;

const ImageColumn = tw(Column)`relative mx-auto lg:pl-6`;
const ImageContainer = tw.div`relative z-40`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto w-[270px] h-[270px] lg:w-[360px] lg:h-[360px] rounded rounded-b-none`
]);
const Offsetbackground = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`absolute inset-0 lg:mr-10 bg-cover bg-center m-auto w-[250px] h-[310px] lg:w-[340px] lg:h-[400px] rounded rounded-b-none`
]);

var currInfo = home_aboutMe[0];
var currNavPath = "/jp/";
export default function AboutMeHero(props) {
  if(props.language === "ENG"){
    currInfo = home_aboutMe[1];
    currNavPath = "/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <HeadingRow>
          <Heading>{currInfo.Heading}</Heading>
        </HeadingRow>
        <Row>
          <ImageColumn>
            <ImageContainer>
              <Image imageSrc={profile} />
            </ImageContainer>
            <Offsetbackground imageSrc={background}/>
          </ImageColumn>
          <TextColumn >
            <SubHeading>{currInfo.Teachers[0].Name}</SubHeading>
            <Description>{currInfo.Teachers[0].Blurb}</Description>
            <PrimaryButton onClick={() => navigate(currNavPath + "aboutMe")}>
              {currInfo.Button}
            </PrimaryButton>
          </TextColumn>
        </Row>
        <Row tw="my-24">
          <TextColumn tw="lg:pl-8 lg:pr-12">
            <SubHeading>{currInfo.Teachers[1].Name}</SubHeading>
            <Description>{currInfo.Teachers[1].Blurb}</Description>
            <PrimaryButton onClick={() => navigate(currNavPath + "aboutMe")}>
              {currInfo.Button}
            </PrimaryButton>
          </TextColumn>
          <ImageColumn tw="lg:pl-0 lg:pr-6">
            <ImageContainer>
              <Image imageSrc={profile} />
            </ImageContainer>
            <Offsetbackground tw="lg:ml-10" imageSrc={background}/>
          </ImageColumn>
        </Row>
      </Content>
    </Container>
  );
};
