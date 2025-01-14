import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
  MainHeading as MainHeadingTemplate,
  MainParagraph2 as SectionDescriptionBase,
  PrimaryButton as PrimaryButtonBase,
  ContentFormatted as BaseContainer,
  ContentFormatted2, HiddenBr_BreakPoint3
} from "assets/styles/TailwindComponents.jsx";

import { useNavigate } from 'react-router-dom';

import { contactForm } from "assets/ak-data/AK_Info.jsx";

const Container = tw(BaseContainer)`lg:py-12 px-6 lg:px-0`;

const Heading = tw(MainHeadingTemplate)`text-left text-main-blue tracking-widest font-black pl-4 md:pl-8 2xl:pl-0 pt-8 pb-6`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

const InternalNavBar = tw.div`flex flex-col md:flex-row items-center justify-center w-full cursor-pointer py-6 md:my-8`;
const NavLink = tw.a`
  text-lg my-2 lg:text-lg lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  py-4 px-8 border border-black rounded-md
  text-main-blue hover:border-main-lightBlue hocus:text-main-lightBlue
`;

var currInfo = contactForm[0];
var currNavPath = "/jp/";
export default function ContactForm(props) {
  if(props.language === "ENG"){
    currInfo = contactForm[1];
    currNavPath = "/";
  }
  const navigate = useNavigate();

  return (
    <Container>
      <Heading>{currInfo.heading}</Heading>
      <HorizontalLine />
      <HiddenBr_BreakPoint3 />
      <InternalNavBar>
        <NavLink onClick={() => navigate(currNavPath + 'trialLesson')}>
          {currInfo.nav[0]}
        </NavLink>
        <NavLink onClick={() => navigate(currNavPath + 'contact')}>
          {currInfo.nav[1]}
        </NavLink>
      </InternalNavBar>
    </Container>
  );
};
