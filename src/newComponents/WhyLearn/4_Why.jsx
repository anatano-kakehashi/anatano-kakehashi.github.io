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
  } from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { whyCS_WhyDive } from "assets/ak-data/AK_Info.jsx";

const Container = tw(ContainerTemplate)`px-4 pt-32 pb-10 lg:px-8 lg:py-32 bg-no-repeat bg-main-white content-center w-full h-auto`;

const HeroContainer = tw.div`z-20 relative sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = tw(MainHeadingTemplate)`text-center text-main-blue leading-snug -mt-24 sm:mt-0 lg:tracking-[3.6px]`;
const SubHeading = tw(MainHeading2Template)`text-left text-main-lightBlue leading-snug mt-6 lg:mt-10 lg:tracking-[2.6px]`;
const Paragraph = tw(MainParagraphTemplate)`px-4 lg:px-8 my-4 lg:my-8 leading-loose`;


var currInfo = whyCS_WhyDive[0];
export default function WhyDiveHero(props) {
    if(props.language === "ENG"){
        currInfo = whyCS_WhyDive[1];
    }

    return (
        <Container>
            <HeroContainer>
                <Content>
                    <Heading>
                        {currInfo.Heading}
                    </Heading>
                    <SubHeading>
                        {currInfo.SubHeading1}
                        <span tw="text-main-yellow">{currInfo.SubHeading2}</span>
                    </SubHeading>
                    <Paragraph>
                        {currInfo.Paragraph}
                    </Paragraph>
                </Content>
            </HeroContainer>
        </Container>
    );
};
