import React from "react";
import Image from "next/image";
// Images
import HeroImage from "@assets/images/hero2.jpg";
// Styled components
import {
  StyledHero,
  StyledHeroTitle,
  StyledHeroSubTitle,
} from "@styles/components/hero";

interface HeroProps {
  title?: string;
  subTitle?: string;
}

export const Hero = ({ title, subTitle }: HeroProps) => {
  return (
    <StyledHero>
      <Image src={HeroImage} alt="Hero-Image" />
      <StyledHeroTitle>{title}</StyledHeroTitle>
      <StyledHeroSubTitle>{subTitle}</StyledHeroSubTitle>
    </StyledHero>
  );
};
