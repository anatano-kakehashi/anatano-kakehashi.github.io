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
  } from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { aboutMe_TeachHero } from "assets/ak-data/AK_Info.jsx";

const Container = styled(ContainerTemplate)`
    ${tw`px-8 py-12 sm:py-16 md:py-20`}
    background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;

const HeroContainer = tw.div`z-20 relative sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`md:px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = tw(MainHeading2Template)`text-left text-main-blue leading-snug mt-0`;
const SubHeading = tw(SubMainHeadingTemplate)`text-center text-main-blue leading-snug mt-4 md:mt-10`;
const Paragraph = tw(MainParagraphTemplate)`md:px-8 italic mt-6 lg:my-8 leading-loose md:max-w-2xl lg:max-w-4xl xl:max-w-6xl`;


var currInfo = aboutMe_TeachHero[0];
export default function WhatTeachHero(props) {
    if(props.language === "ENG"){
        currInfo = aboutMe_TeachHero[1];
    }

    return (
        <Container>
            <HeroContainer>
                <Content>
                    <Heading>
                        {currInfo.Heading}
                    </Heading>
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
                        <br />
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
                    <Paragraph>
                        {currInfo.Paragraph}
                    </Paragraph>
                </Content>
            </HeroContainer>
        </Container>
    );
};
