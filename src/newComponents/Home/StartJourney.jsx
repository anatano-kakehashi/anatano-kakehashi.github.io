import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {SectionDescription,
    MainHeading2 as MainHeadingTemplate,
    PrimaryButton as PrimaryButtonBase,
    Container as ContainerBase, ContentWithVerticalPadding, Content2Xl
  } from "assets/styles/TailwindComponents.jsx";

import { startJourneyInfo } from "assets/ak-data/AK_Info";

const PrimaryBackgroundContainer = styled.div`
    ${tw`text-gray-100 bg-no-repeat bg-cover bg-left md:bg-center content-center w-full h-auto lg:h-176 z-10`}
    background-image: url("https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;

const Container = tw(ContainerBase)``;
const Row = tw.div`flex items-center flex-row`;
const TextColumn = tw.div`md:ml-6 lg:ml-16 lg:mt-10 px-8 md:px-0 text-center md:text-left md:w-1/2`;

const Heading = tw(MainHeadingTemplate)`font-openSans max-w-3xl lg:max-w-4xl lg:text-left leading-tight lg:tracking-[3.6px]`;
const Description = tw(SectionDescription)`tracking-wide font-roboto mt-4 max-w-lg text-gray-100 mx-auto lg:mx-0 font-light text-left`;

const PrimaryButton = tw(PrimaryButtonBase)`font-roboto mt-8 text-sm sm:text-base py-4 px-6 bg-main-yellow inline-block hocus:bg-main-lightestYellow rounded-full`;

var currInfo = startJourneyInfo[0];
export default function StartJourneyHero(props) {
    if(props.language === "ENG"){
        currInfo = startJourneyInfo[1];
    }
    return (
        <PrimaryBackgroundContainer>
            <Content2Xl>
                <Container>
                    <ContentWithVerticalPadding>
                        <Row>
                            <TextColumn>
                                <Heading>{currInfo.Heading}</Heading>
                                <Description>{currInfo.Description1}</Description>
                                <Description tw="text-main-yellow tracking-widest">{currInfo.Description2}</Description>
                                <PrimaryButton as="a" href={'mailto:anatano.koki@gmail.com'}>{currInfo.Button}</PrimaryButton>
                            </TextColumn>
                        </Row>
                    </ContentWithVerticalPadding>
                </Container>
            </Content2Xl>
        </PrimaryBackgroundContainer>
    );
};
