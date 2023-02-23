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
export const Center=styled.div`
display:flex;
justify-content:center;
align-items:center;
@media ${mediaQueries.mobile} {
  flex-direction:column;

}
`