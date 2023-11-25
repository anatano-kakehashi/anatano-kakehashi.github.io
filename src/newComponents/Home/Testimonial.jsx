import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading2 as HeadingTitleTemplate,
    LargerMainParagraph as LargerMainParagraphTemplate
} from "assets/styles/TailwindComponents.jsx";

import { testimonials } from "assets/ak-data/AK_Info";

import { ReactComponent as QuotesLeftIcon } from "assets/treact-images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "assets/treact-images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "assets/treact-images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "assets/treact-images/arrow-right-2-icon.svg";
import { ReactComponent as StarIconBase } from "assets/treact-images/star-icon.svg";

import guy_test1 from "assets/ak-images/testimonials/guy_test1.png";
import girl_test1 from "assets/ak-images/testimonials/girl_test1.png";
import girl_test2 from "assets/ak-images/testimonials/girl_test2.png";
import girl_test3 from "assets/ak-images/testimonials/girl_test3.png";


import "slick-carousel/slick/slick.css";

const Container = tw.div`relative bg-main-lightestBlue`;
const Content = tw.div`lg:max-w-screen-xl mx-auto py-16 md:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const HeadingTitle = tw(HeadingTitleTemplate)`font-openSans lg:tracking-[3.6px] text-main-blue font-extrabold`;

const TestimonialSliderContainer = tw.div`mt-6 md:mt-16 md:px-4`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div`flex! flex-row items-stretch justify-center outline-none`;
const SpaceContainer = styled.div`w-1/12`;
const ImageContainer = styled.div`
  ${tw`
  w-3/12 
  rounded-l-3xl flex flex-col gap-y-4 
  py-6 md:py-8 lg:py-12
  items-center max-w-xs md:max-w-none bg-main-lightBlue`}
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
w-7/12 rounded-r-3xl 
py-6 md:py-8 lg:py-12 flex flex-col flex items-center justify-center bg-main-white`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw(LargerMainParagraphTemplate)`py-4 text-left font-medium`;

const CustomerInfo = tw.div`px-2 sm:px-5 lg:px-8 text-left mt-4 md:mt-0 w-full`;
const CustomerTitle = tw(LargerMainParagraphTemplate)`font-thin text-main-white`;

const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 ml-4 text-main-lightBlue absolute top-0 left-0`;
const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 mr-4 text-main-lightBlue absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`rounded-full bg-main-blue text-main-white hover:text-main-lightBlue focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-[225px] sm:-translate-y-[150px] md:translate-y-0 p-1 md:p-2`}
    svg {
      ${tw`w-6 md:w-8`}
    }
  }
`;

const StarsContainer = styled.div``;
const StarIcon = tw(StarIconBase)`inline-block w-3 h-3 md:w-5 md:h-5 text-orange-400 fill-current mr-1 last:mr-0`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

var heading = "寄せられた生徒、保護者の感想";
var currInfo = testimonials[0];
var photos = [guy_test1, girl_test1, girl_test2, girl_test3];
export default function TestimonialComponent(props) {
    if(props.language === "ENG"){
        currInfo = testimonials[1];
        heading = "Testimonials";
    }
  
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {currInfo.map((testimonial, index) => (
              <Testimonial key={index}>
                <SpaceContainer></SpaceContainer>
                <ImageContainer>
                  <img src={photos[index]} />
                  <StarsContainer>
                    {Array.from({ length: testimonial.stars }).map((_,indexIcon) => (
                      <StarIcon key={indexIcon} />
                    ))}
                  </StarsContainer>
                  <CustomerInfo>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                  </CustomerInfo>
                </ImageContainer>
                <TextContainer>
                  <QuoteContainer>
                    <QuotesLeft />
                    <Quote>{testimonial.quote}</Quote>
                    <QuotesRight />
                  </QuoteContainer>
                </TextContainer>
                <SpaceContainer></SpaceContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
    </Container>
  );
};
