import new_blog from "./../../assets/images/new.png";
import girl from "./../../assets/images/girl.png";
import calendar from "./../../assets/images/calendar.png";
import chatting from "./../../assets/images/chatting.svg";
import faq from "./../../assets/images/faq.png";
import phone from "./../../assets/images/phone.png"
import arrow from "./../../assets/images/arrow.png"

const Blog  = ()=>{
    return(
    <div className="container bg-[#FFFFF0]">
        <div className="new flex flex-col gap-16 ">
            <div className="flex flex-col items-center justify-center gap-6">
                <img src={new_blog} alt="pic" />
                <h1 className="text-[#182E3C] text-[60px] font-[600]">Our latest <span className="text-[#85D5C8]">News & Blogs</span></h1>
            </div>
            <div className="flex  bg-[#FFFFFF]">
                <img src={girl} alt="girl" className="w-[475px] h-[473px] " />
                <div className="flex flex-col m-6 gap-6">
                    <p className="font-600 text-[23px] flex gap-2"><img src={calendar} alt="cal" className="w-[33px] h-[33px] cover ml-4" />12.12.2025</p>
                    <h1 className="text-[#182E3C] font-[600] text-[55px] capitalize">the future of web development</h1>
                    <p className="text-[20px] text-[#182E3C] font-[400]">
                        In an era where the internet is the backbone of business and communication, web developers are the architects of the digital landscape. A web developer is a skilled professional who designs, builds, and maintains websites, ensuring they are functional, user-friendly, and visually appealing. Their work powers everything from small business sites to global e-commerce platforms.
</p>
                </div>
            </div>
        </div>
        <div className="faq mt-24 flex flex-col gap-24">
            <div className="flex flex-col gap-4">
                <img src={faq} alt="faq" className="w-[185px]"/>
                <h1 className="text-[#023938] font-[600] text-[60px]">Questions? Look here</h1>
            </div>
            <div className="w-full flex justify-between">
                <div className="flex flex-col gap-4 w-[50%]">
                    <h1 className="flex justify-between bg-[#024241] p-6 text-[#FFFFF0] font-[500] text-[24px] text-center rounded-[12px]">What services does your company provide?<img src={arrow} alt="arrow" /></h1>
                    <h1 className="flex justify-between bg-[#024241] p-6 text-[#FFFFF0] font-[500] text-[24px] text-center rounded-[12px]">Do you offer customized IT solutions?<img src={arrow} alt="arrow" /></h1>
                    <h1 className="flex justify-between bg-[#024241] p-6 text-[#FFFFF0] font-[500] text-[24px] text-center rounded-[12px]">How can I contact your support team?<img src={arrow} alt="arrow" /></h1>
                    <h1 className="flex justify-between bg-[#024241] p-6 text-[#FFFFF0] font-[500] text-[24px] text-center rounded-[12px]">How secure your IT solutions?<img src={arrow} alt="arrow" /></h1>
                </div>
                <div>
                    <div className="rounded-[12px] bg-[#024241] p-4 flex flex-col items-center gap-2">
                        <img src={chatting} alt="chat" className="w-[70px] h-[70px]" />
                        <h1 className="font-[600] text-[22px] text-white">You have different questions?</h1>
                        <p className="font-[500] text-white text-[14px]">phone: +993 61 439252</p>
                        <p className="font-[500] text-white text-[14px]">email: artvision2024@gmail.com</p>
                    </div>
                    <div className="mt-4 p-4 flex justify-center items-center gap-2 bg-[#FFFFFF]">
                        <img src={phone} alt="phone" className="w-80px object-cover"/>
                        <div className="flex flex-col gap-2">
                            <p className="font-[500] text-[20px]">Support manager</p>
                            <p className="font-[600] text-[30px]">24/7 Service</p>
                            <p className="font-[500] text-[20px]">+993 61 439252</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>)
}


export default Blog;