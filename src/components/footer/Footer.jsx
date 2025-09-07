import logo__green from "./../../assets/images/logo_zeta.png";
import send from "./../../assets/images/send.svg";

const Footer = ()=>{

    return (
            <div className="flex flex-col bg-[#024241] container relative">
          <header className="flex w-full justify-between items-center border-b-1 border-[#85D5C866] py-8">
            <h1 className="text-[60px] font-[600] text-[#FFFFF0]">Let's Connect There</h1>
            <button className="bg-[#FFFFF0] font-[500] text-[18px] text-[#023938] rounded-[10px] h-[40px] w-[130px]">Contact us</button>
          </header>

          <main className="flex flex-row justify-evenly w-full gap-20 my-10 ">
            <section className=" ">
              <img src={logo__green} alt="ZETA Logo" className="mb-4" />
              <p className="font-[500] text-[18px] text-white">At ZETA IT LAB, we blend creativity and technology to bring your ideas to life.</p>
            </section>
            <nav className=" ">
              <h2 className="text-2xl font-semibold text-white">Navigation</h2>
              <ul className="mt-4 space-y-2">
                <li><a href="#about" className="hover:text-blue-400 font-[500] text-[18px] text-white">About us</a></li>
                <li><a href="#careers" className="hover:text-blue-400 font-[500] text-[18px] text-white">Careers</a></li>
                <li><a href="#team" className="hover:text-blue-400 font-[500] text-[18px] text-white">Our team</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 font-[500] text-[18px] text-white">Testimonials</a></li>
                <li><a href="#faqs" className="hover:text-blue-400 font-[500] text-[18px] text-white">FAQs</a></li>
              </ul>
            </nav>
            <aside className="">
              <h2 className="text-2xl font-semibold text-white">Contact</h2>
              <p className="mt-4 font-[500] text-[16px] text-white">phone: +993 61432592</p>
              <p className="font-[500] text-[16px] text-white">email: info@zeta-itlab.com</p>
              <br />
                <br />
              <p className="font-[500] text-[16px] text-white">Beyik Saparmurat Turkmenbash st. 8L, Ashgabat 744000, Turkmenistan</p>
            </aside>

            <div className=" flex flex-col gap-2  justify-center"> 
            <h2 className="font-[600] text-white">Get the lastest information</h2>
                <div className="flex gap-4 items-stretch">
                <input  type="email" placeholder="example@gmail.com"
                 className="p-2 w-full text-[12px] text-white bg-transparent border border-[#FFFFFF] rounded" />
              <button className="flex items-center justify-center bg-[#85D5C8] p-2 rounded">
                <img src={send} alt="sendpic" className="w-[22px]" />
              </button>
              </div>
            </div>
          </main>


          
          <footer className="w-full flex items-center justify-center text-center text-white absolute bottom-0 left-0 h-[54px]  bg-linear-[90deg,#023938_10%,#012121_100%]">
            <p>© 2025 All rights reserved ZETA IT LAB</p>
          </footer>
        </div>)
}
export default Footer;