import './header.css'
import header__logo from './../../assets/images/logo_zeta.png';

const Header = ()=>{
    return(
        <div className="w-full flex justify-between justify-self-start items-center">
            <div className="header__logo">
                <img src={header__logo} alt="logo" />
            </div>
            <div className="header__menu flex gap-[60px]">
                <a href="#">Home</a>
                <a href="#">About </a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">IT consulting</a>
                <a href="#">Contact us</a>
            </div>
            <div className="auth"><button>Login</button></div>
        </div>
    )
}

export default Header;