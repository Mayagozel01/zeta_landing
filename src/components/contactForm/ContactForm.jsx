import inst from "./../../assets/images/inst.png";
import telegram from "./../../assets/images/telegram.png";
import fb from "./../../assets/images/fb.png";
import services from "./../../assets/images/services.png";

const ContactForm = () => {
  return (
    <div className="container flex flex-col lg:flex-row md:flex-col sm:flex-col justify-start sm:justify-start md:justify-start items-stretch bg-[#FFFFF0]">
      {/* Left Panel */}
      <div className="flex flex-col justify-between gap-10 w-full sm:w-full md:w-full lg:w-1/3 bg-[#024241] rounded-md text-white px-[60px] py-[50px]">
        <div>
          <h2 className="text-[36px] font-[600] mb-4">Address</h2>
          <p>Beyik Saparmurat Turkmenbashi str. 81, Ashgabat 744000, Turkmenistan</p>
          <h2 className="text-[36px] font-[600] mt-6 mb-4">Contact</h2>
          <p className="font-[500] text-[16px]">phone: +993 12 345 678</p>
          <p className="font-[500] text-[16px]">email: info@company.com</p>
          <h2 className="text-[36px] font-[600] mt-6 mb-4">Open time</h2>
          <p>Monday - Saturday: 09:00 - 18:00</p>
        </div>
        <div>
          <h2 className="text-[36px] font-[600]">Stay connected</h2>
          <div className="flex space-x-4 py-6">
            <img src={telegram} alt="Telegram" />
            <img src={inst} alt="Instagram" />
            <img src={fb} alt="Facebook" />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full sm:w-full md:w-full lg:w-2/3 p-6 bg-[#FFFFF0]">
        <img src={services} alt="Services" className="max-w-full h-auto" />
        <h1 className="text-[60px] font-[600] text-[#000000] mb-4">
          Get Your <span className="text-[#024241]">Free Quote Today!</span>
        </h1>
        <form className="space-y-4 flex flex-wrap gap-6">
          <div className="w-[48%] sm:w-full md:w-full">
            <label className="block text-[33px] font-[600] text-[#182E3C]">Your name*</label>
            <input
              type="text"
              className="mt-1 block w-full font-[400] text-[16px] p-2 border-[#182E3C] border rounded-md shadow-sm"
              defaultValue="John Doe"
            />
          </div>
          <div className="w-[48%] sm:w-full md:w-full">
            <label className="block text-[33px] font-[600] text-[#182E3C]">Email*</label>
            <input
              type="email"
              className="mt-1 block w-full font-[400] text-[16px] p-2 border-[#182E3C] border rounded-md shadow-sm"
              defaultValue="example@gmail.com"
            />
          </div>
          <div className="w-[48%] sm:w-full md:w-full">
            <label className="block text-[33px] font-[600] text-[#182E3C]">Phone*</label>
            <input
              type="tel"
              className="mt-1 block w-full font-[400] text-[16px] p-2 border-[#182E3C] border rounded-md shadow-sm"
              defaultValue="Phone number"
            />
          </div>
          <div className="w-[48%] sm:w-full md:w-full">
            <label className="block text-[33px] font-[600] text-[#182E3C]">Services*</label>
            <input
              type="text"
              className="mt-1 block w-full font-[400] text-[16px] p-2 border-[#182E3C] border rounded-md shadow-sm"
              defaultValue="Services"
            />
          </div>
          <div className="w-full">
            <label className="block text-[33px] font-[600] text-[#182E3C]">Your message*</label>
            <textarea
              className="mt-1 block w-full font-[400] text-[16px] p-2 border-[#182E3C] border rounded-md shadow-sm"
              rows="4"
              defaultValue="Enter here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-teal-800 self-start"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;