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

import { useNavigate } from 'react-router-dom';

/* ======== importing some data for text =========== */
import { aboutUs_TeachersHero } from "assets/ak-data/AK_Info.jsx";

const Container = styled(ContainerTemplate)`
  ${tw`lg:py-8 px-8`}
  background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;

const HeroContainer = tw(PaddingContainer)`z-20 relative h-full py-8 lg:py-20`;
const Content = tw.div`flex flex-col justify-center items-center`;

const Heading = tw(MainHeading2Template)`text-left text-main-blue leading-snug`;
const SubHeading = tw(SubMainHeadingTemplate)`text-center text-main-blue leading-snug mt-4 lg:mt-10`;
const Paragraph = tw(MainParagraphTemplate)`italic mt-6 lg:my-8 leading-loose lg:px-16`;

const InternalNavBar = tw.div`flex flex-row items-center justify-center w-full cursor-pointer py-3 lg:py-6`;
const NavLink = tw.a`
  text-sm my-2 lg:text-xl xl:text-2xl mx-2 lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  py-2 lg:py-4 px-4 lg:px-8 border border-black rounded-md
  text-main-blue hover:border-main-lightBlue hocus:text-main-lightBlue
`;

var currInfo = aboutUs_TeachersHero[0];
var currNavPath = "/jp/";
export default function WhatTeachHero(props) {
  if(props.language === "ENG"){
    currInfo = aboutUs_TeachersHero[1];
    currNavPath = "/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <HeroContainer>
        <Content>
          {(!props.removeHeaders) && <Heading>{currInfo.Heading}</Heading>}
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
          <InternalNavBar>
            <NavLink onClick={() => navigate(currNavPath + 'aboutDaiki')}>
              {currInfo.nav[0]}
            </NavLink>
            <NavLink onClick={() => navigate(currNavPath + 'aboutKoki')}>
              {currInfo.nav[1]}
            </NavLink>
          </InternalNavBar>
        </Content>
      </HeroContainer>
    </Container>
  );
};
