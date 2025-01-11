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

import { contactUsForm } from "assets/ak-data/AK_Info.jsx";

const Container = tw(BaseContainer)`py-0 px-6 lg:px-0`;

const Row = tw(ContentFormatted2)`flex flex-col bg-main-lightestBlue 
justify-between items-center 
lg:my-12 lg:py-12 mx-auto rounded-3xl`;

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

var currInfo = contactUsForm[0];
export default function ContactForm(props) {
  if(props.language === "ENG"){
    currInfo = contactUsForm[1];
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [heard, setHeard] = useState(currInfo.entryForms[2].options[0]);
  const [question, setQuestion] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData();
    formData.append('entry.1487186729', name); 
    formData.append('entry.1449548638', email); 
    formData.append('entry.1148002302', heard); 
    formData.append('entry.1045897173', question);  

    try {
      await fetch('https://docs.google.com/forms/u/2/d/e/1FAIpQLSfq8wJ4R2WcCYHPgXAM9cTBhmTERpIMY_5QGoAJzY_wKGYvng/formResponse', {
        method: 'POST',
        mode: 'no-cors', // Use no-cors mode to avoid CORS issues
        body: formData,
      });
      setResponseMessage(currInfo.successResponse);
      setName('');
      setEmail('');
      setHeard('');
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

          <Label for="question">
            <RedLabel>{currInfo.required}</RedLabel>
            {currInfo.entryForms[3].entry}
          </Label>
          <Textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder={currInfo.entryForms[3].example} />

          <SubmitButton type="submit">{currInfo.send}</SubmitButton>
        </Form>
        {responseMessage && <div>{responseMessage}</div>}
      </Row>
    </Container>
  );
};
