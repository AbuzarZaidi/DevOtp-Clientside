import React from "react";
import SinglePackage from "./SinglePackage";
import SinglePackage2 from "./SinglePackage2";
import {Section,Heading,Center} from './PackagesSectionStyle'
const PackagesSection = () => {
  return (
    <>
  <Section>
    <Heading>Packages</Heading>
  </Section>
  <Center>
    <SinglePackage name={"Silver"}/>
    <SinglePackage2 name={"Gold"}/>
    <SinglePackage name={"Diamond"}/>
    </Center>
    </>
  
  );
};

export default PackagesSection;
