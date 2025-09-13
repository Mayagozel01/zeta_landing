import grid_1 from "./../../assets/images/grid-1.png";
import grid_2 from "./../../assets/images/grid-2.png";
import grid_3 from "./../../assets/images/grid-3.png";
import grid_4 from "./../../assets/images/grid-4.png";
import grid_star from "./../../assets/images/grid-star.png";
import about_us from "./../../assets/images/about-us.svg";
import "./aboutus.css";

const AboutUs = () => {
    return (
        <div className="container py-[50px] 
        about__us gap-[80px] flex flex-col lg:flex-row md:flex-col-reverse sm:flex-col-reverse lg:items-start 
        sm:items-center md:items-center lg:gap-[80px] md:gap-[40px] sm:gap-[30px]">
            <div className="aboutus__images relative flex flex-col gap-[24px] lg:gap-[24px] md:gap-[16px] sm:gap-[12px]">
                <div className="flex gap-[24px] lg:gap-[24px] md:gap-[16px] sm:gap-[12px]">
                    <img src={grid_1} alt="pic" className="grid-1" />
                    <div className="grid-1-div absolute left-[-20px] top-[-20px] lg:left-[-20px] md:left-[-15px] sm:left-[-15px] 
                    sm:top-[-15px] sm:left-[-10px]"></div>
                    <img src={grid_2} alt="pic2" className="grid-2" />
                </div>
                <div className="flex gap-[24px] lg:gap-[24px] md:gap-[16px] sm:gap-[12px]">
                    <img src={grid_3} alt="pic" className="grid-3" />
                    <img src={grid_4} alt="pic2" className="grid-4" />
                </div>
                <img
                    src={grid_star}
                    alt="stars"
                    className="absolute bottom-0 left-[-80px] w-[128px] object-cover
                     lg:left-[-80px] lg:w-[128px] md:left-[-60px] md:w-[96px] sm:left-[-40px] sm:w-[64px]"
                />
            </div>
            <div className="aboutus__text min-h-full">
                <div>
                    <img src={about_us} alt="pin" />
                    <div className="aboutus__title flex flex-col gap-[50px] lg:gap-[50px] md:gap-[30px] sm:gap-[20px]">
                        <h1 className="lg:text-[60px] md:text-[48px] sm:text-[36px] text-[28px]">Transforming ideas into Digital Reality</h1>
                        <p className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                    </div>
                </div>
                <div className="aboutus-text-1 flex justify-around my-[100px] lg:my-[100px] md:my-[60px] sm:my-[40px] flex-col lg:flex-row md:flex-col sm:flex-col">
                    <div className="flex flex-col gap-[30px] lg:gap-[30px] md:gap-[20px] sm:gap-[15px] justify-around items-center p-4">
                        <h1 className="lg:text-[52px] md:text-[42px] sm:text-[32px] text-[24px]">+150</h1>
                        <p className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">Take orders</p>
                    </div>
                    <div className="flex flex-col gap-[30px] lg:gap-[30px] md:gap-[20px] sm:gap-[15px] justify-around items-center p-4">
                        <h1 className="lg:text-[52px] md:text-[42px] sm:text-[32px] text-[24px]">+2000</h1>
                        <p className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">Happy clients</p>
                    </div>
                    <div className="flex flex-col gap-[30px] lg:gap-[30px] md:gap-[20px] sm:gap-[15px] justify-around items-center p-4">
                        <h1 className="lg:text-[52px] md:text-[42px] sm:text-[32px] text-[24px]">99%</h1>
                        <p className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">Customer reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;