import React from "react";
import {
  FooterSection,
  ImageContainer,
  Image,
  Heading,
  Heading2,
  Detail1,
  Detail2,
  DetailSections,
  DetailSection,
  DetailSection2,
} from "./FooterStyle";
const Footer = () => {
  return (
    <>
      <FooterSection>
        <DetailSections>
       
          <DetailSection>
          <ImageContainer>
            <Image src="/images/footer.png" alt="Alt text for the image" />
            <Heading>DevOTP</Heading>
          </ImageContainer>
            <Heading2>
              Our Contact
              <Detail1>
                Our Contact One PakistanN55,
                 Indus Highway, Bypass Road, Jumper
                Punjab, Pakistan, 33000.
              </Detail1>
              <Detail1>+923336458112</Detail1>
            </Heading2>
          </DetailSection>
          <DetailSection2>
            <Heading2>
              Quick Links
              <Detail2>Video Tutorials</Detail2>
              <Detail2>Download Android App</Detail2>
              <Detail2>Contact us</Detail2>
              <Detail2>How it works</Detail2>
            </Heading2>
          </DetailSection2>
          <DetailSection2>
            <Heading2>
              Latest Posts
              <Detail2>Register</Detail2>
              <Detail2>Login</Detail2>
              <Detail2>Privacy Policy</Detail2>
              <Detail2>Terms & Conditions</Detail2>
            </Heading2>
          </DetailSection2>
        </DetailSections>
      </FooterSection>
    </>
  );
};

export default Footer;
