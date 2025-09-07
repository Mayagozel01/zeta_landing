import grid_1 from "./../../assets/images/grid-1.png";
import grid_2 from "./../../assets/images/grid-2.png";
import grid_3 from "./../../assets/images/grid-3.png";
import grid_4 from "./../../assets/images/grid-4.png";
import grid_star from "./../../assets/images/grid-star.png";
import about_us from "./../../assets/images/about-us.svg";
import "./aboutus.css";

const AboutUs = ()=>{
    return (
        <div className="container py-[50px] about__us flex gap-[80px] items-start">
            <div className="aboutus__images relative flex flex-col gap-[24px]">
                <div className="flex gap-[24px]">
                        <img src={grid_1} alt="pic" className="grid-1"/>
                        <div className="grid-1-div absolute left-[-20px] top-[-20px]">
                    </div>
                    <img src={grid_2} alt="pic2" className="grid-2"/>
                </div>
                <div className="flex gap-[24px]">
                    <img src={grid_3} alt="pic" className="grid-3"/>
                    <img src={grid_4} alt="pic2" className="grid-4"/>
                </div>
             
                <img src={grid_star} alt="stars" className="absolute bottom-0 left-[-80px] w-[128px] object-cover"/>
            </div>
            <div className="aboutus__text min-h-full">
                <div className="">
                    <img src={about_us} alt="pin" />
                
                
                <div className="aboutus__title  flex flex-col gap-[50px]">
                    <h1>Transforming ideas into Digital Reality</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
                </div>
                <div className="aboutus-text-1 flex justify-around  my-[100px]">
                    <div className="flex flex-col gap-[30px] justify-around items-center p-4"><h1>+150</h1><p>Take orders</p></div>
                    <div className="flex flex-col gap-[30px] justify-around items-center p-4"><h1>+2000</h1><p>Happy clients</p></div>
                    <div className="flex flex-col gap-[30px] justify-around items-center p-4"><h1>99%</h1><p>Customer reviews</p></div>

                </div>
            </div>
        </div>
    )
}
export default AboutUs;