import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ handlePageClick, totalPage, page }) => {
    return (
        <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
            pageCount={totalPage}
            forcePage={page - 1}
            previousLabel="<"
            pageClassName="pagination__item"
            pageLinkClassName="pagination__item-link"
            previousClassName="pagination__item"
            previousLinkClassName="pagination__item-link"
            nextClassName="pagination__item"
            nextLinkClassName="pagination__item-link"
            breakLabel="..."
            breakClassName="pagination__item"
            breakLinkClassName="pagination__item-link--break"
            containerClassName="pagination"
            activeLinkClassName="pagination__item-link pagination__item-link--active"
            renderOnZeroPageCount={null}
        />
    )
}

export default Paginate;