import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainSectionHeading as MainSectionHeadingTemplate,
    MainHeading2 as MainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    Container as ContainerTemplate
  } from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { services_Hero } from "assets/ak-data/AK_Info.jsx";

const BackgroundContainer = styled(ContainerTemplate)`
    ${tw`px-8 bg-no-repeat bg-cover bg-center content-center w-full h-32 md:h-56 lg:h-72 xl:h-96`}
    background-image: url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;
const Container = styled(ContainerTemplate)`
    ${tw`py-8 px-4 lg:p-8`}
    background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;

const HeroContainer = tw.div`z-20 relative sm:py-6 md:py-10 lg:py-20 px-4 sm:px-8 mx-auto h-full flex flex-col`;

const Heading = tw(MainSectionHeadingTemplate)`lg:px-8 absolute -top-[55px] sm:-top-[90px] md:-top-[100px] lg:-top-[112px] xl:-top-[124px] text-left text-main-blue tracking-[8px]`;
const SubHeading = tw(MainHeadingTemplate)`lg:px-8 pt-6 xl:pt-12 relative text-left text-main-blue`;
const Paragraph = tw(MainParagraphTemplate)`lg:px-8 pt-8 pb-12 text-main-black leading-loose`;


var currInfo = services_Hero[0];
export default function WhatCS(props) {
    if(props.language === "ENG"){
        currInfo = services_Hero[1];
    }

    return (
        <>
            <br />
            <BackgroundContainer />
            <br />
            <Container>
                <HeroContainer>
                    <Heading>
                        {currInfo.Heading}
                    </Heading>
                    <br />
                    <SubHeading>
                        <span tw="text-main-yellow">{currInfo.SubHeading1}</span>
                        {currInfo.SubHeading2}
                    </SubHeading>
                    <Paragraph>
                        {currInfo.Paragraph}
                    </Paragraph>
                </HeroContainer>
            </Container>
        </>
    );
};
