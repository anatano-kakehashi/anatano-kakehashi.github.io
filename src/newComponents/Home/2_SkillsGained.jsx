import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading2 as HeadingTitleTemplate, 
  MainParagraph as MainParagraphTemplate,
  LargerMainParagraph as LargerMainParagraphTemplate,
  Container as ContainerTemplate,
  ContentWithPaddingXl as PaddingContainer
} from "assets/styles/TailwindComponents.jsx";
import NumIcon from "assets/styles/NumIcon.jsx";
/* ======== importing some data for text =========== */
import { home_skills } from "assets/ak-data/AK_Info.jsx";

/* ===== define some twin / tailwind css for components ===== */

const Container = styled(ContainerTemplate)`
  ${tw`px-8`}
  background: var(--lightest-blue-NT, linear-gradient(0deg, rgba(91, 139, 203, 0.15) 0%, rgba(91, 139, 203, 0.15) 100%), #FBFBFB);
`;

const Content = tw(PaddingContainer)`max-w-screen-2xl`;

const TwoColumn = tw.div`flex flex-col lg:flex-row flex-wrap items-center lg:items-stretch`;
const Column = tw.div`mt-6 lg:mt-16 lg:p-4 lg:w-1/2`;

const HeadingTitle = tw(HeadingTitleTemplate)`font-openSans lg:tracking-[3.6px] text-main-blue font-extrabold`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Card = tw.div`p-4 lg:p-8 lg:mx-4 xl:mx-8 
bg-main-white rounded-2xl flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-contain bg-center m-auto rounded rounded-b-none
  w-[220px] h-[220px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]`
]);

const Details = tw.div`rounded rounded-t-none 
flex flex-col items-center text-center`;

const Title = tw(LargerMainParagraphTemplate)`lg:mt-4 leading-snug font-openSans text-main-blue font-semibold text-center`;
const Description = tw(MainParagraphTemplate)`lg:px-6 py-2 lg:pb-6 lg:mt-2 font-roboto font-light text-main-black text-left`;

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
