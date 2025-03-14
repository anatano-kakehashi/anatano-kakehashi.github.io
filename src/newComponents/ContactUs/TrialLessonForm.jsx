import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
  MainHeading as MainHeadingTemplate,
  MainParagraph2 as SectionDescriptionBase,
  PrimaryButton as PrimaryButtonBase,
  ContentFormatted as BaseContainer,
  ContentFormatted2, HiddenBr_BreakPoint3
} from "assets/styles/TailwindComponents.jsx";

import { trialLessonForm } from "assets/ak-data/AK_Info.jsx";

const Container = tw(BaseContainer)`py-0 px-6 lg:px-0`;

const Row = tw(ContentFormatted2)`flex flex-col bg-main-lightestBlue 
justify-between items-center 
my-6 lg:my-12 py-6 mx-auto rounded-3xl`;

const Form = tw.form`flex flex-col w-11/12 lg:w-4/5 py-6 lg:py-12 text-sm md:text-base lg:text-lg xl:text-xl`;
const Label = tw.label`font-semibold mt-8 mb-3 first:mt-0 pr-4 lg:pr-0`;
const RedLabel = tw.span`bg-main-red text-main-white font-semibold p-1 lg:p-2 mr-1 lg:mr-4 rounded-lg`;
const Input = tw.input` 
border-b-2 p-4 px-6
font-medium
focus:outline-none transition duration-300 hocus:border-main-lighterBlue`;
const DropDown = tw.select`text-sm md:text-base lg:text-lg xl:text-xl p-4`;
const Options = tw.option`text-sm md:text-base lg:text-lg xl:text-xl`;
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-40`}
`;

const SectionDesc = tw(SectionDescriptionBase)`text-left text-main-black font-normal lg:px-6`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8 bg-main-blue hocus:bg-main-lighterBlue`;

var currInfo = trialLessonForm[0];
export default function ContactForm(props) {
  if(props.language === "ENG"){
    currInfo = trialLessonForm[1];
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [heard, setHeard] = useState(currInfo.entryForms[2].options[0]);
  const [lessonStructure, setLessonStructure] = useState(currInfo.entryForms[3].options[0]);
  const [gradeLevel, setGradeLevel] = useState(currInfo.entryForms[4].options[0]);
  const [experience, setExperience] = useState('');
  const [reason, setReason] = useState('');
  const [question, setQuestion] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    formData.append('entry.1487186729', name); 
    formData.append('entry.1449548638', email); 
    formData.append('entry.1148002302', heard); 
    formData.append('entry.519991170', lessonStructure); 
    formData.append('entry.706252611', gradeLevel); 
    formData.append('entry.1658336433', experience); 
    formData.append('entry.1445632879', reason); 
    formData.append('entry.1045897173', question);  

    try {
      await fetch('https://docs.google.com/forms/u/2/d/e/1FAIpQLSf8Kr-CDFNGPtS3AGsXDjOFj3jyKFnxTu7T6DT4fHKY-5gAGg/formResponse', {
        method: 'POST',
        mode: 'no-cors', // Use no-cors mode to avoid CORS issues
        body: formData,
      });
      setResponseMessage(currInfo.successResponse);
      setName('');
      setEmail('');
      setHeard('');
      setLessonStructure('');
      setGradeLevel('');
      setExperience('');
      setReason('');
      setQuestion('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage(currInfo.errorResponse);
    }
  };

  return (
    <Container>
      <SectionDesc>{currInfo.description}</SectionDesc>
      <Row>
        <SectionDesc tw="text-main-blue font-bold">{currInfo.subHeading}</SectionDesc>
        <Form onSubmit={handleSubmit}>
          <Label for="name">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[0].entry}
          </Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={currInfo.entryForms[0].example} required />

          <Label for="email">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[1].entry}
          </Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={currInfo.entryForms[1].example} required/>

          <Label for="heard">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[2].entry}
          </Label>
          <DropDown id="heard" value={heard} onChange={(e) => setHeard(e.target.value)}>
            <Options value={currInfo.entryForms[2].options[0]}>{currInfo.entryForms[2].options[0]}</Options>
            <Options value={currInfo.entryForms[2].options[1]}>{currInfo.entryForms[2].options[1]}</Options>
            <Options value={currInfo.entryForms[2].options[2]}>{currInfo.entryForms[2].options[2]}</Options>
            <Options value={currInfo.entryForms[2].options[3]}>{currInfo.entryForms[2].options[3]}</Options>
          </DropDown>

          <Label for="lessonStructure">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[3].entry}
          </Label>
          <DropDown id="lessonStructure" value={lessonStructure} onChange={(e) => setLessonStructure(e.target.value)}>
            <Options value={currInfo.entryForms[3].options[0]}>{currInfo.entryForms[3].options[0]}</Options>
            <Options value={currInfo.entryForms[3].options[1]}>{currInfo.entryForms[3].options[1]}</Options>
          </DropDown>

          <Label for="gradeLevel">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[4].entry}
          </Label>
          <DropDown id="gradeLevel" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}>
            <Options value={currInfo.entryForms[4].options[0]}>{currInfo.entryForms[4].options[0]}</Options>
            <Options value={currInfo.entryForms[4].options[1]}>{currInfo.entryForms[4].options[1]}</Options>
            <Options value={currInfo.entryForms[4].options[2]}>{currInfo.entryForms[4].options[2]}</Options>
            <Options value={currInfo.entryForms[4].options[3]}>{currInfo.entryForms[4].options[3]}</Options>
            <Options value={currInfo.entryForms[4].options[4]}>{currInfo.entryForms[4].options[4]}</Options>
          </DropDown>

          <Label for="experience">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[5].entry}
          </Label>
          <Input id="experience" type="text" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder={currInfo.entryForms[5].example} required/>

          <Label for="reason">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[6].entry}
          </Label>
          <Input id="reason" type="text" value={reason} onChange={(e) => setReason(e.target.value)} placeholder={currInfo.entryForms[6].example} required/>
          
          <Label for="question">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[7].entry}
          </Label>
          <Textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder={currInfo.entryForms[7].example} />

          <SubmitButton type="submit">{currInfo.send}</SubmitButton>
        </Form>
        {responseMessage && <div>{responseMessage}</div>}
      </Row>
    </Container>
  );
};
