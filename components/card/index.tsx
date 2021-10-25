import React from "react";
import Image from "next/image";
// Default image
import defaultImage from "@assets/images/default.png";
// Styled components
import { colors } from "@styles/variables/colors";
import { Title } from "@styles/shared/title";
import { StyledText } from "@styles/shared/text";
import {
  StyledCard,
  StyledCardContent,
  StyledCardTags,
  StyledCardActions,
} from "@styles/shared/card";

interface CardProps {
  image?: StaticImageData;
  tags?: string[];
  title?: string;
  text?: string;
  actionButtons?: React.ReactNode[];
}

export const Card = ({
  image = defaultImage,
  tags = [],
  title,
  text,
  actionButtons,
}: CardProps) => {
  return (
    <StyledCard actions={actionButtons ? true : false}>
      <Image
        width={200}
        height={200}
        quality={100}
        objectFit="cover"
        src={image}
        alt="project-image"
      ></Image>
      <StyledCardContent>
        <StyledCardTags>
          {tags.map((tag, index) => (
            <StyledText key={index} color={colors.lightGreen} size="sm">
              {tag}
            </StyledText>
          ))}
        </StyledCardTags>
        <Title
          color={colors.white}
          weight={true}
          size="sm"
          shadowColor={colors.lightGreen}
        >
          {title}
        </Title>
        <StyledText>{text}</StyledText>
      </StyledCardContent>
      <StyledCardActions>
        {actionButtons?.map((action) => action)}
      </StyledCardActions>
    </StyledCard>
  );
};
