import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { useNavigate, useLocation } from 'react-router-dom';

/* ========= importing assets ============ */
import { Container as ContainerBase
} from "assets/styles/TailwindComponents.jsx";

import logo from "assets/ak-images/logo.svg";
import { ReactComponent as MailIcon } from "feather-icons/dist/icons/mail.svg";

// import { ReactComponent as MailIcon } from "assets/treact-images/email-newsletter-icon.svg";
import { ReactComponent as YoutubeIcon } from "assets/treact-images/youtube-icon.svg";

const NavLinks = tw.div`inline-block cursor-pointer pt-4`;

const NavLink = tw.a`
  text-sm lg:text-lg mx-2 lg:mx-6 my-2 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-main-lightBlue hocus:text-main-lightBlue
`;

const Container = tw(ContainerBase)`bg-main-white text-main-black -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-16`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoLink = styled(NavLink)`
  ${tw`cursor-pointer flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-12 lg:w-20 mr-3`}
  }
`;
const LogoText = tw.h5`ml-2 text-lg lg:text-2xl font-roboto text-main-blue tracking-[.15em] font-bold`;
const LogoRedText = tw.span`text-main-red`;

const SocialLinksContainer = tw.div`mt-6`;
const SocialLink = styled.a`
  ${tw`rounded-full p-3 cursor-pointer inline-block bg-main-blue text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const CopyrightContainer = tw(ContainerBase)`bg-main-lighterBlue text-main-black -mx-8`
const CopyrightContent = tw.div`max-w-screen-xl mx-auto py-8`;
const CopyrightText = tw.p`text-center font-extrabold tracking-wide text-xs lg:text-sm text-main-black`;

var currPath = "/";
export default function Footer(props) {
  const navigate = useNavigate();

  let location = useLocation();
  currPath = (location.pathname);

  // currPath = window.location.hash;
  let pathArr = currPath.split("/");
  pathArr = pathArr.slice(1);
  if(pathArr[0] === "eng"){
    pathArr = pathArr.slice(1);
  }
  currPath = pathArr.join("/");

  const tbasLogoLinkJap = (
    <LogoLink onClick={() => navigate("/")}>
      <img src={logo} alt="logo" />
      <LogoText>
        <LogoRedText>
          ANATANO
        </LogoRedText>
        <br/>
        KAKEHASHI
      </LogoText>
    </LogoLink>
  );

  const tbasLogoLinkEng = (
    <LogoLink onClick={() => navigate("/eng/")}>
      <img src={logo} alt="logo" />
      <LogoText>
        <LogoRedText>
          ANATANO
        </LogoRedText>
        <br/>
        KAKEHASHI
      </LogoText>
    </LogoLink>
  );

  const tbasNavLinksJap = [
    <NavLinks key = {1}>
      <NavLink onClick={() => navigate("/whyLearn")}>何故プログラミング</NavLink>
      <NavLink onClick={() => navigate("/aboutMe")}>私について</NavLink>
      <NavLink onClick={() => navigate("/service")}>サービス</NavLink>
    </NavLinks>
  ];
  const tbasNavLinksEng = [
    <NavLinks key = {1}>
      <NavLink onClick={() => navigate("/eng/whyLearn")}>Why Learn</NavLink>
      <NavLink onClick={() => navigate("/eng/aboutMe")}>About Me</NavLink>
      <NavLink onClick={() => navigate("/eng/service")}>Service</NavLink>
    </NavLinks>
  ];

  return (
    <>
      <Container>
        <Content>
          <Row>
            <LogoContainer>
              {props.language === "JP" ? tbasLogoLinkJap : tbasLogoLinkEng}
            </LogoContainer>
            {props.language === "JP" ? tbasNavLinksJap : tbasNavLinksEng}
            <SocialLinksContainer>
              <SocialLink href="mailto:anatano.koki@gmail.com">
                <MailIcon />
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank">
                <YoutubeIcon />
              </SocialLink>
              {/* <SocialLink href="https://twitter.com">
                <TwitterIcon />
              </SocialLink> */}
            </SocialLinksContainer>
          </Row>
        </Content>
      </Container>
      <CopyrightContainer>
        <CopyrightContent>
          <Row>
            <CopyrightText>
              Copyright &copy; 2020 あなたの架け橋 All Rights Reserved.
            </CopyrightText>
          </Row>
        </CopyrightContent>
      </CopyrightContainer>
    </>
   
  );
};
