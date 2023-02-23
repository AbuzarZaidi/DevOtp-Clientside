import styled from "styled-components";
export const P1PackageDiv = styled.div`
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(171, 102, 255, 1) 0%,
    rgba(116, 182, 247, 1) 90%
  );
  width: 23rem;
  height: 37rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px 0 rgba(51, 51, 173, 0.6);
  transition: transform 0.2s ease-in-out; /* add a transition effect */

  &:hover {
    transform: scale(1.05); /* grow the component on hover */
  }
`;
export const P1Center = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
export const P1Center2 = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; ;
`;

export const P1Text1 = styled.h4`
  font-size: 2.5rem;
  font-weight: 500;
  color: #ffffff;
`;
export const P1Text2 = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: #000000;
`;
export const P1Text3 = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
`;
export const P1Text4 = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: #ffffff;
`;
export const P1Circle = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center; /* center horizontally */
  align-items: center; /* center vertically */
`;
export const P1ChoosePlanButton = styled.button`
  width: 15rem;
  cursor: pointer;
  max-width: 500px;
  background: #ffffff;
  border: none;
  border-radius: 2rem;
`;
export const P1ChoosePlanButtonText = styled.p`
  color: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(171, 102, 255, 1) 0%,
    rgba(116, 182, 247, 1) 90%
  );
  font-weight: 600;
  font-size: 1rem;
  padding: 0.7rem;
`;

//SecondPart
export const P2PackageDiv = styled.div`
  background: #ffffff;
  width: 23rem;
  height: 37rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px 0 rgba(51, 51, 173, 0.6);
  transition: transform 0.2s ease-in-out; /* add a transition effect */

  &:hover {
    transform: scale(1.05); /* grow the component on hover */
  }
`;
export const P2Center = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;
export const P2Center2 = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; ;
`;

export const P2Text1 = styled.h4`
  font-size: 2.5rem;
  font-weight: 500;
  color: #000000;
`;
export const P2Text2 = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
`;
export const P2Text3 = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
`;
export const P2Text4 = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #000000;
`;
export const P2Circle = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(171, 102, 255, 1) 0%,
    rgba(116, 182, 247, 1) 90%
  );
  display: flex;
  flex-direction: column;
  justify-content: center; /* center horizontally */
  align-items: center; /* center vertically */
`;
export const P2ChoosePlanButton = styled.button`
  width: 15rem;
  cursor: pointer;
  max-width: 500px;
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(171, 102, 255, 1) 0%,
    rgba(116, 182, 247, 1) 90%
  );
  border: none;
  border-radius: 2rem;
`;
export const P2ChoosePlanButtonText = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.7rem;
`;
