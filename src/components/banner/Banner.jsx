import "./banner.css";
import logogreen from "./../../assets/images/logo__green.png";
import Header from "../header/Header";

const Banner = () => {
    return (
        <div className="banner container">
            <Header />
            <div className="banner__title">
                <img src={logogreen} alt="logo" />
            </div>
        </div>
    );
};

export default Banner;
