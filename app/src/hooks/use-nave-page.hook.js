import { useState } from "react";

const INNITIAL_PAGE = 0;

export function useNavPage() {
  const [page, setPage] = useState(INNITIAL_PAGE);

  function handlePreviousPage() {
    if (page <= INNITIAL_PAGE) {
      setPage(INNITIAL_PAGE);
    } else {
      setPage((page) => page - 1);
    }
  }

  function handleNextPage() {
    setPage((page) => page + 1);
  }

  return { page, handleNextPage, handlePreviousPage };
}
