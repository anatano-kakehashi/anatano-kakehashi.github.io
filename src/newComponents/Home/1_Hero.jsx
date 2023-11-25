import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading as HeadingTitleTemplate, 
    MainParagraph as MainParagraphTemplate,
    PrimaryButton as PrimaryButtonTemplate,
    Container as ContainerTemplate
  } from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { home_hero } from "assets/ak-data/AK_Info.jsx";

const Container = styled(ContainerTemplate)`
    ${tw`px-8 bg-no-repeat bg-cover bg-center content-center w-full h-auto h-160 md:h-144 lg:h-176 xl:h-208`}
    background-image: url("https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;

const HeroContainer = tw.div`z-20 relative py-6 lg:py-0 px-2 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`md:px-4 py-8 flex flex-1 flex-col justify-center items-center`;

const Heading = styled(HeadingTitleTemplate)`
  ${tw`text-center text-main-blue leading-snug mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Paragraph = tw(MainParagraphTemplate)`text-main-black xl:max-w-7xl md:px-2 lg:px-4 italic my-8 lg:my-8 leading-loose`;

const PrimaryAction = tw(PrimaryButtonTemplate)`rounded-full px-12 py-5 
text-main-white font-roboto font-extrabold shadow transition duration-300 bg-main-blue 
hocus:bg-main-lighterBlue hocus:text-main-white focus:outline-none focus:shadow-outline`;

var currInfo = home_hero[0];
export default function Home_Hero(props) {
    if(props.language === "ENG"){
        currInfo = home_hero[1];
    }

    return (
        <>
            <br />
            <Container>
                <HeroContainer>
                    <Content>
                        <Heading>
                            {currInfo.Heading}
                        </Heading>
                        <Paragraph>
                            {currInfo.Paragraph}
                        </Paragraph>
                        <br />
                        <PrimaryAction as="a" href={'mailto:anatano.koki@gmail.com'}>
                            {currInfo.PrimaryAction}
                        </PrimaryAction>
                    </Content>
                </HeroContainer>
            </Container>
        </>
    );
};
