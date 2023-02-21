import React from "react";
import {
  Section,
  Heading,
  Heading2,
  Heading3,
  List,
  ListItem,
} from "./DescriptionSectionStyle";
const DescriptionSection = () => {
  return (
    <>
      <Section>
        <Heading>How it works</Heading>
        <Heading2>
          In this tutorial we will learn how to use DevOTP. So read this article
          carefully
        </Heading2>
        <Heading3>
          There are all necessary steps explained so read and know.
        </Heading3>
        <List>
          <ListItem>First of All Register Free Account</ListItem>
          <ListItem>Then Go to Login and login your account.</ListItem>
          <ListItem>
            Go to the Devices form the sidebar menu after login.
          </ListItem>
          <ListItem> Click On Add Device Button</ListItem>
          <ListItem>Install APK in your Android mobile phone.</ListItem>
          <ListItem> Run APK after Successfull inastallation.</ListItem>
          <ListItem>
            Use QR Code to Ligin and Scan QR Code that is showing on Poup
            Screen.{" "}
          </ListItem>
        </List>
      </Section>
    </>
  );
};

export default DescriptionSection;
