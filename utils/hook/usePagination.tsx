import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// Models
import { Project } from "@models/project";
// Utils
import { indexPage } from "@utils/handlePage";

interface Page {
  currentPage: number;
  dataPerPage: any[];
  length: number;
  pagesNumber: number;
  totalData: any[];
}

export const usePagination = (page: number, data: any[]) => {
  const [pageInfo, setPageInfo] = useState<Page>({
    currentPage: 1,
    dataPerPage: [],
    length: 0,
    pagesNumber: 1,
    totalData: [],
  });
  const [responsiveDataPerPage, setResponsiveDataPerPage] = useState(1);
  const isSMobile = useMediaQuery({ minWidth: 0, maxWidth: 509 });
  const isLMobile = useMediaQuery({ minWidth: 510, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const nextPage = (
    currentPage: number,
    baseData: any[],
    totalDataPerPage: number
  ) => {
    const index = indexPage(totalDataPerPage, currentPage);
    const pagesNumber = Math.ceil(baseData.length / totalDataPerPage);
    const cloneData = [...baseData];
    const dataPerPage = cloneData.slice(index.start, index.end);
    setPageInfo({
      currentPage: currentPage,
      dataPerPage,
      length: baseData.length,
      pagesNumber,
      totalData: baseData,
    });
  };

  useEffect(() => {
    if (isSMobile) {
      setResponsiveDataPerPage(1);
      nextPage(page, data, 1);
    }
    if (isLMobile) {
      setResponsiveDataPerPage(2);
      nextPage(page, data, 2);
    }
    if (isTablet) {
      setResponsiveDataPerPage(3);
      nextPage(page, data, 3);
    }
    if (isDesktop) {
      setResponsiveDataPerPage(4);
      nextPage(page, data, 4);
    }
  }, [isSMobile, isLMobile, isTablet, isDesktop]);

  return {
    dataPerPage: pageInfo.dataPerPage,
    totalData: pageInfo.totalData,
    currentPage: pageInfo.currentPage,
    nextPage,
    pageLength: pageInfo.length,
    pagesNumber: pageInfo.pagesNumber,
    responsiveDataPerPage: responsiveDataPerPage,
  };
};
