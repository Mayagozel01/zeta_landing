import logo__green from "./../../assets/images/logo_zeta.png";
import send from "./../../assets/images/send.svg";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#024241] container relative">
      <header className="flex w-full justify-between items-center flex-col lg:flex-row md:flex-col sm:flex-col border-[#85D5C866] py-8">
        <h1 className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[50px] xl:text-[60px] font-[600] text-[#FFFFF0] text-center">
          Let's Connect There
        </h1>
        <button className="bg-[#FFFFF0] font-[500] text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#023938] rounded-[10px] h-[40px] w-[130px] mt-4 lg:mt-0">
          Contact us
        </button>
      </header>

      <main className="flex flex-col items-center w-full gap-10 my-10">
        <section className="w-full flex flex-col items-center">
          <img src={logo__green} alt="ZETA Logo" className="mb-4" />
          <p className="font-[500] text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white text-center px-4 lg:px-0">
            At ZETA IT LAB, we blend creativity and technology to bring your ideas to life.
          </p>
        </section>

        <nav className="w-full flex flex-col items-center">
          <h2 className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-white">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2 flex flex-col items-center">
            {["About us", "Careers", "Our team", "Testimonials", "FAQs"].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-blue-400 font-[500] text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <aside className="w-full flex flex-col items-center">
          <h2 className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-white">
            Contact
          </h2>
          <p className="mt-4 font-[500] text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-white">
            phone: +993 61432592
          </p>
          <p className="font-[500] text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-white">
            email: info@zeta-itlab.com
          </p>
          <p className="font-[500] text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-white text-center mt-2 lg:mt-4">
            Beyik Saparmurat Turkmenbash st. 8L, Ashgabat 744000, Turkmenistan
          </p>
        </aside>

        <div className="w-full flex flex-col items-center gap-2">
          <h2 className="font-[600] text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white">
            Get the latest information
          </h2>
          <div className="flex gap-4 items-stretch w-full flex-col lg:flex-row md:flex-col sm:flex-col px-4 lg:px-0">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="p-2 w-full text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-white bg-transparent border border-[#FFFFFF] rounded"
            />
            <button className="flex items-center justify-center bg-[#85D5C8] p-2 rounded">
              <img
                src={send}
                alt="Send Icon"
                className="w-[22px] sm:w-[22px] md:w-[22px] lg:w-[22px] h-[24px]"
              />
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full flex items-center justify-center text-center text-white mt-10 h-[54px] bg-gradient-to-r from-[#023938] to-[#012121]">
        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
          © 2025 All rights reserved ZETA IT LAB
        </p>
      </footer>
    </div>
  );
};

export default Footer;
