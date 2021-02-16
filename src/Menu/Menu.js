import "./style.scss";

export default function Menu({ cls = "", isActive}) {
    return(
        <div className={"menu " + cls + (isActive ? " active" : "")}>
            <a className="menu__link">Home</a>
            <a className="menu__link">About us</a>
            <a className="menu__link">Portfolio</a>
            <a className="menu__link">Contact</a>
        </div>
    )
}