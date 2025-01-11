import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
  MainHeading2 as MainHeading2Template,
  SubMainHeading as SubMainHeadingTemplate,
  MainParagraph as MainParagraphTemplate,
  Container as ContainerTemplate,
  ContentWithPaddingXl as PaddingContainer
} from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { aboutMe_TeachHero } from "assets/ak-data/AK_Info.jsx";

const Container = styled(ContainerTemplate)`
  ${tw`lg:py-8 px-8`}
  background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;

const HeroContainer = tw(PaddingContainer)`z-20 relative h-full py-12 lg:py-20`;
const Content = tw.div`flex flex-col justify-center items-center`;

const Heading = tw(MainHeading2Template)`text-left text-main-blue leading-snug`;
const SubHeading = tw(SubMainHeadingTemplate)`text-center text-main-blue leading-snug mt-4 lg:mt-10`;
const Paragraph = tw(MainParagraphTemplate)`italic mt-6 lg:my-8 leading-loose lg:px-16`;

var currInfo = aboutMe_TeachHero[0];
export default function WhatTeachHero(props) {
  if(props.language === "ENG"){
    currInfo = aboutMe_TeachHero[1];
  }

  return (
    <Container>
      <HeroContainer>
        <Content>
          <Heading>{currInfo.Heading}</Heading>
          {(props.language === "ENG")?
            <SubHeading>
                {currInfo.SubHeading[0]}
                <br />
                {currInfo.SubHeading[1]}
                <br tw="sm:hidden"/>
                <span tw="text-main-lightBlue">
                    {currInfo.SubHeading[2]}
                </span>
                {currInfo.SubHeading[3]}
                <span tw="text-main-yellow">
                    {currInfo.SubHeading[4]}
                </span>
            </SubHeading>
            :
            <SubHeading>
              {currInfo.SubHeading[0]}
              <br tw="sm:hidden"/>
              {currInfo.SubHeading[1]}
              <span tw="text-main-lightBlue">
                {currInfo.SubHeading[2]}
              </span>
              {currInfo.SubHeading[3]}
              <span tw="text-main-yellow">
                {currInfo.SubHeading[4]}
              </span>
              <br tw="sm:hidden"/>
              {currInfo.SubHeading[5]}
            </SubHeading>
          }
          <Paragraph>{currInfo.Paragraph}</Paragraph>
        </Content>
      </HeroContainer>
    </Container>
  );
};
