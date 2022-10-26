import React from "react";

const Customers = () => {
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
                        <label className="customers__search-img" for="search">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L16.65 16.65" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </label>
                        <input className="customers__search-input" id="search" type="search" placeholder="Search" />
                    </div>
                </div>
                <div className="table">
                    <ul className="table__head">
                        <li className="table__title">Customer Name</li>
                        <li className="table__title">Company</li>
                        <li className="table__title">Phone Number</li>
                        <li className="table__title">Email</li>
                        <li className="table__title">Country</li>
                        <li className="table__title">Status</li>
                    </ul>
                    <ul className="table__body">
                        <li className="table__description">Jane Cooper</li>
                        <li className="table__description">Microsoft</li>
                        <li className="table__description">(225) 555-0118</li>
                        <li className="table__description">jane@microsoft.com</li>
                        <li className="table__description">United States</li>
                        <li className="table__description">Active</li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Customers