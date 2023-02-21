import styled from "styled-components";

const mediaQueries = {
  mobile: `(max-width: 650px)`,
  laptop: `(max-width: 1500px)`,
  minilaptop: `(max-width: 1200px)`,
  tablet: `(max-width: 935px)`,
  xs: `(max-width: 450px)`,
  xxs: `(max-width: 350px)`,
};
export const FooterSection = styled.footer`
background: #fff7e0;
 background-image: radial-gradient(at 80.1% 83.3%, #ffe0fb 0px, transparent 50%),radial-gradient(at 74.1% 34.7%, #d7f7fa 0px, transparent 50%),radial-gradient(at 27.7% 87.0%, #eedbff 0px, transparent 50%);
padding-bottom:2rem;
 weight:100%;
 margin-top:5rem;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%; /* set the section width to 100% of the parent element */
  max-width: 100rem; /* set a maximum width for the section to limit its size */
  margin: 0 auto; /* center the section horizontally using auto margin */
  @media ${mediaQueries.tablet} {
    width: 90%;
  }
`;
export const ImageContainer = styled.div`
margin-top:2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
`;
export const Heading = styled.h2`
margin-left:1rem;
  font-size: 2rem;
  text-align: center;
  color: #3333AD;
`;
export const Heading2 = styled.h4`
  font-size: 1.5rem;
  text-align: left;
  color: #000000;
  font-weight:600;
  margin-top: 2.5rem;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 45rem;  /* set a maximum width for the heading to limit its size */
`;

export const Detail1 = styled.p`
  font-size: .8rem;
  text-align: left;
  color: #000000;
  margin-top: 1.5rem;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 15rem;  /* set a maximum width for the heading to limit its size */
`;
export const Detail2 = styled.p`
  font-size: .8rem;
  text-align: left;
  color: #000000;
  margin-top: .5rem;
  width: 100%; /* set the heading width to 100% of the parent element */
  max-width: 15rem;  /* set a maximum width for the heading to limit its size */
`;
export const DetailSections=styled.div`
display:flex;
justify-content:space-around;
@media ${mediaQueries.tablet} {
  flex-direction:column;
  margin-left:1rem;
}
`
export const DetailSection=styled.div`

`