import styled from "styled-components";
import { device } from "./variables/screen";
import { colors } from "@styles/variables/colors";

export const Container = styled.main`
  background-color: ${colors.black};
  @media ${device.desktop} {
    width: 1000px;
    margin: 0 auto;
  }
`;
