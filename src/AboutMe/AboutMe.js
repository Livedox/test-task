import personImg from "./jason-wood.png";
import "./style.scss";


export default function AboutMe() {
    return (
        <div className="about-me">
            <div className="about-me__img-container">
                <img src={personImg} alt="" className="about-me__img" />
            </div>
            <div className="about-me__txt-container">
                <h2 className="about-me__title">About Me</h2>
                <p className="about-me__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p className="about-me__sub-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <h3 className="about-me__name">Jason Wood</h3>
            </div>
        </div>
    )
}