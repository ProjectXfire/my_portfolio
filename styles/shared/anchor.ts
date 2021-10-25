import styled, { css } from "styled-components";

interface AnchorProps {
  color?: string;
  bkgColor?: string;
  weight?: boolean;
  active?: boolean;
}

export const Active = css<AnchorProps>`
  border: ${(props) =>
    props.bkgColor ? `1px solid ${props.bkgColor}` : "1px solid white"};
  color: ${(props) => (props.bkgColor ? props.bkgColor : "white")};
  background-color: ${(props) => (props.color ? props.color : "black")};
`;

export const Normal = css<AnchorProps>`
  border: ${(props) =>
    props.color ? `1px solid ${props.color}` : `1px solid black`};
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) => (props.bkgColor ? props.bkgColor : "white")};
`;

export const StyledAnchor = styled.a<AnchorProps>`
  padding: 10px 15px;
  outline: none;
  ${(props) => {
    if (props.active) {
      return Active;
    }
    return Normal;
  }}
  border-radius: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.weight ? "bold" : "none")};
  transition: all 0.5s ease-in-out;
  &:hover {
    border: ${(props) =>
      props.bkgColor ? `1px solid ${props.bkgColor}` : "1px solid white"};
    color: ${(props) => (props.bkgColor ? props.bkgColor : "white")};
    background-color: ${(props) => (props.color ? props.color : "black")};
  }
`;
