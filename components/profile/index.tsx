import React from "react";
import Image from "next/image";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
// Images
import Me from "@assets/images/me.jpg";
// Styled components
import { StyledBlankCard } from "@styles/shared/blankCard";
import {
  StyledProfile,
  StyledProfileImage,
  StyledProfileData,
  StyledProfileAboutMe,
  StyledProfilePersonalData,
} from "@styles/components/profile";

export const Profile = () => {
  return (
    <StyledBlankCard>
      <StyledProfile>
        <div>
          <StyledProfileImage src={Me} layout="responsive" alt="My-Image" />
        </div>
        <StyledProfileData>
          <StyledProfilePersonalData>
            <div>
              <p>Gabriel Vargas Bravo</p>
              <p>Front-End Developer</p>
            </div>
            <div>
              <p>
                <MdOutlineEmail size="20" />
                <span>gabriel.vargas.bravo@gmail.com</span>
              </p>
              <p>
                <MdPhone size="20" />
                <span>(+011) 51 990 994 750</span>
              </p>
            </div>
          </StyledProfilePersonalData>
          <StyledProfileAboutMe>
            Self-motivated developer. I would like to know and learn more about
            of the world of Web Applications Development, using technologies as
            react, angular or vue, and sharing knowledge between the community.
          </StyledProfileAboutMe>
        </StyledProfileData>
      </StyledProfile>
    </StyledBlankCard>
  );
};
