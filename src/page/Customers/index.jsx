import React from "react";
import ReactPaginate from "react-paginate";

const Customers = () => {
    const [itemOffset, setItemOffset] = React.useState(0);

    const handlePageClick = (event) => {
        const newOffset = event.selected * 1 % 40;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <section className="customers">
            <h3 className="customers__greeting">Hello Evano 👋🏼</h3>
            <div className="customers__content">
                <div className="customers__top">
                    <div className="customers__description">
                        <h2 className="customers__title">All Customers</h2>
                        <p className="customers__active">Active Members</p>
                    </div>
                    <div className="customers__search">
                        <label className="customers__search-img" htmlFor="search">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L16.65 16.65" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </label>
                        <input className="customers__search-input" id="search" type="search" placeholder="Search" />
                    </div>
                </div>
                <table className="table">
                    <thead className="table__head">
                        <tr className="table__head-row">
                            <th className="table__title">Customer Name</th>
                            <th className="table__title">Company</th>
                            <th className="table__title">Phone Number</th>
                            <th className="table__title">Email</th>
                            <th className="table__title">Country</th>
                            <th className="table__title">Status</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        <tr className="table__body-row">
                            <td className="table__description">Jane Cooper</td>
                            <td className="table__description">Microsoft</td>
                            <td className="table__description">(225) 555-0118</td>
                            <td className="table__description">jane@microsoft.com</td>
                            <td className="table__description">United States</td>
                            <td className="table__description">
                                <button className="table__description-button table__description-button--active">Active</button>
                            </td>
                        </tr>
                        <tr className="table__body-row">
                            <td className="table__description">Floyd Miles</td>
                            <td className="table__description">Yahoo</td>
                            <td className="table__description">(205) 555-0100</td>
                            <td className="table__description">floyd@yahoo.com</td>
                            <td className="table__description">Kiribati</td>
                            <td className="table__description">
                                <button className="table__description-button table__description-button--inactive">Inactive</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <div className="paginate">
                    <h4 className="paginate__info">Showing data 1 to 8 of  256K entries</h4>
                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={4}
                        marginPagesDisplayed={1}
                        pageCount={40}
                        previousLabel="<"
                        pageClassName="pagination__item"
                        pageLinkClassName="pagination__item-link"
                        previousClassName="pagination__item"
                        previousLinkClassName="pagination__item-link"
                        nextClassName="pagination__item"
                        nextLinkClassName="pagination__item-link"
                        breakLabel="..."
                        breakClassName="pagination__item"
                        breakLinkClassName="pagination__item-link"
                        containerClassName="pagination"
                        activeLinkClassName="pagination__item-link pagination__item-link--active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </section>
    )
}

export default Customers