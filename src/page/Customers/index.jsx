import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Paginate from "./components/Paginate";
import Table from "./components/Table";
import "../../scss/customers.scss";
import { fetchCustomers } from "../../redux/customers/asyncAction";
import { setPage } from "../../redux/customers/slice";

const Customers = () => {
    const { page, count, totalPage, status, customers, totalCount } = useSelector(state => state.customers);
    const dispatch = useDispatch();
    const handlePageClick = (event) => {
        dispatch(setPage(event.selected + 1));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
    React.useEffect(() => {
        dispatch(fetchCustomers({ page, count }))
    }, [page])

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
                {(status === "loading" &&
                    <svg className="loader" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 100 100" enableBackground="new 0 0 0 0" width="80px" height="80px">
                        <path fill="#000" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                dur="1s"
                                from="0 50 50"
                                to="360 50 50"
                                repeatCount="indefinite" />
                        </path>
                    </svg>)
                    || (status === "success" && <>
                        <Table customers={customers} />
                        <div className="paginate">
                            <h4 className="paginate__info">Showing data {page === 1 ? 1 : (page - 1) * count} to {(count * page) <= totalCount ? count * page : totalCount} of {totalCount} entries</h4>
                            <Paginate handlePageClick={handlePageClick} totalPage={totalPage} page={page} />
                        </div>
                    </>
                    )}
            </div>
        </section>
    )
}

export default Customers