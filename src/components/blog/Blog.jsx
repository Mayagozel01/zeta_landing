import new_blog from "./../../assets/images/new.png";
import girl from "./../../assets/images/girl.png";
import calendar from "./../../assets/images/calendar.png";
import chatting from "./../../assets/images/chatting.svg";
import faq from "./../../assets/images/faq.png";
import phone from "./../../assets/images/phone.png";
import arrow from "./../../assets/images/arrow.png";

const Blog = () => {
  return (
    <div className="container bg-[#FFFFF0]">
      <div className="new flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src={new_blog} alt="pic" />
          <h1 className="text-[#182E3C] text-[28px] sm:text-[28px] md:text-[36px] lg:text-[50px] xl:text-[60px] font-[600] text-center">
            Our latest <span className="text-[#85D5C8]">News & Blogs</span>
          </h1>
        </div>

        <div className="container flex flex-col lg:flex-row md:flex-col sm:flex-col bg-[#FFFFFF] items-start sm:items-start md:items-start">
          <img
            src={girl}
            alt="Person"
            className="w-[475px] h-[473px] sm:w-full md:w-full lg:w-[475px]"
          />
          <div className="flex flex-col m-6 gap-6 w-full sm:w-full md:w-full lg:w-auto">
            <p className="font-[600] text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] flex gap-2 items-center">
              <img
                src={calendar}
                alt="Calendar"
                className="w-[33px] h-[33px] object-cover ml-4"
              />
              12.12.2025
            </p>
            <h1 className="text-[#182E3C] font-[600] text-[28px] sm:text-[28px] md:text-[36px] lg:text-[50px] xl:text-[55px] capitalize">
              the future of web development
            </h1>
            <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#182E3C] font-[400]">
              In an era where the internet is the backbone of business and communication,
              web developers are the architects of the digital landscape. A web developer
              is a skilled professional who designs, builds, and maintains websites,
              ensuring they are functional, user-friendly, and visually appealing. Their
              work powers everything from small business sites to global e-commerce
              platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="faq mt-24 flex flex-col gap-24">
        <div className="flex flex-col gap-4 items-center">
          <img src={faq} alt="faq" className="w-[120px] sm:w-[120px] md:w-[150px] lg:w-[185px]" />
          <h1 className="text-[#023938] font-[600] text-[28px] sm:text-[28px] md:text-[36px] lg:text-[50px] xl:text-[60px] text-center">
            Questions? Look here
          </h1>
        </div>

        <div className="container w-full flex flex-col lg:flex-row md:flex-col sm:flex-col justify-between gap-4 sm:justify-start md:justify-start items-start sm:items-start md:items-start bg-[#FFFFFF]">
          <div className="flex flex-col gap-4 w-full sm:w-full md:w-full lg:w-[50%]">
            {[
              "What services does your company provide?",
              "Do you offer customized IT solutions?",
              "How can I contact your support team?",
              "How secure are your IT solutions?",
            ].map((question, idx) => (
              <h1
                key={idx}
                className="flex justify-between bg-[#024241] p-4 sm:p-4 md:p-6 text-[#FFFFF0] font-[500] text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] rounded-[12px] text-center sm:text-start md:text-start"
              >
                {question}
                <img src={arrow} alt="Arrow" className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
              </h1>
            ))}
          </div>

          <div className="w-full sm:w-full md:w-full lg:w-auto flex flex-col gap-4">
            <div className="rounded-[12px] bg-[#024241] p-4 flex flex-col items-center gap-2">
              <img src={chatting} alt="Chatting Icon" className="w-[50px] sm:w-[50px] md:w-[60px] lg:w-[70px] h-[50px] sm:h-[50px] md:h-[60px] lg:h-[70px]" />
              <h1 className="font-[600] text-[16px] sm:text-[16px] md:text-[18px] lg:text-[22px] text-white text-center">
                You have different questions?
              </h1>
              <p className="font-[500] text-white text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] text-center">phone: +993 61 439252</p>
              <p className="font-[500] text-white text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] text-center">email: artvision2024@gmail.com</p>
            </div>

            <div className="mt-4 p-4 flex justify-center items-center gap-2 bg-[#FFFFFF] rounded-[12px]">
              <img src={phone} alt="Phone Icon" className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] object-cover" />
              <div className="flex flex-col gap-2">
                <p className="font-[500] text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Support manager</p>
                <p className="font-[600] text-[20px] sm:text-[20px] md:text-[24px] lg:text-[30px]">24/7 Service</p>
                <p className="font-[500] text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px]">+993 61 439252</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
