import doubleArrow from "./double-arrow.png";
import "./style.scss";

export default function SeeMore({ txt, cls = "" }) {
    return(
        <div className={"see-more " + cls}>
            <p className="see-more__txt">{txt}</p>
            <img  className="see-more__img" src={doubleArrow} alt="" />
        </div>
    );
}