import React from "react";
import {
  Section,
  Heading,
  Heading3,
  List,
  ListItem,
  ImageContainer,
  Image,
  InstallButton,
  InstallButtonText,
  
} from "./AppSectionStyle";
const AppSection = () => {
  return (
    <Section>
      <Heading>Android App</Heading>
      
      <Heading3>
        Just download this APK and install it into your Android phone
      </Heading3>
      <List>
        <ListItem> Open DevOTP after installation.</ListItem>
        <ListItem> Login Using QR Code.</ListItem>
        <ListItem>
          {" "}
          Scan QR code provided in your DevOTP account, in Devices Section.
        </ListItem>
      </List>
      
      <ImageContainer>
        <Image src="/images/app.png" alt="Alt text for the image" />
      </ImageContainer>
      <InstallButton>
        <InstallButtonText>Install Devotp App</InstallButtonText>
      </InstallButton>
    </Section>
  );
};

export default AppSection;
