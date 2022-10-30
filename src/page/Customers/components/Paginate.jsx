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
            pageClassName="customers-pagination__item"
            pageLinkClassName="customers-pagination__item-link"
            previousClassName="customers-pagination__item"
            previousLinkClassName="customers-pagination__item-link"
            nextClassName="customers-pagination__item"
            nextLinkClassName="customers-pagination__item-link"
            breakLabel="..."
            breakClassName="customers-pagination__item"
            breakLinkClassName="customers-pagination__item-link--break"
            containerClassName="customers-pagination"
            activeLinkClassName="customers-pagination__item-link customers-pagination__item-link--active"
            renderOnZeroPageCount={null}
        />
    )
}

export default Paginate;