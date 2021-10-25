import React from "react";
// Data
import { skillsFrontEnd } from "@data/skills";
import { skillsBackEnd } from "@data/skills";
// Styled components
import { colors } from "@styles/variables/colors";
import { StyledBlankCard } from "@styles/shared/blankCard";
import { StyledSkills, StyledSkill } from "@styles/components/skills";
import { Title } from "@styles/shared/title";
import { ProgressBar } from "@styles/shared/progressBar";

export const Skills = () => {
  return (
    <StyledSkills>
      <StyledBlankCard>
        <Title
          size="md"
          shadowColor={colors.lightGreen}
          weight={true}
          color={colors.grey}
        >
          Front End
        </Title>
        {skillsFrontEnd.map((skill, index) => (
          <StyledSkill key={index}>
            <p>{skill.name}</p>
            <ProgressBar percent={`${skill.percent}%`}>
              <div></div>
            </ProgressBar>
          </StyledSkill>
        ))}
      </StyledBlankCard>
      <StyledBlankCard>
        <Title
          size="md"
          shadowColor={colors.lightGreen}
          weight={true}
          color={colors.grey}
        >
          Back End
        </Title>
        {skillsBackEnd.map((skill, index) => (
          <StyledSkill key={index}>
            <p>{skill.name}</p>
            <ProgressBar percent={`${skill.percent}%`}>
              <div></div>
            </ProgressBar>
          </StyledSkill>
        ))}
      </StyledBlankCard>
    </StyledSkills>
  );
};
