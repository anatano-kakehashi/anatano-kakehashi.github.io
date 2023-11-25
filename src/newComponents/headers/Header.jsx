import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "helpers/useAnimatedNavToggler.js";

import { useNavigate, useLocation } from 'react-router-dom';

import logo from "assets/ak-images/logo.svg";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as GlobeIcon } from "feather-icons/dist/icons/globe.svg";

const HeaderComponent = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

const NavLinks = tw.div`inline-block cursor-pointer`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
const NavLink = tw.a`
  text-lg my-2 lg:text-lg lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-main-lightBlue hocus:text-main-lightBlue
`;

const LanguageChangeContainer = tw.div`cursor-pointer w-full m-auto flex justify-end`;
const LanguageChange = tw(NavLink)`text-main-lightBlue flex items-end`

const LogoLink = styled(NavLink)`
  ${tw`pl-4 pt-4 lg:pl-0 lg:pt-0 cursor-pointer flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-12 lg:w-20 mr-3`}
  }
`;
const LogoText = tw.p`text-left text-lg lg:text-2xl font-roboto text-main-blue tracking-[.15em] font-bold`;
const LogoRedText = tw.span`text-main-red`;

const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
const NavToggle = tw.button`
  lg:hidden pr-8 z-70 focus:outline-none hocus:text-main-blue transition duration-300
`;
const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-60 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-main-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;
const LgDesktopNav = tw(DesktopNavLinks)`hidden lg:flex lg:flex-wrap lg:pt-8 lg:px-8 xl:px-0 justify-center`;

var currPath = "/";
var engNav = ["Why Learn", "About Me", "Service"];
var japNav = ["学ぶメリット", "私について", "サービス"];
export default function Header(props) {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const navigate = useNavigate();
  let location = useLocation();

  // currPath = (window.location.hash);
  currPath = (location.pathname);
  let pathArr = currPath.split("/");
  pathArr = pathArr.slice(1);
  let currNavPath = "/";
  let currNavLink = japNav;
  if(pathArr[0] === "eng"){
    pathArr = pathArr.slice(1);
    currNavPath = "/eng/";
    currNavLink = engNav;
  }
  currPath = pathArr.join("/");

  const globeLinkJap = (
    <LanguageChangeContainer>
      <LanguageChange onClick={() => {
          navigate("/eng/" + currPath);
          navigate(0);
        }}>
        <GlobeIcon tw="w-6 h-6" />
        &nbsp;English
      </LanguageChange>
    </LanguageChangeContainer>
  );
  const globeLinkEng = (
    <LanguageChangeContainer>
      <LanguageChange onClick={() => {
          navigate("/" + currPath);
          navigate(0);
        }}>
        <GlobeIcon tw="w-6 h-6" />
        &nbsp;日本語
      </LanguageChange>
    </LanguageChangeContainer>
  );
  const tbasLogoLink = (
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
  );
  const tbasNavLinks = [
    <NavLinks key = {1}>
      <NavLink onClick={() => navigate(currNavPath+"whyLearn")}>{currNavLink[0]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+"aboutMe")}>{currNavLink[1]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+"service")}>{currNavLink[2]}</NavLink>
    </NavLinks>
  ];

  return (
    <HeaderComponent>
      <LgDesktopNav css={collapseBreakPointCssMap['lg'].desktopNavLinks}>
        {props.language === "JP" ? globeLinkJap : globeLinkEng}
        <DesktopNavLinks>
          {tbasLogoLink}
          {tbasNavLinks}
        </DesktopNavLinks>
      </LgDesktopNav>

      <MobileNavLinksContainer css={collapseBreakPointCssMap['lg'].mobileNavLinksContainer}>
        {tbasLogoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakPointCssMap['lg'].mobileNavLinks}>
          {tbasNavLinks}
          <br/>
          {props.language === "JP" ? globeLinkJap : globeLinkEng}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </HeaderComponent>
  );
};


/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
