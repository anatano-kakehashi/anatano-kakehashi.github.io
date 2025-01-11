import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading as MainHeadingTemplate,
  MainParagraph as MainParagraphTemplate,
  Container as BaseContainer,
  ContentWithPaddingXl
} from "assets/styles/TailwindComponents.jsx";

import { whyCS_WhyImp } from "assets/ak-data/AK_Info.jsx";
import background from "assets/ak-images/aboutMe/background.png";
import profile from "assets/ak-images/aboutMe/home_profile.png";

const Container = styled(BaseContainer)`
  ${tw``}
  background: var(--white, #FBFBFB);
`;

const Row = tw.div`flex flex-col lg:flex-row justify-between items-center mx-auto`;

const TextColumn = tw.div`ml-auto lg:pr-16 pb-8 lg:pb-0`;
const Heading = tw(MainHeadingTemplate)`text-left text-main-blue font-openSans font-extrabold tracking-wider leading-snug`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-black leading-relaxed`;

const ImageColumn = tw.div`mx-auto relative`;
const ImageContainer = tw.div`relative z-40`;

const Image = styled.div`
  background-image: url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  ${tw`bg-cover bg-center object-center m-auto w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded rounded-b-none`}
`;
const Offsetbackground = tw.div`absolute inset-0 ml-6 mt-6 lg:ml-10 lg:mt-10 bg-main-lightBlue w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded rounded-b-none`;

var currInfo = whyCS_WhyImp[0];
export default function ImportanceHero(props) {
  if(props.language === "ENG"){
    currInfo = whyCS_WhyImp[1];
  }
  return (
    <Container>
      <ContentWithPaddingXl tw="px-8 py-12 lg:py-20">
        <Row>
          <TextColumn>
            <Heading>{currInfo.Heading}</Heading>
            <Description>{currInfo.Paragraph}</Description>
          </TextColumn>
          <ImageColumn>
            <ImageContainer><Image imageSrc={profile} /></ImageContainer>
            <Offsetbackground imageSrc={background}/>
          </ImageColumn>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
