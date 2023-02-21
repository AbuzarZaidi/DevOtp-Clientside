import styled from "styled-components";
const mobile = `(max-width: 700px)`;
const laptop=`(max-width:1500px)`;
const minilaptop=`(max-width:1200px)`;
const tablet=`(max-width:935px)`;
export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 85rem;
  margin: 0 auto;

  @media ${laptop} {
    width: 95%;
  }

  @media ${minilaptop} {
    width: 80%;
  }

  @media ${tablet} {
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${mobile} {
    display: none;
  }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 70rem;
`;
export const ContentContainer = styled.div`
  margin-top: 4rem;
  margin-left: 20rem;
  width: 30rem;

  @media ${minilaptop} {
    margin-left: 5rem;
  }

  @media ${tablet} {
    margin-left: 5rem;
   
  }

  @media ${mobile} {
    margin-left: 5rem;
    margin-top: 1rem;
    
  }
`;
export const Content1=styled.h1`
font-weight:700;
font-size:2rem;
margin-top:1rem;
color:#000000;
@media ${minilaptop} {
  font-size:1.8rem;
}

@media ${tablet} {
  font-size:1.6rem;
}

// @media ${mobile} {
  font-size:1.8rem;
// }
`;
export const Content2=styled.h1`
font-weight:700;
margin-top:1rem;
font-size:2rem;
color:#3333AD;
@media ${minilaptop} {
  font-size:1.8rem;
}

@media ${tablet} {
  font-size:1.6rem;
}

// @media ${mobile} {
  font-size:1.8rem;
// }
`;
export const ReadMoreButton = styled.button`
  width: 8rem;
  margin-top:2rem;
  max-width: 500px;
  background: radial-gradient( circle farthest-corner at 10% 20%, rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% );
  border:none;
  border-radius:2rem;
`;
export const ReadMoreButtonText = styled.p`
 color:#ffffff;
 font-weight:500;
 font-size:1rem;
 padding:.7rem;
`;