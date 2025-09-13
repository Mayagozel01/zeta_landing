import portfolio from './../../assets/images/portfolio.png';
import portfolio_1 from './../../assets/images/portfolio_1.png';
import portfolio_2 from './../../assets/images/portfolio_2.png';
import portfolio_3 from './../../assets/images/portfolio_3.png';
import portfolio_4 from './../../assets/images/portfolio_4.png';
import blur from './../../assets/images/blur.png';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div className="container py-10 flex flex-col gap-6 justify-center items-start lg:items-center sm:items-start
    bg-[#024241]">
      <div className="w-full  lg:w-[60%] sm:w-full">
        <img
          src={portfolio}
          alt="Portfolio"
          className="w-full h-[58px] object-contain"
        />
        <h1
          className="
            text-[#FFFFF0] 
            text-[30px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]
            font-[600] 
            capitalize 
            text-start lg:text-center sm:text-start
          "
        >
          explore our showcase of featured works
        </h1>
      </div>

      <div className="w-full flex flex-wrap gap-6">
        <div className="rounded-[30px] w-full lg:w-[48%] sm:w-full overflow-hidden flex justify-center">
          <img
            src={portfolio_1}
            alt="Portfolio 1"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="rounded-[30px] w-full lg:w-[48%] sm:w-full overflow-hidden flex justify-center">
          <img
            src={portfolio_2}
            alt="Portfolio 2"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="rounded-[30px] w-full lg:w-[48%] sm:w-full overflow-hidden flex justify-center">
          <img
            src={portfolio_3}
            alt="Portfolio 3"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="rounded-[30px] w-full lg:w-[48%] sm:w-full overflow-hidden flex justify-center">
          <img
            src={portfolio_4}
            alt="Portfolio 4"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
