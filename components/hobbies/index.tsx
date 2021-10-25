import React from "react";
// Models
import { Hobbie } from "@models/hobbie";
// Styled components
import { colors } from "@styles/variables/colors";
import { StyledBlankCard } from "@styles/shared/blankCard";
import { StyledHobbies } from "@styles/components/hobbies";
import { Title } from "@styles/shared/title";
import { Card } from "@components/card";

interface HobbieProps {
  hobbies: Hobbie[];
}

export const Hobbies = ({ hobbies = [] }: HobbieProps) => {
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
