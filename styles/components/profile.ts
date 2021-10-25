import styled from "styled-components";
import { device } from "@styles/variables/screen";
import Image from "next/image";

export const StyledProfile = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media ${device.tabletM} {
    grid-template-columns: 1fr 2fr;
  }
  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`;

export const StyledProfileImage = styled(Image)`
  border-radius: 10px;
`;

export const StyledProfilePersonalData = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  div:nth-child(1) {
    p:nth-child(2) {
      font-weight: bold;
    }
  }
  p {
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 10px;
  }
`;

export const StyledProfileData = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const StyledProfileAboutMe = styled.div``;
