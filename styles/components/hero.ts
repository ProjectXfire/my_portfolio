import styled from "styled-components";
import { colors } from "@styles/variables/colors";
import { device } from "@styles/variables/screen";

export const StyledHero = styled.section`
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const StyledHeroTitle = styled.h1`
  position: absolute;
  top: 30%;
  left: 10%;
  right: 10%;
  text-align: center;
  color: ${colors.white};
  font-size: 9vw;
  text-shadow: 1px 0px 8px ${colors.lightGreen};
  @media ${device.desktop} {
    font-size: 8rem;
  }
`;

export const StyledHeroSubTitle = styled.p`
  position: absolute;
  top: 60%;
  left: 10%;
  right: 10%;
  text-align: center;
  color: ${colors.white};
  font-size: 4vw;
  @media ${device.desktop} {
    font-size: 2rem;
  }
`;
