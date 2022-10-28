import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../scss/style.scss";
import setting from "../img/setting.svg";
import LeftSideMenu from "./Components/LeftSideMenu";

const MainLayout = () => {

    const location = useLocation();
    const [linkActive, setLinkActive] = React.useState(location.pathname);
    const [openMenu, setOpenMenu] = React.useState(false);

    const onClickOpenMenu = () => {

    }

    const NavigateOnClickMenuItem = (pathname) => {
        setLinkActive(pathname);
        if (openMenu === true) {
            setOpenMenu(false);
        }
    }


    return (
        <div className="wrapper" style={{ overflow: openMenu && "hidden" }}>
            <header className="header">
                <svg className="header__menu" onClick={() => setOpenMenu(true)} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" height="26px">
                    <path d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z" />
                </svg>
                <div className="logo">
                    <img className="logo__img" src={setting} alt="setting" />
                    <h3 className="logo__name">Dashboard<span className="logo__version"> v.01</span></h3>
                </div>
            </header>
            <LeftSideMenu linkActive={linkActive} openMenu={openMenu} NavigateOnClickMenuItem={NavigateOnClickMenuItem} setting={setting} />
            <Outlet />
        </div>
    )
}

export default MainLayout;