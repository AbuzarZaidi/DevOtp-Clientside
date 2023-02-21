import React from "react";
import {
  Section,
  Heading,
  SubmitButton,
  SubmitButtonText,
  Heading2,
  Heading3,
  EmailField,
  MessageField,
  InnerSection,
  Field,
  FieldDiv1,
  FieldDiv2,
  FieldDiv3,
  FieldDiv4,
} from "./ContactUsSectionStyle";

const ContactUsSection = () => {
  return (
    <Section>
      <Heading>Contact</Heading>
      <InnerSection>
        <FieldDiv1 >
          <Heading2>Name</Heading2>
          <Field type="text" placeholder="Name"></Field>
        </FieldDiv1>
        <FieldDiv2 >
          <Heading2>Phone#</Heading2>
          <Field type="text" placeholder="Phone"></Field>
        </FieldDiv2>
      </InnerSection>
      <FieldDiv3 >
      <Heading3>Email</Heading3>
      
      <EmailField type="text" placeholder="Email"></EmailField>
      </FieldDiv3>
      <FieldDiv4 >
      <Heading3>Message</Heading3>
      <MessageField type="text" placeholder="Message"></MessageField>
      </FieldDiv4>
      <SubmitButton>
        <SubmitButtonText>Submit</SubmitButtonText>
      </SubmitButton>
    </Section>
  );
};

export default ContactUsSection;
