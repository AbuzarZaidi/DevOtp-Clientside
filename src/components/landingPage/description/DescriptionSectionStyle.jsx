import styled from "styled-components";

const mediaQueries = {
  mobile: `(max-width: 650px)`,
  laptop: `(max-width: 1500px)`,
  minilaptop: `(max-width: 1200px)`,
  tablet: `(max-width: 935px)`,
  xs: `(max-width: 450px)`,
  xxs: `(max-width: 350px)`,
};

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* set the section width to 100% of the parent element */
  max-width: 45rem; /* set a maximum width for the section to limit its size */
  margin: 0 auto; /* center the section horizontally using auto margin */
  @media ${mediaQueries.tablet} {
    width: 80%;
  }
`;

export const Heading = styled.h2`
font-size: 3.2rem;
  text-align: center;
  color: #3333ad;
  @media ${mediaQueries.mobile} {
    font-size: 2rem;
  }
`;
export const Heading2 = styled.h4`
  font-size: 1.2rem;
  text-align: left;
  color: #000000;
  margin-top: 2.5rem;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 45rem; /* set a maximum width for the heading to limit its size */
`;

export const Heading3 = styled.h4`
  font-size: 1.1rem;
  text-align: left;
  color: #000000;
  margin-top: 1.5rem;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 45rem; /* set a maximum width for the heading to limit its size */
`;

export const List = styled.ul`
  font-size: 1rem;
  color: #000000;
  padding-left: 0;
  width: 100%; /* set the list width to 100% of the parent element */
  max-width: 42rem; /* set a maximum width for the list to limit its size */
`;

export const ListItem = styled.li`
  text-align: left;
`;
