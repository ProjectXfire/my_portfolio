import React from "react";
// Data
import { hobbies } from "@data/hobbies";
// Styled components
import { colors } from "@styles/variables/colors";
import { StyledBlankCard } from "@styles/shared/blankCard";
import { StyledHobbies } from "@styles/components/hobbies";
import { Title } from "@styles/shared/title";
import { Card } from "@components/card";

export const Hobbies = () => {
  return (
    <>
      <StyledBlankCard>
        <Title
          color={colors.white}
          shadowColor={colors.lightGreen}
          weight={true}
        >
          Hobbies
        </Title>
      </StyledBlankCard>
      <StyledBlankCard>
        <StyledHobbies>
          {hobbies.map((hobbie, index) => (
            <Card
              key={index}
              title={hobbie.name}
              text={hobbie.description}
              image={hobbie.image}
            />
          ))}
        </StyledHobbies>
      </StyledBlankCard>
    </>
  );
};
