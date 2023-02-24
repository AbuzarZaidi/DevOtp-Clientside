import styled from "styled-components";

const media = {
  mobile: `(max-width: 700px)`,
  tablet: `(max-width: 935px)`,
  minilaptop: `(max-width: 1200px)`,
  laptop: `(max-width: 1500px)`,
};
export const Section = styled.section`
  display: grid;
  grid-template-columns:1fr 1fr  ;
  gap:10rem;
  align-items: center;
  // width: 100%;
  max-width: 100%;

  @media ${media.laptop} {
    width: 100%;
    gap:6rem;
  }
  @media ${media.minilaptop}, ${media.tablet} {
    width: 100%;
    gap:3rem;
  }
  @media ${media.tablet} {
    display:flex;
    // margin:auto;
    
    // justify-content:center;
    // align-items:center;
    // width: 100%;
  }
`;


export const ImageContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${media.tablet} {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  // max-width: 100%;
  // object-fit: cover;
`;

export const ContentContainer = styled.div`
  margin-top: 4rem;
  max-width: 100%;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  @media ${media.tablet} {
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

export const Content1 = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
  margin-top: 1rem;
  color: #000000;
  
  @media (max-width: 1440px) {
    font-size: 2.6rem;
  }
  
  @media (${media.laptop}) {
    font-size: 1.8rem;
  }

  @media (${media.tablet}) {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
`;

export const Content2 = styled.h1`
  font-weight: 700;
  margin-top: 1rem;
  font-size: 3.2rem;
  color: #3333ad;
  
  @media (max-width: 1440px) {
    font-size: 2.6rem;
  }
  
  @media (${media.laptop}) {
    font-size: 1.8rem;
  }

  @media (${media.tablet}) {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
`;

export const ReadMoreButton = styled.button`
  width: 13rem;
  cursor: pointer;
  margin-top: 2rem;
  max-width: 500px;
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(171, 102, 255, 1) 0%,
    rgba(116, 182, 247, 1) 90%
  );
  border: none;
  border-radius: 2rem;
  transition: transform 0.2s ease-in-out; /* add a transition effect */

  &:hover {
    transform: scale(1.05); /* grow the component on hover */
  }
`;

export const ReadMoreButtonText = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 1.6rem;
  padding: .7rem;
`;