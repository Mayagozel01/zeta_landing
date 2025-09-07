import "./banner.css";
import logogreen from "./../../assets/images/logo__green.png";
import Header from "../header/Header";

const Banner = ()=>{
    return(
        <div className="banner container w-full h-[80vh] flex flex-col items-center gap-[10%] justify-center">
       <Header/>
       <div className="banner__title w-[70%]">
        <img src={logogreen} alt="logo" />
       </div>
        </div>
    )
}


export default Banner;