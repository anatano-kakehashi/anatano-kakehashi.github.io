import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainSectionHeading as MainSectionHeadingTemplate,
  MainHeading as MainHeadingTemplate,
  MainParagraph as MainParagraphTemplate,
  Container as ContainerTemplate,
  ContentWithPaddingXl
} from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { whyCS_WhatIsCS } from "assets/ak-data/AK_Info.jsx";

const BackgroundContainer = styled(ContainerTemplate)`
  ${tw`bg-no-repeat bg-cover bg-center content-center w-full h-32 md:h-56 lg:h-72 xl:h-96`}
  background-image: url("https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;
const Container = styled(ContainerTemplate)`
  ${tw`pt-6 lg:pt-8 px-8`}
  background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;

const HeroContainer = tw(ContentWithPaddingXl)`py-0 lg:py-20 z-20 relative mx-auto h-full flex flex-col`;

const Heading = tw(MainSectionHeadingTemplate)`absolute text-left text-main-blue tracking-[8px] 
-top-[55px] sm:-top-[90px] md:-top-[100px] lg:-top-[112px] xl:-top-[124px]`;
const SubHeading = tw(MainHeadingTemplate)`pt-4 relative text-left text-main-blue`;
const Paragraph = tw(MainParagraphTemplate)`pt-4 pb-12 text-main-black leading-loose`;

var currInfo = whyCS_WhatIsCS[0];
export default function WhatCS(props) {
  if(props.language === "ENG"){
    currInfo = whyCS_WhatIsCS[1];
  }

  return (
    <>
      <BackgroundContainer tw="my-2 lg:my-6" />
      <Container>
        <HeroContainer>
          <Heading>{currInfo.Heading}</Heading>
          <SubHeading>{currInfo.SubHeading}</SubHeading>
          <Paragraph>{currInfo.Paragraph}</Paragraph>
        </HeroContainer>
      </Container>
    </>
  );
};
