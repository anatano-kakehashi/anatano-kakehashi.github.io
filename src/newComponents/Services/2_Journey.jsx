import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { VerticalTimeline, VerticalTimelineElement }  from 'assets/styles/ReactTimeline/SingleReactTimeline.jsx';
import 'react-vertical-timeline-component/style.min.css';

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    MainHeading2 as MainHeading2Template,
    SubMainHeading as SubMainHeadingTemplate,
    MainParagraph as MainParagraphTemplate

  } from "assets/styles/TailwindComponents.jsx";

import code from "assets/ak-images/services/code.png";
import github from "assets/ak-images/services/github.png";
import python from "assets/ak-images/services/python.png";

/* ======== importing some data for text =========== */
import { services_Roadmap } from "assets/ak-data/AK_Info.jsx";


const Container = tw.div`relative px-4 md:px-8 pt-4 md:pt-24 md:pb-12 bg-main-white`;

// main card elements
const CardTimeHeading = tw(MainParagraphTemplate)`font-roboto font-light text-main-black text-center lg:pb-12`;
const CardMainHeading = tw(MainHeadingTemplate)`font-openSans tracking-[3.6px] font-extrabold text-main-yellow text-center`;
const CardMainParagraph = tw(SubMainHeadingTemplate)`font-openSans font-light italic text-main-lighterBlue text-left py-8 lg:py-12`;

// what teach and why important
const CardSubHeading = tw(MainHeading2Template)`font-roboto font-normal text-main-black text-left`;
const CardParagraph = tw(MainParagraphTemplate)`font-roboto font-light text-main-black text-left pb-8 lg:pb-12`;

// skills container
const SkillsWapper = tw.div`flex flex-col sm:flex-row gap-y-4 md:gap-y-0 gap-x-4 md:gap-x-6 pt-4 md:pt-6`;
const SkillCard = tw.div`sm:basis-1/3 bg-main-lightestBlue px-4 sm:px-8 rounded-3xl flex items-center justify-center md:h-[300px] lg:h-[250px]`;
const SkillCardParagraph = tw(CardParagraph)`text-center self-center min-w-full`;

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center object-center m-auto  
    w-[150px] h-[150px]
    sm:w-[200px] sm:h-[200px]
    md:w-[250px] md:h-[250px]
    lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded`
]);


var currInfo = services_Roadmap[0];
var photos = [python, github, code];
export default function JourneyAbout(props) {
    if(props.language === "ENG"){
        currInfo = services_Roadmap[1];
    }

    return (
        <Container>
            <VerticalTimeline lineColor="lightblue" layout = '1-column'>
                <VerticalTimelineElement
                    contentStyle={{ background: '#FBFBFB', color: '#fff', 'box-shadow': 'none' }}
                    shadowSize = 'large'
                    iconStyle={{ background: '#5B8BCB', color: '#FBFBFB' }}
                    icon={<p>01</p>}
                    tw='pb-4 lg:pb-8 xl:pb-12'
                >
                    <CardMainHeading tw="text-main-lightBlue">
                        {currInfo[0].Heading}
                    </CardMainHeading>
                    <CardTimeHeading>
                        <span tw="font-medium">{currInfo[0].SubHeading1}</span>
                        {currInfo[0].SubHeading2}
                    </CardTimeHeading>
                    <Image imageSrc={photos[0]} /> 

                    <CardMainParagraph>
                        {currInfo[0].Paragraph}
                    </CardMainParagraph>

                    <CardSubHeading tw="text-main-lightBlue">
                        {currInfo[0].WhatTeach}
                    </CardSubHeading>
                    <CardParagraph>
                        {currInfo[0].WhatTeachParagraph}
                    </CardParagraph>

                    <CardSubHeading tw="text-main-yellow">
                        {currInfo[0].WhyImportant}
                    </CardSubHeading>
                    <CardParagraph>
                        {currInfo[0].WhyImportantParagraph}
                    </CardParagraph>

                    <CardSubHeading tw="text-main-blue">
                        {currInfo[0].SkillsObtained}
                    </CardSubHeading>
                    <SkillsWapper>
                        <SkillCard>
                            <SkillCardParagraph>
                                {currInfo[0].Skills[0]}
                            </SkillCardParagraph>
                        </SkillCard>
                        <SkillCard>
                            <SkillCardParagraph>
                                {currInfo[0].Skills[1]}
                            </SkillCardParagraph>
                        </SkillCard>
                        <SkillCard>
                            <SkillCardParagraph>
                                {currInfo[0].Skills[2]}
                            </SkillCardParagraph>
                        </SkillCard>
                    </SkillsWapper>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="yellow" layout = '1-column'>
                <VerticalTimelineElement
                    contentStyle={{ background: '#FBFBFB', color: '#fff', 'box-shadow': 'none' }}
                    shadowSize = 'large'
                    iconStyle={{ background: '#FBA70E', color: '#FBFBFB' }}
                    icon={<p>02</p>}
                    tw='pb-4 lg:pb-8 xl:pb-12'
                >
                    <CardMainHeading tw="text-main-yellow">
                        {currInfo[1].Heading}
                    </CardMainHeading>
                    <CardTimeHeading>
                        <span tw="font-medium">{currInfo[1].SubHeading1}</span>
                        {currInfo[1].SubHeading2}
                    </CardTimeHeading>
                    <Image imageSrc={photos[1]} /> 

                    <CardMainParagraph tw='text-main-yellow'>
                        {currInfo[1].Paragraph}
                    </CardMainParagraph>

                    <CardSubHeading tw="text-main-lightBlue">
                        {currInfo[1].WhatTeach}
                    </CardSubHeading>
                    <CardParagraph>
                        {currInfo[1].WhatTeachParagraph}
                    </CardParagraph>

                    <CardSubHeading tw="text-main-yellow">
                        {currInfo[1].WhyImportant}
                    </CardSubHeading>
                    <CardParagraph>
                        {currInfo[1].WhyImportantParagraph}
                    </CardParagraph>

                    <CardSubHeading tw="text-main-blue">
                        {currInfo[1].SkillsObtained}
                    </CardSubHeading>
                    <SkillsWapper>
                        <SkillCard tw='bg-main-lightestYellow'>
                            <SkillCardParagraph>
                                {currInfo[1].Skills[0]}
                            </SkillCardParagraph>
                        </SkillCard>
                        <SkillCard tw='bg-main-lightestYellow'>
                            <SkillCardParagraph>
                                {currInfo[1].Skills[1]}
                            </SkillCardParagraph>
                        </SkillCard>
                        <SkillCard tw='bg-main-lightestYellow'>
                            <SkillCardParagraph>
                                {currInfo[1].Skills[2]}
                            </SkillCardParagraph>
                        </SkillCard>
                    </SkillsWapper>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline lineColor="blue" layout = '1-column'>
                <VerticalTimelineElement
                    contentStyle={{ background: '#FBFBFB', color: '#fff', 'box-shadow': 'none' }}
                    shadowSize = 'large'
                    iconStyle={{ background: '#002F6D', color: '#FBFBFB' }}
                    icon={<p>03</p>}
                    tw='pb-4 lg:pb-8 xl:pb-12'
                >
                    <CardMainHeading tw="text-main-blue">
                        {currInfo[2].Heading}
                    </CardMainHeading>
                    <CardTimeHeading>
                        <span tw="font-medium">{currInfo[2].SubHeading1}</span>
                        {currInfo[2].SubHeading2}
                    </CardTimeHeading>
                    <Image imageSrc={photos[2]} /> 

                    <CardMainParagraph tw='text-main-blue'>
                        {currInfo[2].Paragraph}
                    </CardMainParagraph>

                    <CardSubHeading tw="text-main-lightBlue">
                        {currInfo[2].WhatTeach}
                    </CardSubHeading>
                    <CardParagraph>
                        {currInfo[2].WhatTeachParagraph}
                    </CardParagraph>

                    <CardSubHeading tw="text-main-yellow">
                        {currInfo[2].WhyImportant}
                    </CardSubHeading>
                    <CardParagraph>
                        {currInfo[2].WhyImportantParagraph}
                    </CardParagraph>

                    <CardSubHeading tw="text-main-blue">
                        {currInfo[2].SkillsObtained}
                    </CardSubHeading>
                    <SkillsWapper tw='flex-row'>
                        <SkillCard tw='basis-1/2 bg-main-backgroundBlue md:h-[140px]'>
                            <SkillCardParagraph tw='text-main-white text-left'>
                                {currInfo[2].Skills[0]}
                            </SkillCardParagraph>
                        </SkillCard>
                        <SkillCard tw='basis-1/2 bg-main-backgroundBlue md:h-[140px]'>
                            <SkillCardParagraph tw='text-main-white text-left'>
                                {currInfo[2].Skills[1]}
                            </SkillCardParagraph>
                        </SkillCard>
                    </SkillsWapper>
                    <SkillsWapper tw='flex-row'>
                        <SkillCard tw='basis-1/2 bg-main-backgroundBlue md:h-[140px]'>
                            <SkillCardParagraph tw='text-main-white text-left'>
                                {currInfo[2].Skills[2]}
                            </SkillCardParagraph>
                        </SkillCard>
                        <SkillCard tw='basis-1/2 bg-main-backgroundBlue md:h-[140px]'>
                            <SkillCardParagraph tw='text-main-white text-left'>
                                {currInfo[2].Skills[3]}
                            </SkillCardParagraph>
                        </SkillCard>
                    </SkillsWapper>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Container>
    );
};
