import styled from "styled-components";


const mediaQueries = {
  mobile: `(max-width: 600px)`,
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
`;
export const Heading2 = styled.h4`
  font-size: 1.2rem;
  text-align: left;
  color: #000000;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 45rem;  /* set a maximum width for the heading to limit its size */
  @media ${mediaQueries.tablet} {
    width: 70%;
    
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Video = styled.video`
  width: 45rem;
  height: 20rem;
  @media ${mediaQueries.tablet} {
    width: 30rem;
    height: 17rem;
  }
  @media ${mediaQueries.mobile} {
    width: 27rem;
    height: 15rem;
  }
  @media ${mediaQueries.xs} {
    width: 23rem;
    height: 14rem;
  }
  @media ${mediaQueries.xxs} {
    width: 18rem;
    height: 12rem;
  }
`;

export const VideoCaption = styled.track`
  color: #ffffff;
  font-size: 1.2em;
  font-family: sans-serif;
  text-shadow: 2px 2px #000000;
`;