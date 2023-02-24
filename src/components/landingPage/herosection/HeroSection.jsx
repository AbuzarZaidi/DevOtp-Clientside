import React from "react";
import {
  Section,
  ImageContainer,
  Image,
  ContentContainer,
  Content1,
  Content2,
  ReadMoreButton,
  ReadMoreButtonText,
} from "./HeroSectionStyle";
const HeroSection = () => {
  return (
    <>
      <Section>
        <ImageContainer>
          <Image src="/images/heroimg.png" alt="Alt text for the image" />
        </ImageContainer>
        <ContentContainer>
          <div style={{textAlign:"start"}}>
          <Content1>Securely Connect with</Content1>
          <Content2>One-Time Passwords</Content2>
          <Content1> Any time, Any where</Content1>
          <ReadMoreButton>
            <ReadMoreButtonText>Read More</ReadMoreButtonText>
          </ReadMoreButton>
          </div>
        </ContentContainer>
      </Section>
    </>
  );
};

export default HeroSection;
