import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Paginate from "./components/Paginate";
import Table from "./components/Table";
import "../../scss/customers.scss";
import { fetchCustomers } from "../../redux/customers/asyncAction";
import { setPage, setSearchValueName } from "../../redux/customers/slice";
import Loader from "./components/Loader";
import debounce from "lodash.debounce";

const Customers = () => {
    const [value, setValue] = React.useState('');  // змінна інпута
    const { page, count, totalPage, status, customers, totalCount, searchValueName } = useSelector(state => state.customers);
    const dispatch = useDispatch();

    // змінна сторінки + скролл до верху
    const handlePageClick = (event) => {
        dispatch(setPage(event.selected + 1));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    // отримання юзерів, + змінна їх при пошуку(по імені) та змінни сторінки
    React.useEffect(() => {
        dispatch(fetchCustomers({ page, count, searchValueName }))
    }, [page, searchValueName]);

    // затримка пошуку 0.2 секунди і піде пошук
    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearchValueName(str));
        }, 200),
        [],
    );

    // інпут
    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
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
                        <input
                            className="customers__search-input"
                            id="search"
                            type="search"
                            placeholder="Search"
                            value={value}
                            onChange={onChangeInput}
                        />
                    </div>
                </div>
                {(status === "loading" &&
                    <Loader />)
                    || (status === "success" && <>
                        <Table customers={customers} />
                        <div className="customers-paginate">
                            <h4 className="customers-paginate__info">Showing data {page === 1 && totalPage >= 1 ? 1 : (page - 1) * count} to {(count * page) <= totalCount ? count * page : totalCount} of {totalCount} entries</h4>
                            <Paginate handlePageClick={handlePageClick} totalPage={totalPage} page={page} />
                        </div>
                    </>
                    ) || (status === "error" && <div>error</div>)}
            </div>
        </section>
    )
}

export default Customers