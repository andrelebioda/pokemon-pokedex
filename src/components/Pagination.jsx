import { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setActivePage, pages }) => {
  const [pageRange, setPageRange] = useState(2);

  const pageCount = Math.ceil(pages.length);

  const handlePageClick = (event) => {
    const newPage = event.selected + 1;
    setActivePage(newPage);
  };

  return (
    <div className="pagination__wrapper">
      <div className="pagination__inner">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={pageRange}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default Pagination;
