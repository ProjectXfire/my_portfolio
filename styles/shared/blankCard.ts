import styled from "styled-components";
import { colors } from "@styles/variables/colors";

export const StyledBlankCard = styled.section`
  display: grid;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 7px 0px rgba(255, 255, 255, 0.4);
  background-color: ${colors.lightBlack};
  color: ${colors.grey};
`;
