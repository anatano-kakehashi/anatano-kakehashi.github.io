import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
  MainHeading as MainHeadingTemplate,
  MainHeading2 as MainHeading2Template,
  MainParagraph as MainParagraphTemplate,
  Container as ContainerTemplate,
  ContentWithPaddingXl
} from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { whyCS_WhyDive } from "assets/ak-data/AK_Info.jsx";

const BackgroundContainer = tw(ContainerTemplate)`bg-main-white content-center`;
const Container = tw(ContentWithPaddingXl)`flex flex-col justify-center items-center`;

const Heading = tw(MainHeadingTemplate)`text-center text-main-blue leading-snug lg:tracking-[3.6px] px-6 lg:px-0`;
const SubHeading = tw(MainHeading2Template)`text-left text-main-lightBlue leading-snug mt-6 lg:mt-10 lg:tracking-[2.6px]`;
const Paragraph = tw(MainParagraphTemplate)`px-6 lg:px-8 my-4 lg:my-8 leading-loose`;


var currInfo = whyCS_WhyDive[0];
export default function WhyDiveHero(props) {
  if(props.language === "ENG"){
    currInfo = whyCS_WhyDive[1];
  }

  return (
    <BackgroundContainer>
      <Container>
        <Heading>{currInfo.Heading}</Heading>
        <SubHeading>
          {currInfo.SubHeading1}
          <span tw="text-main-yellow">{currInfo.SubHeading2}</span>
        </SubHeading>
        <Paragraph>{currInfo.Paragraph}</Paragraph>
      </Container>
    </BackgroundContainer>
  );
};
