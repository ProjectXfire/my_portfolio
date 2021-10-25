import styled from "styled-components";
import { device } from "@styles/variables/screen";

export const StyledProfileSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media ${device.tabletL} {
    grid-template-columns: 1fr 1.5fr;
  }
`;
