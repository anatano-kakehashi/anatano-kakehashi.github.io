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

const NavLinks = tw.div`hidden md:inline-block cursor-pointer pt-4`;

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
const CopyrightContainer = tw(ContainerBase)`bg-main-lighterBlue -mx-8`
const CopyrightContent = tw.div`max-w-screen-xl mx-auto py-8`;
const CopyrightText = tw.p`text-center font-medium tracking-wider text-xs lg:text-sm text-main-white`;

var currPath = "/";
var engNav = ["Why Learn", "About Us", "Service", "Feedback", "FAQ", "Contact Us"];
var japNav = ["学ぶメリット", "私達について", "サービス", "ご利用者の声", "FAQ", "お問い合わせ"];
export default function Footer(props) {
  const navigate = useNavigate();
  let location = useLocation();

  currPath = (location.pathname);
  let pathArr = currPath.split("/");
  pathArr = pathArr.slice(1);
  let currNavPath = "/";
  let currNavLink = engNav;
  if(pathArr[0] === "jp"){
    pathArr = pathArr.slice(1);
    currNavPath = "/jp/";
    currNavLink = japNav;
  }
  currPath = pathArr.join("/");

  return (
    <>
      <Container>
        <Content>
          <Row>
            <LogoContainer>
              <LogoLink onClick={() => navigate(currNavPath)}>
                <img src={logo} alt="logo" />
                <LogoText>
                  <LogoRedText>
                    ANATANO
                  </LogoRedText>
                  <br/>
                  KAKEHASHI
                </LogoText>
              </LogoLink>
            </LogoContainer>
            <NavLinks key = {1}>
              <NavLink onClick={() => navigate(currNavPath + "whyLearn")}>{currNavLink[0]}</NavLink>
              <NavLink onClick={() => navigate(currNavPath + "aboutUs")}>{currNavLink[1]}</NavLink>
              <NavLink onClick={() => navigate(currNavPath + "service")}>{currNavLink[2]}</NavLink>
              <NavLink onClick={() => navigate(currNavPath + "feedback")}>{currNavLink[3]}</NavLink>
              <NavLink onClick={() => navigate(currNavPath + "faq")}>{currNavLink[4]}</NavLink>
              <NavLink onClick={() => navigate(currNavPath + "contact")}>{currNavLink[5]}</NavLink>
            </NavLinks>
            <SocialLinksContainer>
              <SocialLink href="mailto:anatano.koki@gmail.com">
                <MailIcon />
              </SocialLink>
              <SocialLink href="https://youtu.be/fETZIYPfyp4" target="_blank">
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
