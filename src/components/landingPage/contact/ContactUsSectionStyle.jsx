import styled from "styled-components";

const mediaQueries = {
  mobile: `(max-width: 868px)`,
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
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  margin-top: 5rem;
  font-size: 2rem;
  text-align: center;
  color: #3333ad;
`;

export const SubmitButton = styled.button`
  margin-top: 2.5rem;
  width: 15rem;
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(171, 102, 255, 1) 0%,
    rgba(116, 182, 247, 1) 90%
  );
  border: none;
  border-radius: 2rem;
  @media ${mediaQueries.xs} {
    width: 12rem;
  }
  @media ${mediaQueries.xxs} {
    width: 10rem;
  }
`;

export const SubmitButtonText = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.7rem;
`;

export const Heading2 = styled.h4`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  color: #000000;
  width: 100%;
  max-width: 45rem;
`;
export const Heading3 = styled.h4`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  color: #000000;
  width: 100%;
  max-width: 45rem;

`;

export const InnerSection = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${mediaQueries.mobile} {
    flex-direction: column;
  }
`;

export const Field = styled.input`
  margin-top: 0.5rem;
  width: 20rem;
  height: 3rem;
  border-radius: 0.8rem;
  background: #efefff;
  border: none;
  padding-left: 1rem;
  &::placeholder {
    color: #999;
  }
  @media ${mediaQueries.mobile} {
    width: 20rem;
  }
  @media ${mediaQueries.xs} {
    width: 15rem;
  }
  @media ${mediaQueries.xxs} {
    width: 10rem;
  }
`;

export const FieldDiv1 = styled.div`
  margin-right: 2.1rem;
  @media ${mediaQueries.mobile} {
    margin-right: 0;
  }
`;

export const FieldDiv2 = styled.div`
  margin-left: 2.1rem;
  @media ${mediaQueries.mobile} {
    margin-left: 0;
  }
`;
export const FieldDiv3 = styled.div`
  margin-left: .1rem;
  @media ${mediaQueries.mobile} {
    margin-left: 0;
  }
`;
export const FieldDiv4 = styled.div`
  margin-left: .1rem;
  @media ${mediaQueries.mobile} {
    margin-left: 0;
  }
`;

export const EmailField = styled.input`
  margin-top: 0.5rem;
  width: 45rem;
  height: 3rem;
  border-radius: 0.8rem;
  background: #efefff;
  border: none;
  padding-left: 1rem;
  &::placeholder {
    color: #999;
  }
  @media ${mediaQueries.mobile} {
    width: 20rem;
  }
  @media ${mediaQueries.xs} {
    width: 15rem;
  }
  @media ${mediaQueries.xxs} {
    width: 10rem;
  }
`;
export const MessageField = styled.textarea`
  margin-top: 0.5rem;
  font-family: "Open Sans", sans-serif;
  width: 45rem;
  height: 10rem;
  border-radius: 0.8rem;
  background: #efefff;
  border: none;
  padding-top: 1rem;
  padding-left: 1rem;
  &::placeholder {
    color: #999;
  }
  @media ${mediaQueries.mobile} {
    width: 20rem;
  }
  @media ${mediaQueries.xs} {
    width: 15rem;
  }
  @media ${mediaQueries.xxs} {
    width: 10rem;
  }
`;
