import React from "react";
import SinglePackage from "./SinglePackage";
import SinglePackage2 from "./SinglePackage2";
import {Section,Heading} from './PackagesSectionStyle'
const PackagesSection = () => {
  return (
    <>
  <Section>
    <Heading>Packages</Heading>
  </Section>
  <div style={{display:"flex",justifyContent:"center"}}>
    <SinglePackage name={"Silver"}/>
    <SinglePackage2 name={"Gold"}/>
    <SinglePackage name={"Diamond"}/>
    </div>
    </>
  
  );
};

export default PackagesSection;
