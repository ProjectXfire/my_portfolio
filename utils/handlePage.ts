export const indexPage = (itemsPerPage: number, currentPage: number) => {
  const indexLastItem = currentPage * itemsPerPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  return {
    start: indexFirstItem,
    end: indexLastItem,
  };
};
