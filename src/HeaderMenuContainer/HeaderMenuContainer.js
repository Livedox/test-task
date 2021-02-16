import Menu from "../Menu/Menu";
import "./style.scss";
import { useState } from "react";

export default function HeaderMenuContainer() {
    const [isMenuActive, setMenuActive] = useState(false);
    function toggleMenu() {
        setMenuActive(!isMenuActive);
    }
    return(
        <div className="header-menu-container">
            <div className="header-menu-container__title" onClick={toggleMenu}>∞ MENU</div>
            <Menu cls="header-menu-container__menu" isActive={isMenuActive} />
        </div>
    );
}

