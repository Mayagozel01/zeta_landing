import { useState } from 'react';
import header__logo from './../../assets/images/logo_zeta.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full bg-transparent ">
            <div className=" mx-auto flex justify-between items-center py-4 md:px-0 sm:px-0">
           
                <div className="header__logo">
                    <img src={header__logo} alt="logo" className="h-12" />
                </div>

                <button
    className="md:hidden z-50 focus:outline-none"
    onClick={toggleMenu}
    aria-label="Toggle menu"
>
    <div className="w-8 h-8 flex flex-col justify-center gap-2 items-end">
        <span
            className={`block h-1 w-full bg-[#FFFFF0] rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-3' : ''
            }`}
        ></span>
        <span
            className={`block h-1 w-6 bg-[#FFFFF0] rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : ''
            }`}
        ></span>
        <span
            className={`block h-1 w-4 bg-[#FFFFF0] rounded-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-3' : ''
            }`}
        ></span>
    </div>
</button>

                <nav
                    className={`fixed md:static top-0 right-0 h-full md:h-auto w-64 md:w-auto bg-gray-900 md:bg-transparent transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:translate-x-0 flex flex-col md:flex-row gap-6 md:gap-[60px] items-center pt-20 md:pt-0 z-40`}
                >
                    <a
                        href="#"
                        className="text-[#FFFFF0] font-medium text-xl hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-[#FFFFF0] font-medium text-xl hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="text-[#FFFFF0] font-medium text-xl hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="text-[#FFFFF0] font-medium text-xl hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#"
                        className="text-[#FFFFF0] font-medium text-xl hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        IT Consulting
                    </a>
                    <a
                        href="#"
                        className="text-[#FFFFF0] font-medium text-xl hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact Us
                    </a>
                    <div className="auth md:hidden">
                        <button
                            className="bg-[#FFFFFF] text-[#013A39] font-medium py-[9px] px-[28px] rounded-[12px] hover:bg-gray-200 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </button>
                    </div>
                </nav>

                {/* Login Button (visible on desktop) */}
                <div className="auth hidden md:block">
                    <button className="bg-[#FFFFFF] text-[#013A39] font-medium py-[9px] px-[28px] rounded-[12px] hover:bg-gray-200 transition-colors">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;