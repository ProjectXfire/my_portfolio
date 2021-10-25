import React from "react";
// Providers
import { Pagination } from "semantic-ui-react";
// Models
import { Certificate } from "@models/certificate";
// Utils
import { usePagination } from "@utils/hook/usePagination";
// Styled components
import { colors } from "@styles/variables/colors";
import { StyledBlankCard } from "@styles/shared/blankCard";
import { Title } from "@styles/shared/title";
import { StyledCertificates } from "@styles/components/certificates";
import { Card } from "@components/card";
import { StyledPaginationContainer } from "@styles/shared/paginationContainer";

interface CertificateProps {
  certificates: Certificate[];
}

export const Certificates = ({ certificates = [] }: CertificateProps) => {
  const {
    dataPerPage,
    totalData,
    currentPage,
    nextPage,
    pageLength,
    pagesNumber,
    responsiveDataPerPage,
  } = usePagination(1, certificates);

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
          shadowColor={colors.lightGreen}
          weight={true}
        >
          Certificates ({pageLength})
        </Title>
      </StyledBlankCard>
      <StyledBlankCard>
        <StyledCertificates>
          {dataPerPage.map((certificate, index) => (
            <Card
              key={index}
              title={certificate.name}
              text={certificate.school}
              image={certificate.image}
            />
          ))}
        </StyledCertificates>
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
