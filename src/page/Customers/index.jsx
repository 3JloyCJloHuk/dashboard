import React from "react";
import Paginate from "./components/Paginate";
import Table from "./components/Table";
import "../../scss/customers.scss";

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
                <Table />
                <div className="paginate">
                    <h4 className="paginate__info">Showing data 1 to 8 of  256K entries</h4>
                    <Paginate handlePageClick={handlePageClick} />
                </div>
            </div>
        </section>
    )
}

export default Customers