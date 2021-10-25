import styled from "styled-components";
import { device } from "@styles/variables/screen";
import { colors } from "@styles/variables/colors";

export const StyledSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 1);
  @media ${device.tabletM} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`;

export const StyledSkill = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`;
