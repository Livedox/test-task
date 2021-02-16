import AboutMe from "../AboutMe/AboutMe";
import Menu from "../Menu/Menu";
import SeeMore from "../SeeMore/SeeMore";

export default function AboutMeContainer() {
    return (
        <div className="about-me-container">
            <Menu />
            <AboutMe />
            <SeeMore txt="keep scrolling, there is still more to come." />
        </div>
    )
}