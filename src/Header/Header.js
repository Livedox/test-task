import "./style.scss";
import HeaderMenuContainer from "../HeaderMenuContainer/HeaderMenuContainer";
import background from "./background.png";
import SeeMore from "../SeeMore/SeeMore";

export default function Header() {
    return (
        <header className="header" style={{backgroundImage: `url(${background})`}}>
            <HeaderMenuContainer />
            <SeeMore txt="scroll down to see more" cls="header__see-more" />
        </header>
    );
}

