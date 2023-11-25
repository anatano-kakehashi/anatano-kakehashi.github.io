import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    SubMainHeading as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate,
    Container as BaseContainer
  } from "assets/styles/TailwindComponents.jsx";

import { whyCS_ThreeReasonings } from "assets/ak-data/AK_Info.jsx";

const Container = tw(BaseContainer)`flex flex-col justify-center bg-main-backgroundBlue px-4 py-12 lg:px-8 lg:pt-20 lg:pb-32`;

const MainHeading = tw(MainHeadingTemplate)`text-main-white px-2 py-4 md:p-8 lg:p-12 xl:p-16 relative text-left 4xl:text-center 4xl:mx-auto`;

const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:py-4 mx-auto px-4 sm:px-8`;

// Image and text columns for the row
const TextTemplate = tw.div`max-w-3xl md:max-w-4xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl p-6 lg:p-10`;

const ImageColumn_Right = tw.div`relative 
pt-8 lg:pt-0
lg:left-[25px] xl:left-[35px]`;
const TextColumn_Right = tw(TextTemplate)`relative z-20 bg-main-white
lg:right-[25px] lg:top-[10px]
xl:right-[35px] xl:top-[10px]`;

const ImageColumn_Left = tw.div`relative 
lg:right-[25px] xl:right-[35px]`;
const TextColumn_Left = tw(TextTemplate)`relative z-20 bg-main-white
lg:left-[25px] lg:top-[20px]
xl:left-[35px] xl:top-[20px]`;

const ImageContainer = tw.div`relative z-10`;

// text column related information
const Heading = tw(SubMainHeadingTemplate)`self-center text-left text-main-blue tracking-wide leading-snug`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-black font-roboto font-light leading-relaxed`;


// image column related information 
const Image1SizingTemplate = tw.div`m-auto w-[325px] h-[250px] md:w-[550px] md:h-[400px] lg:w-[400px] lg:h-[600px] xl:w-[500px] xl:h-[700px] `;
const Image1 = styled(Image1SizingTemplate)`
    background-image: url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    ${tw`bg-cover bg-center object-center rounded-t-3xl lg:rounded-none`}
`;
const Offsetbackground1 = tw(Image1SizingTemplate)`absolute inset-0 lg:ml-6 lg:mt-6 xl:ml-8 xl:mt-8 bg-main-blue hidden lg:inline`;

const Image2SizingTemplate = tw.div`m-auto lg:w-[400px] lg:h-[650px] xl:w-[500px] xl:h-[750px] `;
const Image2 = styled(Image2SizingTemplate)`
    background-image: url("https://images.unsplash.com/photo-1533850595620-7b1711221751?q=80&w=1545&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    ${tw`bg-cover bg-center object-center`}
`;
const MobileImageContainer = tw.div`relative z-10 lg:hidden pt-8 lg:pt-0`;
const MobileImage2 = styled.div`
    background-image: url("https://images.unsplash.com/photo-1533850595620-7b1711221751?q=80&w=1545&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    ${tw`bg-cover bg-center object-center m-auto w-[325px] h-[250px] md:w-[550px] md:h-[400px] rounded-t-3xl lg:rounded-none`}
`;
const Offsetbackground2 = tw(Image2SizingTemplate)`absolute inset-0 lg:mr-8 lg:mt-8 xl:mr-8 xl:mt-8 bg-main-yellow hidden lg:inline`;

const Image3SizingTemplate = tw.div`m-auto w-[325px] h-[250px] md:w-[550px] md:h-[400px] lg:w-[400px] lg:h-[460px] xl:w-[500px] xl:h-[580px] `;
const Image3 = styled(Image3SizingTemplate)`
    background-image: url("https://images.unsplash.com/photo-1557424120-32c81c3d50e3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    ${tw`bg-cover bg-center object-center rounded-t-3xl lg:rounded-none`}
`;
const Offsetbackground3 = tw(Image3SizingTemplate)`absolute inset-0 lg:ml-6 lg:mt-6 xl:ml-8 xl:mt-8 bg-main-blue hidden lg:inline`;

const Image4SizingTemplate = tw.div`m-auto lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] `;
const Image4 = styled(Image4SizingTemplate)`
    background-image: url("https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    ${tw`bg-cover bg-center object-center`}
`;
const MobileImage4 = styled.div`
    background-image: url("https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    ${tw`bg-cover bg-center object-center m-auto w-[325px] h-[250px] md:w-[550px] md:h-[400px] rounded-t-3xl lg:rounded-none`}
`;
const Offsetbackground4 = tw(Image4SizingTemplate)`absolute inset-0 lg:ml-6 lg:mt-6 xl:ml-8 xl:mt-8 bg-main-yellow hidden lg:inline`;

var currInfo = whyCS_ThreeReasonings[0];
export default function ReasoningsHero(props) {
    if(props.language === "ENG"){
        currInfo = whyCS_ThreeReasonings[1]
    }
    return (
        <Container>
            <MainHeading>
                {currInfo.Heading}
            </MainHeading>
            <Row>
                <ImageColumn_Right>
                    <ImageContainer>
                        <Image1 />
                    </ImageContainer>
                    <Offsetbackground1 />
                </ImageColumn_Right>
                <TextColumn_Right>
                    <Heading tw="text-main-yellow">{currInfo.SubHeading1}</Heading>
                    <Description>{currInfo.Paragraph1}</Description>
                </TextColumn_Right>
            </Row>
            <Row>
                <MobileImageContainer>
                    <MobileImage2 />
                </MobileImageContainer>
                <TextColumn_Left>
                    <Heading>{currInfo.SubHeading2}</Heading>
                    <Description>{currInfo.Paragraph2}</Description>
                </TextColumn_Left>
                <ImageColumn_Left>
                    <ImageContainer>
                        <Image2 />
                    </ImageContainer>
                    <Offsetbackground2 />
                </ImageColumn_Left>
            </Row>
            <Row>
                <ImageColumn_Right>
                    <ImageContainer>
                        <Image3 />
                    </ImageContainer>
                    <Offsetbackground3 />
                </ImageColumn_Right>
                <TextColumn_Right>
                    <Heading tw="text-main-yellow">{currInfo.SubHeading3}</Heading>
                    <Description>{currInfo.Paragraph3}</Description>
                </TextColumn_Right>
            </Row>
            <Row>
                <MobileImageContainer>
                    <MobileImage4 />
                </MobileImageContainer>
                <TextColumn_Left>
                    <Heading>{currInfo.SubHeading4}</Heading>
                    <Description>{currInfo.Paragraph4}</Description>
                </TextColumn_Left>
                <ImageColumn_Left>
                    <ImageContainer>
                        <Image4 />
                    </ImageContainer>
                    <Offsetbackground4 />
                </ImageColumn_Left>
            </Row>
        </Container>
    );
};
