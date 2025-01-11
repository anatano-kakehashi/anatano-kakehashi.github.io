import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainSectionHeading as MainSectionHeadingTemplate,
  MainHeading as MainHeadingTemplate,
  MainHeading2 as SubMainHeadingTemplate,
  Container as ContainerTemplate,
  ContentWithPaddingXl as PaddingContainer
} from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { aboutMe_IntroHero } from "assets/ak-data/AK_Info.jsx";
import background from "assets/ak-images/aboutMe/background.png";
import profile from "assets/ak-images/aboutMe/prof.png";


const BackgroundContainer = styled(ContainerTemplate)`
  ${tw`bg-no-repeat bg-cover bg-center content-center w-full h-32 md:h-56 lg:h-72 xl:h-96`}
  background-image: url("https://images.unsplash.com/photo-1457195740896-7f345efef228?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;
const Container = styled(ContainerTemplate)`
  ${tw`py-6 lg:py-8 px-8`}
  background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;

const HeroContainer = tw(PaddingContainer)`py-0 lg:py-20 z-20 relative mx-auto h-full flex flex-col`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center `;

const MainHeading = tw(MainSectionHeadingTemplate)`absolute 
-top-[55px] sm:-top-[90px] md:-top-[100px] lg:-top-[112px] xl:-top-[124px]
text-left text-main-blue tracking-[.25em]`;

const TextColumn = tw.div`py-10 md:py-0 md:pr-4 mr-auto`;

const SubHeading = tw(SubMainHeadingTemplate)`pt-4 text-left text-main-blue font-bold leading-snug`;
const Description = tw(MainHeadingTemplate)`mt-4 text-main-black font-extrabold`;

const ImageColumn = tw.div`relative hidden md:inline`;
const MobileImageColumn = tw.div`relative md:hidden py-10`;
const ImageContainer = tw.div`relative z-40 right-[10px] lg:right-[0px]`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto 
  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded rounded-b-none`
]);

const Offsetbackground = styled.div`
  background-image: url("https://images.unsplash.com/photo-1618339279706-df3b511d7742?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  ${tw`absolute inset-0 bg-cover bg-center m-auto lg:ml-8
  left-[30px] lg:left-[0px]
  w-[250px] h-[310px] lg:w-[380px] lg:h-[460px] xl:w-[500px] xl:h-[600px] rounded rounded-b-none`}
`;

var currInfo = aboutMe_IntroHero[0];
export default function IntroAbout(props) {
  if(props.language === "ENG"){
    currInfo = aboutMe_IntroHero[1];
  }

  return (
    <>
      <BackgroundContainer tw="my-2 lg:my-6" />
      <Container>
        <HeroContainer>
          <MainHeading>{currInfo.Heading}</MainHeading>
          <Row>
            <MobileImageColumn>
              <ImageContainer>
                <Image imageSrc={profile} />
              </ImageContainer>
              <Offsetbackground imageSrc={background}/>
            </MobileImageColumn>
            <TextColumn>
              <SubHeading>{currInfo.SubHeading}</SubHeading>
              <Description>
                { (props.language === "ENG")?
                  <>
                    {currInfo.Paragraph[0]}
                    <span tw="text-main-lightBlue">{currInfo.Paragraph[1]}</span>
                    <br />
                    {currInfo.Paragraph[2]}
                    <span tw="text-main-yellow">
                        {currInfo.Paragraph[3]} 
                    </span>
                  </>
                  : 
                  <>
                    <span tw="text-main-yellow">
                      {currInfo.Paragraph[0]} 
                    </span>
                    <br tw="hidden md:block"/>
                    <span tw="text-main-yellow">
                      {currInfo.Paragraph[1]} 
                    </span>
                    <br tw="block sm:hidden"/>
                    {currInfo.Paragraph[2]}
                    <br tw="block sm:hidden"/>
                    <span tw="text-main-lightBlue">
                      {currInfo.Paragraph[3]} 
                    </span>
                    {currInfo.Paragraph[4]}
                  </>
                }
              </Description>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image imageSrc={profile} />
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </HeroContainer>
      </Container>
    </>
  );
};
