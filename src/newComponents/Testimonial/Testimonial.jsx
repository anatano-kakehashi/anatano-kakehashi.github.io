import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {
  MainHeading as MainHeadingTemplate,
  LargerMainParagraph as LargerMainParagraphTemplate,
  MainParagraph as MainParagraphTemplate,
  PrimaryButton as PrimaryButtonBase,
  SectionDescription as SectionDescriptionBase,
  Container as BaseContainer,
  ContentFormatted, ContentFormatted2,
  HiddenBr_BreakPoint3
} from "assets/styles/TailwindComponents.jsx";

import { new_testimonials } from "assets/ak-data/AK_Info.jsx";
import feedbackBlue from "assets/ak-images/testimonials/FeedbackIconBlue.svg";

import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-right-circle.svg";
import { ReactComponent as QuotesLeftIcon } from "assets/treact-images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "assets/treact-images/quotes-r.svg";
import { ReactComponent as StarIconBase } from "assets/treact-images/star-icon.svg";

const Container = tw(BaseContainer)`bg-main-lightestBlue py-20 lg:px-32`;

const Row = tw(ContentFormatted2)`flex flex-col md:flex-row justify-between items-center mb-12 md:mb-0 w-5/6 md:w-11/12 lg:w-full
py-6 lg:py-4 lg:my-12 mx-auto shadow-lg rounded-3xl bg-main-white`;

const Heading = tw(MainHeadingTemplate)`text-center text-main-blue tracking-widest py-10`;
const ButtonRow = tw.div`flex justify-center items-center lg:my-12 mx-auto`;
const PrimaryButton = tw(PrimaryButtonBase)`px-8 w-auto md:mt-8 tracking-wide text-center rounded-md bg-main-blue hocus:bg-main-lighterBlue`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto w-32 h-32`
]);

const PageContainer = tw.div`lg:mt-12 lg:py-8 bg-main-lightestBlue`;
const MainHeading = tw(MainHeadingTemplate)`text-left text-main-blue tracking-widest font-black pl-4 md:pl-8 2xl:pl-0 pt-8 pb-6`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

const ImageContainer = styled.div`
  ${tw`
  md:w-1/5
  rounded-l-3xl flex flex-col
  items-center justify-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded-full bg-main-white
    w-[75px] h-[75px]
    sm:w-[100px] sm:h-[100px]
    md:w-[150px] md:h-[150px]
    lg:w-[200px] lg:h-[200px]
    xl:w-[250px] xl:h-[250px]`}
  }
`;
const TextContainer = tw.div`
w-11/12 md:w-4/5 rounded-r-3xl md:py-8 lg:py-16
flex flex-col flex items-center justify-center bg-main-white`;
const QuoteContainer = tw.div`relative p-4 md:p-8`;
const Quote = tw(LargerMainParagraphTemplate)`md:py-4 text-left font-medium`;
const QuotesLeft = tw(QuotesLeftIcon)`w-4 h-4 lg:w-8 lg:h-8 ml-1 lg:ml-4 text-main-lightBlue absolute top-0 left-0`;
const QuotesRight = tw(QuotesRightIcon)`w-4 h-4 lg:w-8 lg:h-8 mr-1 lg:mr-4 text-main-lightBlue absolute bottom-0 right-0`;

const StarsContainer = styled.div``;
const StarIcon = tw(StarIconBase)`inline-block w-4 h-4 md:w-6 md:h-6 text-orange-400 fill-current mr-1 last:mr-0`;

var currInfo = new_testimonials[0];
var currNavPath = "/";
export default function TestimonialComponent(props) {
  if(props.language === "ENG"){
    currInfo = new_testimonials[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <>
      {props.isHome
      ?
      <Container>
        <Heading>{currInfo.heading}</Heading>
        <Row >
          <ImageContainer>
            <Image imageSrc={feedbackBlue} />
            <StarsContainer>
              {Array.from({ length: currInfo.reviews[0].stars }).map((_,indexIcon) => (
                <StarIcon key={indexIcon} />
              ))}
            </StarsContainer>
          </ImageContainer>
          <TextContainer >
            <QuoteContainer>
              <QuotesLeft />
              <Quote>{currInfo.reviews[0].quote}</Quote>
              <QuotesRight />
            </QuoteContainer>
          </TextContainer>
        </Row>
        <Row >
          <ImageContainer>
            <Image imageSrc={feedbackBlue} />
            <StarsContainer>
              {Array.from({ length: currInfo.reviews[1].stars }).map((_,indexIcon) => (
                <StarIcon key={indexIcon} />
              ))}
            </StarsContainer>
          </ImageContainer>
          <TextContainer >
            <QuoteContainer>
              <QuotesLeft />
              <Quote>{currInfo.reviews[1].quote}</Quote>
              <QuotesRight />
            </QuoteContainer>
          </TextContainer>
        </Row>
        <Row >
          <ImageContainer>
            <Image imageSrc={feedbackBlue} />
            <StarsContainer>
              {Array.from({ length: currInfo.reviews[2].stars }).map((_,indexIcon) => (
                <StarIcon key={indexIcon} />
              ))}
            </StarsContainer>
          </ImageContainer>
          <TextContainer >
            <QuoteContainer>
              <QuotesLeft />
              <Quote>{currInfo.reviews[2].quote}</Quote>
              <QuotesRight />
            </QuoteContainer>
          </TextContainer>
        </Row>
        <Row >
          <ImageContainer>
            <Image imageSrc={feedbackBlue} />
            <StarsContainer>
              {Array.from({ length: currInfo.reviews[3].stars }).map((_,indexIcon) => (
                <StarIcon key={indexIcon} />
              ))}
            </StarsContainer>
          </ImageContainer>
          <TextContainer >
            <QuoteContainer>
              <QuotesLeft />
              <Quote>{currInfo.reviews[3].quote}</Quote>
              <QuotesRight />
            </QuoteContainer>
          </TextContainer>
        </Row>
        <ButtonRow>
          <PrimaryButton onClick={() => navigate(currNavPath + "feedback")}>
            {currInfo.learnMore}
            <ArrowIcon tw="w-6 h-6 inline ml-4" />
          </PrimaryButton>
        </ButtonRow>
      </Container>
      :
      <PageContainer>
        <ContentFormatted>
          <MainHeading>{currInfo.heading}</MainHeading>
          <HorizontalLine />
          <HiddenBr_BreakPoint3 />
          {currInfo.reviews.map((review, index) => (
            <Row key={index}>
              <ImageContainer>
                <Image imageSrc={feedbackBlue} />
                <StarsContainer>
                  {Array.from({ length: review.stars }).map((_,indexIcon) => (
                    <StarIcon key={indexIcon} />
                  ))}
                </StarsContainer>
              </ImageContainer>
              <TextContainer >
                <QuoteContainer>
                  <QuotesLeft />
                  <Quote>{review.quote}</Quote>
                  <QuotesRight />
                </QuoteContainer>
              </TextContainer>
            </Row>
          ))}
        </ContentFormatted>
      </PageContainer>
      }
    </>
  );
};