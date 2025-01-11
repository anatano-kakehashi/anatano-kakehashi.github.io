import React from "react";
import tw from "twin.macro";

const LargeContainer = tw.div`hidden lg:block relative px-4 py-4`;
const SmallContainer = tw.div`block lg:hidden relative pl-1 pt-1`;
const Title = tw.h2`absolute left-[13px] lg:left-[36px] top-[8px] lg:top-[30px] text-main-white tracking-widest font-bold font-openSans text-4xl lg:text-6xl`;

export default function NumIcon(props) {
  return(
    <>
      <LargeContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="60" fill="#002F6D"/>
        </svg>
        <Title>
          0{props.index + 1}
        </Title>
      </LargeContainer>
      <SmallContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="60" fill="#002F6D"/>
        </svg>
        <Title>
          0{props.index + 1}
        </Title>
      </SmallContainer>
    </>
  );
};

