import React from "react";
import { Link } from 'react-router-dom';
import user from "../../img/user.png";

const LeftSideMenu = ({ linkActive, openMenu, setting, NavigateOnClickMenuItem }) => {

    return (
        <nav className={openMenu ? "menu menu--active" : "menu"}>
            <div className="logo">
                <img className="logo__img" src={setting} alt="setting" />
                <h3 className="logo__name">Dashboard<span className="logo__version"> v.01</span></h3>
            </div>
            <ul className="menu__list">
                <li className="menu__item">
                    <Link
                        className={linkActive === "/" ? "menu__item-link menu__item-link--active" : "menu__item-link"}
                        to="/"
                        onClick={() => NavigateOnClickMenuItem("/")}
                    >
                        <svg className="menu__item-img" width="24" height="24" viewBox="0 0 24 24" stroke="#9197B3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.45 16.28L9.59998 15.42" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.3945 10.7H13.4035" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Dashboard
                    </Link>
                </li>
                <li className="menu__item">
                    <Link
                        className={linkActive === "/product" ? "menu__item-link menu__item-link--active" : "menu__item-link"}
                        to="/product"
                        onClick={() => NavigateOnClickMenuItem("/product")}
                    >
                        <svg className="menu__item-img" width="24" height="24" viewBox="0 0 24 24" stroke="#9197B3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 22.25H9C6.3424 22.25 4.56492 21.6803 3.4423 20.5577C2.31968 19.4351 1.75 17.6576 1.75 15V9C1.75 6.3424 2.31968 4.56492 3.4423 3.4423C4.56492 2.31968 6.3424 1.75 9 1.75H15C17.6576 1.75 19.4351 2.31968 20.5577 3.4423C21.6803 4.56492 22.25 6.3424 22.25 9V15C22.25 17.6576 21.6803 19.4351 20.5577 20.5577C19.4351 21.6803 17.6576 22.25 15 22.25ZM9 2.25C6.65972 2.25 4.92432 2.66107 3.7927 3.7927C2.66107 4.92432 2.25 6.65972 2.25 9V15C2.25 17.3403 2.66107 19.0757 3.7927 20.2073C4.92432 21.3389 6.65972 21.75 9 21.75H15C17.3403 21.75 19.0757 21.3389 20.2073 20.2073C21.3389 19.0757 21.75 17.3403 21.75 15V9C21.75 6.65972 21.3389 4.92432 20.2073 3.7927C19.0757 2.66107 17.3403 2.25 15 2.25H9Z" />
                            <path d="M11.8725 12.5478L11.8706 12.5467L6.57255 9.48781C6.57231 9.48767 6.57207 9.48753 6.57183 9.48739C6.44767 9.41445 6.41595 9.26259 6.47934 9.15695L6.47937 9.15697L6.48248 9.15164C6.55524 9.0269 6.7075 8.99492 6.81337 9.05845L6.81334 9.0585L6.81999 9.06235L11.74 11.9124L11.9905 12.0575L12.2411 11.9125L17.1311 9.08246L17.1325 9.08159C17.2507 9.01265 17.4033 9.05725 17.4665 9.16777C17.5343 9.28644 17.4844 9.44735 17.3825 9.50557L17.3804 9.5068L12.1269 12.5431C12.0772 12.5693 12.0308 12.5797 12.0006 12.5797C11.9489 12.5797 11.9077 12.5683 11.8725 12.5478Z" />
                            <path d="M12 18.0201C11.8661 18.0201 11.75 17.904 11.75 17.7701V12.3301C11.75 12.1963 11.8661 12.0801 12 12.0801C12.1339 12.0801 12.25 12.1963 12.25 12.3301V17.7701C12.25 17.904 12.1339 18.0201 12 18.0201Z" />
                            <path d="M7.43331 16.1529L7.43191 16.1521C7.04677 15.9395 6.68157 15.5621 6.41179 15.101C6.14211 14.6402 5.99023 14.134 5.99023 13.6898V10.2998C5.99023 9.86275 6.14331 9.35942 6.41509 8.89684C6.68631 8.43523 7.05251 8.0538 7.43544 7.83557L10.6327 6.05711C10.6328 6.05704 10.633 6.05698 10.6331 6.05691C11.4022 5.63076 12.5984 5.63077 13.3675 6.05693C13.3676 6.05699 13.3677 6.05705 13.3678 6.05711L16.5671 7.83676L16.5685 7.83753C16.9537 8.05016 17.3189 8.42754 17.5887 8.88859C17.8584 9.34947 18.0103 9.85567 18.0103 10.2998V13.6898C18.0103 14.1269 17.8572 14.6302 17.5854 15.0928C17.3142 15.5544 16.9479 15.9358 16.565 16.1541L13.3672 17.9329L13.3671 17.9328L13.3642 17.9345C12.9971 18.142 12.5172 18.2498 12.0002 18.2498C11.4909 18.2498 11.0065 18.1351 10.6311 17.9316L7.43331 16.1529ZM12.0002 6.2498C11.6238 6.2498 11.2086 6.31604 10.8758 6.50359L7.67896 8.28189C7.67865 8.28206 7.67833 8.28223 7.67802 8.28241C7.32869 8.47521 7.03898 8.81235 6.84002 9.15217C6.64086 9.49233 6.49023 9.90756 6.49023 10.2998V13.6898C6.49023 14.0863 6.64034 14.5016 6.84049 14.842C7.04033 15.1819 7.33012 15.5152 7.67791 15.7071C7.67826 15.7073 7.67861 15.7075 7.67896 15.7077L10.8742 17.4851C10.8747 17.4854 10.8752 17.4857 10.8758 17.486C11.2051 17.6716 11.623 17.7448 12.0002 17.7448C12.3774 17.7448 12.7953 17.6716 13.1246 17.486C13.1252 17.4857 13.1257 17.4854 13.1262 17.4851L16.3215 15.7077C16.3219 15.7075 16.3222 15.7073 16.3226 15.7071C16.6718 15.5143 16.9615 15.1772 17.1605 14.8375C17.3596 14.4973 17.5103 14.0821 17.5103 13.6898V10.2998C17.5103 9.90327 17.3602 9.48798 17.16 9.1476C16.9601 8.80771 16.6703 8.47439 16.3225 8.28241C16.3221 8.28224 16.3218 8.28206 16.3215 8.28189L13.1262 6.50452C13.1257 6.50421 13.1251 6.5039 13.1246 6.50359C12.7918 6.31604 12.3766 6.2498 12.0002 6.2498Z" />
                        </svg>
                        Product
                        <svg className="menu__item-arrow" width="6" stroke="#9197B3" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link
                        className={linkActive === "/customers" ? "menu__item-link menu__item-link--active" : "menu__item-link"}
                        to="/customers"
                        onClick={() => NavigateOnClickMenuItem("/customers")}
                    >
                        <svg className="menu__item-img" width="24" height="24" viewBox="0 0 24 24" stroke="#9197B3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.79478 21.861L5.79478 21.861L5.79172 21.8601C5.68699 21.8293 5.60462 21.7207 5.60957 21.5934C5.83669 18.9385 8.57437 16.7197 12.0006 16.7197C15.429 16.7197 18.1604 18.9321 18.3924 21.602C18.4023 21.7238 18.3334 21.8247 18.2132 21.859L18.2132 21.859L18.2065 21.861C17.3382 22.1224 16.2904 22.2498 15.0006 22.2498H9.00063C7.71082 22.2498 6.66302 22.1224 5.79478 21.861ZM6.23866 20.9268L6.09526 21.4462L6.62401 21.5504C7.32489 21.6884 8.10895 21.7498 9.00063 21.7498H15.0006C15.8923 21.7498 16.6764 21.6884 17.3772 21.5504L17.906 21.4462L17.7626 20.9268C17.1552 18.7264 14.7119 17.2197 12.0006 17.2197C9.28933 17.2197 6.84605 18.7264 6.23866 20.9268Z" />
                            <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.9999 14.42C9.88757 14.42 8.16992 12.6954 8.16992 10.58C8.16992 8.46616 9.88607 6.75 11.9999 6.75C14.1138 6.75 15.8299 8.46616 15.8299 10.58C15.8299 12.6954 14.1123 14.42 11.9999 14.42ZM11.9999 7.25C10.1638 7.25 8.66992 8.74388 8.66992 10.58C8.66992 12.425 10.1626 13.92 11.9999 13.92C13.8372 13.92 15.3299 12.425 15.3299 10.58C15.3299 8.74388 13.836 7.25 11.9999 7.25Z" />
                        </svg>
                        Customers
                        <svg className="menu__item-arrow" width="6" stroke="#9197B3" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link
                        className={linkActive === "/income" ? "menu__item-link menu__item-link--active" : "menu__item-link"}
                        to="/income"
                        onClick={() => NavigateOnClickMenuItem("/income")}
                    >
                        <svg className="menu__item-img" width="24" height="24" viewBox="0 0 24 24" stroke="#9197B3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7516 16.8604V18.8904C10.7516 20.6104 9.15158 22.0004 7.18158 22.0004C5.21158 22.0004 3.60156 20.6104 3.60156 18.8904V16.8604C3.60156 18.5804 5.20158 19.8004 7.18158 19.8004C9.15158 19.8004 10.7516 18.5704 10.7516 16.8604Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.7501 14.11C10.7501 14.61 10.6101 15.07 10.3701 15.47C9.78006 16.44 8.57004 17.05 7.17004 17.05C5.77004 17.05 4.56003 16.43 3.97003 15.47C3.73003 15.07 3.59009 14.61 3.59009 14.11C3.59009 13.25 3.99007 12.48 4.63007 11.92C5.28007 11.35 6.17003 11.01 7.16003 11.01C8.15003 11.01 9.04006 11.36 9.69006 11.92C10.3501 12.47 10.7501 13.25 10.7501 14.11Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.7516 14.11V16.86C10.7516 18.58 9.15158 19.8 7.18158 19.8C5.21158 19.8 3.60156 18.57 3.60156 16.86V14.11C3.60156 12.39 5.20158 11 7.18158 11C8.17158 11 9.06161 11.35 9.71161 11.91C10.3516 12.47 10.7516 13.25 10.7516 14.11Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 10.9699V13.03C22 13.58 21.56 14.0299 21 14.0499H19.0399C17.9599 14.0499 16.97 13.2599 16.88 12.1799C16.82 11.5499 17.0599 10.9599 17.4799 10.5499C17.8499 10.1699 18.36 9.94995 18.92 9.94995H21C21.56 9.96995 22 10.4199 22 10.9699Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Income
                        <svg className="menu__item-arrow" width="6" stroke="#9197B3" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link
                        className={linkActive === "/promote" ? "menu__item-link menu__item-link--active" : "menu__item-link"}
                        to="/promote"
                        onClick={() => NavigateOnClickMenuItem("/promote")}
                    >
                        <svg className="menu__item-img" width="24" height="24" viewBox="0 0 24 24" stroke="#9197B3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6975 21.7108L10.6975 21.7108L10.6936 21.7069L9.17356 20.1869L8.82001 20.5404L9.17356 20.1868C9.0437 20.057 8.86118 19.9642 8.72588 19.9083C8.59146 19.8528 8.39876 19.7904 8.22 19.7904H6.06C5.03617 19.7904 4.20999 18.9642 4.20999 17.9403V15.7804C4.20999 15.6016 4.14764 15.4089 4.09212 15.2745C4.03624 15.1392 3.94341 14.9567 3.81354 14.8268L2.29355 13.3069L1.94176 13.6586L2.29355 13.3069C1.94578 12.9591 1.75 12.4955 1.75 12.0003C1.75 11.5002 1.93904 11.0405 2.28956 10.6978L2.28958 10.6978L2.29356 10.6939L3.81354 9.17384C3.81354 9.17384 3.81355 9.17383 3.81355 9.17383C3.9434 9.04398 4.03623 8.86147 4.09212 8.72618C4.14764 8.59176 4.20999 8.39906 4.20999 8.2203V6.06039C4.20999 5.03651 5.03617 4.21029 6.06 4.21029H8.22C8.39876 4.21029 8.59146 4.14795 8.72588 4.09243C8.86118 4.03654 9.0437 3.94371 9.17356 3.81385L9.17357 3.81384L10.6936 2.29382C11.3783 1.60909 12.6217 1.60909 13.3064 2.29383L14.8264 3.81384L15.1749 3.46542L14.8264 3.81385C14.9563 3.94371 15.1388 4.03654 15.2741 4.09242C15.4085 4.14795 15.6012 4.21029 15.78 4.21029H17.94C18.9638 4.21029 19.79 5.03651 19.79 6.06039V8.2203C19.79 8.39906 19.8524 8.59176 19.9079 8.72618C19.9638 8.86148 20.0566 9.04398 20.1864 9.17384L21.7064 10.6939C22.0542 11.0416 22.25 11.5051 22.25 12.0003C22.25 12.5004 22.0609 12.9602 21.7104 13.3029L21.7104 13.3029L21.7064 13.3069L20.1864 14.8269C20.0566 14.9567 19.9638 15.1392 19.9079 15.2745C19.8523 15.4089 19.79 15.6016 19.79 15.7804V17.9403C19.79 18.9642 18.9638 19.7904 17.94 19.7904H15.78C15.6012 19.7904 15.4085 19.8528 15.2741 19.9083C15.1388 19.9642 14.9563 20.057 14.8264 20.1868L13.3064 21.7069L13.3064 21.7068L13.3025 21.7108C12.9598 22.0613 12.5001 22.2503 12 22.2503C11.4999 22.2503 11.0402 22.0613 10.6975 21.7108ZM19.8336 9.5268L19.48 9.88034L19.8336 9.52679C19.5269 9.22011 19.29 8.64706 19.29 8.2203V6.06039C19.29 5.31433 18.6862 4.71029 17.94 4.71029H15.78C15.3532 4.71029 14.7802 4.47346 14.4736 4.1668L12.9536 2.64678L12.6 3.00033L12.9536 2.64678C12.4383 2.13152 11.5617 2.13152 11.0464 2.64678L11.4 3.00033L11.0464 2.64678L9.52644 4.1668L9.88 4.52035L9.52644 4.1668C9.21979 4.47346 8.64679 4.71029 8.22 4.71029H6.06C5.31379 4.71029 4.70999 5.31432 4.70999 6.06039V8.2203C4.70999 8.64706 4.47312 9.22011 4.16644 9.52679L4.16643 9.5268L2.64645 11.0469C2.39515 11.2982 2.25 11.6342 2.25 12.0003C2.25 12.3663 2.3951 12.7025 2.64645 12.9539L4.16644 14.4739L4.51999 14.1203L4.16644 14.4739C4.47311 14.7805 4.70999 15.3536 4.70999 15.7804V17.9403C4.70999 18.6864 5.31379 19.2904 6.06 19.2904H8.22C8.64681 19.2904 9.21981 19.5272 9.52644 19.8339L9.88 19.4803L9.52645 19.8339L11.0464 21.3539C11.5617 21.8691 12.4383 21.8691 12.9536 21.3539L14.4736 19.8339C14.7802 19.5272 15.3532 19.2904 15.78 19.2904H17.94C18.6862 19.2904 19.29 18.6864 19.29 17.9403V15.7804C19.29 15.3536 19.5269 14.7805 19.8336 14.4739L21.3536 12.9539C21.6049 12.7025 21.75 12.3663 21.75 12.0003C21.75 11.6342 21.6049 11.2982 21.3536 11.0469L19.8336 9.5268Z" />
                            <path d="M15.0002 15.5C14.7131 15.5 14.4902 15.2706 14.4902 15C14.4902 14.7261 14.7163 14.5 14.9902 14.5C15.264 14.5 15.4902 14.7261 15.4902 15C15.4902 15.2804 15.2675 15.5 15.0002 15.5Z" />
                            <path d="M9.01001 9.5C8.7229 9.5 8.5 9.27062 8.5 9C8.5 8.72614 8.72614 8.5 9 8.5C9.27386 8.5 9.5 8.72614 9.5 9C9.5 9.28043 9.27734 9.5 9.01001 9.5Z" />
                            <path d="M9.1759 15.1759L9.52945 15.5295L9.1759 15.176C9.12461 15.2272 9.064 15.2495 8.99945 15.2495C8.93491 15.2495 8.8743 15.2272 8.82301 15.176C8.72827 15.0812 8.72827 14.9178 8.82301 14.8231L14.8231 8.82301C14.9178 8.72827 15.0812 8.72827 15.176 8.82301C15.2707 8.91774 15.2707 9.08122 15.176 9.17596L9.1759 15.1759Z" />
                        </svg>

                        Promote
                        <svg className="menu__item-arrow" width="6" stroke="#9197B3" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link
                        className={linkActive === "/help" ? "menu__item-link menu__item-link--active" : "menu__item-link"}
                        to="/help"
                        onClick={() => NavigateOnClickMenuItem("/help")}
                    >
                        <svg className="menu__item-img" width="24" height="24" viewBox="0 0 24 24" stroke="#9197B3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.40704 21.6696L7.40285 21.6674C7.00232 21.4566 6.75 21.0302 6.75 20.5699V19.15V18.6987L6.30106 18.6526C4.904 18.5092 3.77429 17.9287 2.99282 17.0408C2.21066 16.1522 1.75 14.9243 1.75 13.4399V7.43994C1.75 5.83448 2.28687 4.53018 3.18855 3.62849C4.09024 2.72681 5.39454 2.18994 7 2.18994H17C18.6055 2.18994 19.9098 2.72681 20.8114 3.62849C21.7131 4.53018 22.25 5.83448 22.25 7.43994V13.4399C22.25 15.0454 21.7131 16.3497 20.8114 17.2513C19.9098 18.153 18.6055 18.6899 17 18.6899H13.23H13.0786L12.9526 18.7739L8.69596 21.6118C8.69543 21.6121 8.69491 21.6125 8.69439 21.6128C8.48661 21.7485 8.24258 21.8199 8 21.8199C7.80136 21.8199 7.59297 21.7698 7.40704 21.6696ZM7.62275 21.2087L7.62279 21.2088C7.7865 21.307 8.09582 21.3908 8.40845 21.1918L8.4085 21.1919L8.41693 21.1863L12.8669 18.2263L12.8674 18.226C12.9122 18.1961 12.9668 18.18 13.01 18.18H17.01C18.4099 18.18 19.6074 17.7248 20.4561 16.8761C21.3047 16.0274 21.76 14.8299 21.76 13.43V7.42993C21.76 6.03004 21.3047 4.83257 20.4561 3.98388C19.6074 3.13518 18.4099 2.67993 17.01 2.67993H7C5.60011 2.67993 4.40264 3.13518 3.55395 3.98388C2.70525 4.83257 2.25 6.03004 2.25 7.42993V13.43C2.25 14.8299 2.70525 16.0274 3.55395 16.8761C4.40264 17.7248 5.60011 18.18 7 18.18C7.13386 18.18 7.25 18.2961 7.25 18.43V20.56C7.25 20.9525 7.51575 21.1445 7.62275 21.2087Z" />
                            <path d="M11.9998 11.6099C11.8659 11.6099 11.7498 11.4938 11.7498 11.3599V11.1499C11.7498 10.2732 12.377 9.83611 12.7015 9.61303C12.8997 9.47896 13.0812 9.33433 13.2098 9.15518C13.3541 8.954 13.4098 8.74154 13.4098 8.5199C13.4098 7.74379 12.776 7.10986 11.9998 7.10986C11.2236 7.10986 10.5898 7.74379 10.5898 8.5199C10.5898 8.65376 10.4737 8.7699 10.3398 8.7699C10.206 8.7699 10.0898 8.65378 10.0898 8.5199C10.0898 7.46602 10.946 6.60986 11.9998 6.60986C13.0537 6.60986 13.9098 7.46604 13.9098 8.5199C13.9098 9.37737 13.2904 9.81521 12.9809 10.0249C12.7742 10.1628 12.5849 10.3108 12.452 10.4963C12.3021 10.7057 12.2498 10.9248 12.2498 11.1499V11.3599C12.2498 11.4994 12.138 11.6099 11.9998 11.6099Z" />
                            <path d="M12 14.1001C11.8605 14.1001 11.75 13.9883 11.75 13.8501C11.75 13.7162 11.8661 13.6001 12 13.6001C12.1339 13.6001 12.25 13.7162 12.25 13.8501C12.25 13.9883 12.1395 14.1001 12 14.1001Z" />
                        </svg>
                        Help
                        <svg className="menu__item-arrow" width="6" stroke="#9197B3" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </li>
            </ul>
            <div className="user">
                <img className="user__photo" src={user} alt="Evano" />
                <div className="user__description">
                    <h3 className="user__name">Evano</h3>
                    <p className="user__profession">Project manager</p>
                </div>
            </div>
        </nav >
    )
}

export default LeftSideMenu