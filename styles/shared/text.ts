import styled from "styled-components";

interface TextProps {
  color?: string;
  size?: "sm" | "md" | "lg";
  weight?: boolean;
}

export const StyledText = styled.p<TextProps>`
  font-size: ${(props) => {
    if (props.size === "sm") {
      return "0.8rem";
    }
    if (props.size === "lg") {
      return "1.2rem";
    }
    return "1rem";
  }};
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: ${(props) => (props.weight ? "bold" : "normal")};
`;
