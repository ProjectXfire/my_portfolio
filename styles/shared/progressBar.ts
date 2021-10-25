import styled from "styled-components";
import { colors } from "@styles/variables/colors";

interface ProgressBarProps {
  percent?: string;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 10px;
  width: 100%;
  border: 1px solid ${colors.lightGreen};
  border-radius: 5px;
  background-color: ${colors.darkGrey};
  & div {
    height: 8px;
    border-radius: 5px;
    width: ${(props) => props.percent};
    background-color: ${colors.black};
  }
`;
