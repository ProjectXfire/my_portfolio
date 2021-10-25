import { colors } from "@styles/variables/colors";
import styled from "styled-components";

interface CardProps {
  actions?: boolean;
}

export const StyledCardActions = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${colors.lightGreen};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.black};
  z-index: 0;
  opacity: 0.8;
`;

export const StyledCard = styled.article<CardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 7px 0px rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  overflow: hidden;
  cursor: ${(props) => (props.actions ? "pointer" : "normal")};
  ${StyledCardActions} {
    transition: all 0.5s ease-in-out;
    transform: translateY(-100%);
  }
  &:hover {
    ${StyledCardActions} {
      transform: ${(props) =>
        props.actions ? "translateY(0)" : "translateY(-100%)"};
    }
  }
`;

export const StyledCardTags = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledCardContent = styled.div`
  padding: 0 10px;
  padding-bottom: 5px;
`;
