import React, { useState, useEffect } from "react";
import Link from "next/link";
// Providers
import { Pagination } from "semantic-ui-react";
// Utils
import { usePagination } from "@utils/hook/usePagination";
// Models
import { Project } from "@models/project";
// Data
import { tags } from "@data/tags";
import { projects } from "@data/projects";
// Components
import { Card } from "@components/card";
// Styled components
import { colors } from "@styles/variables/colors";
import { Title } from "@styles/shared/title";
import { StyledButton } from "@styles/shared/button";
import { StyledPaginationContainer } from "@styles/shared/paginationContainer";
import { StyledBlankCard } from "@styles/shared/blankCard";
import { StyledAnchor } from "@styles/shared/anchor";
import {
  StyledProjectsFilter,
  StyledProjects,
} from "@styles/components/projects";

export const Projects = () => {
  const [active, setActive] = useState(0);
  const [filteredData, setFilteredData] = useState<Project[]>([]);
  const {
    dataPerPage,
    totalData,
    currentPage,
    nextPage,
    pageLength,
    pagesNumber,
    responsiveDataPerPage,
  } = usePagination(1, projects);

  const handleActive = (index: number, tag: string) => {
    setActive(index);
    if (tag === "All") {
      nextPage(1, projects, responsiveDataPerPage);
      setFilteredData(filteredData);
    } else {
      const filterTag = `#${tag.toUpperCase()}`;
      const filteredProjects = projects.filter((project) =>
        project.tags.some((tag) => tag === filterTag)
      );
      setFilteredData(filteredProjects);
      nextPage(1, filteredProjects, responsiveDataPerPage);
    }
  };

  const handlePage = (
    e: React.MouseEvent,
    activePage: string | number | undefined
  ) => {
    if (typeof activePage === "number") {
      nextPage(activePage, totalData, responsiveDataPerPage);
    }
  };

  return (
    <>
      <StyledBlankCard>
        <Title
          color={colors.white}
          weight={true}
          shadowColor={colors.lightGreen}
        >
          Projects ({pageLength})
        </Title>
        <StyledProjectsFilter>
          {tags.map((tag, index) => (
            <StyledButton
              key={index}
              type="button"
              weight={true}
              color={colors.lightGreen}
              bkgColor={colors.black}
              active={index === active}
              onClick={() => handleActive(index, tag.name)}
            >
              {tag.name}
            </StyledButton>
          ))}
        </StyledProjectsFilter>
      </StyledBlankCard>
      <StyledBlankCard>
        <StyledProjects>
          {dataPerPage.map((project, index) => (
            <Card
              key={index}
              title={project.name}
              tags={project.tags}
              text={project.description}
              image={project.image}
              actionButtons={[
                <Link href={project.demo} key={1} passHref>
                  <StyledAnchor
                    weight={true}
                    color={colors.lightGreen}
                    bkgColor={colors.black}
                  >
                    Demo
                  </StyledAnchor>
                </Link>,
                <Link href={project.code} key={2} passHref>
                  <StyledAnchor
                    weight={true}
                    color={colors.lightGreen}
                    bkgColor={colors.black}
                  >
                    Code
                  </StyledAnchor>
                </Link>,
              ]}
            />
          ))}
        </StyledProjects>
        <StyledPaginationContainer>
          <Pagination
            activePage={currentPage}
            boundaryRange={0}
            ellipsisItem={null}
            siblingRange={1}
            totalPages={pagesNumber}
            size="mini"
            color="green"
            onPageChange={(e, { activePage }) => handlePage(e, activePage)}
          />
        </StyledPaginationContainer>
      </StyledBlankCard>
    </>
  );
};
