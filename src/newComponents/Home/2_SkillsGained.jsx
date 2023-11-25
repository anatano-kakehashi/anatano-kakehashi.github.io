import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading2 as HeadingTitleTemplate, 
    MainParagraph as MainParagraphTemplate,
    Container as ContainerTemplate
  } from "assets/styles/TailwindComponents.jsx";
import NumIcon from "assets/styles/NumIcon.jsx";
/* ======== importing some data for text =========== */
import { home_skills } from "assets/ak-data/AK_Info.jsx";

/* ===== define some twin / tailwind css for components ===== */

const Container = styled(ContainerTemplate)`
    ${tw`px-8`}
    background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;

const Content = styled.div`
    ${tw`max-w-screen-2xl mx-auto py-20 lg:py-24`}
    background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;
const TwoColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`lg:mt-24 py-4 lg:py-0 lg:p-4 lg:w-1/2`;

const HeadingTitle = tw(HeadingTitleTemplate)`font-openSans lg:tracking-[3.6px] text-main-blue font-extrabold`;

const HeadingInfoContainer = tw.div`pb-6 md:pb-0 flex flex-col items-center`;

const Card = tw.div` p-8 lg:mx-4 xl:mx-8 bg-main-white rounded-[1rem] flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-contain bg-center m-auto w-[260px] h-[260px] rounded rounded-b-none`
]);

const Details = tw.div`rounded rounded-t-none flex-1 flex flex-col items-center text-center lg:block lg:text-left`;

const Title = tw.h5`mt-4 leading-snug font-openSans text-main-blue font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center`;
const Description = tw(MainParagraphTemplate)`lg:px-6 pt-2 pb-6 mt-2 font-roboto font-light text-main-black text-left`;

var currInfo = home_skills[0];
export default function skillsGained(props) {
    if(props.language === "ENG"){
        currInfo = home_skills[1];
    }
    return (
        <Container>
            <Content>
                <HeadingInfoContainer>
                    <HeadingTitle>{currInfo.Heading}</HeadingTitle>
                </HeadingInfoContainer>
                <TwoColumn>
                {currInfo.Skills.map((skill, index) => (
                    <Column key={index}>
                        <Card>
                            <NumIcon index={index} />
                            <Image imageSrc={skill.ImageUrl} />
                            <Details>
                                <Title>{skill.Heading}</Title>
                                <Description>{skill.Paragraph}</Description>
                            </Details>
                        </Card>
                    </Column>
                ))}
                </TwoColumn>
            </Content>
        </Container>
    );
};
