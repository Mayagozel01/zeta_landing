import ourwork from './../../assets/images/ourwork.png'
import './our_work.css';
import identify from './../../assets/images/indentify.svg';
import tasks from './../../assets/images/tasks.png';
import planning from './../../assets/images/planning.png';
import approvale from './../../assets/images/approvale.png'
import start from './../../assets/images/start.png'

const OurWork = ()=>{
return (
    <div className="w-full container min-h-[830px] bg-[#FFFFF0] flex flex-col py-12 gap-[130px] ourwork">
        <div className="">  <img src={ourwork} alt="pic" />
            <h1 className='text-[#000000] mt-4'>Security support</h1>
        </div>
        <div className='flex gap-[32.5px] flex-col items-center lg:flex-row md:flex-col sm:flex-col'>
            <div className='flex flex-col justify-center items-center gap-[30px] bg-[#FFFFFF] w-[310px] h-[210px]'>
                <img src={identify} alt="pic" />
                <p className='text-[#182E3C] text-[20px] font-[600]'>
                Identify Needs
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[30px] bg-[#FFFFFF] w-[310px] h-[210px]'>
                <img src={tasks} alt="pic" />
                <p className='text-[#182E3C] text-[20px] font-[600]'>
                Set Tasks
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[30px] bg-[#FFFFFF] w-[310px] h-[210px]'>
                <img src={planning} alt="pic" />
                <p className='text-[#182E3C] text-[20px] font-[600]'>
                Planning
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[30px] bg-[#FFFFFF] w-[310px] h-[210px]'>
                <img src={approvale} alt="pic" />
                <p className='text-[#182E3C] text-[20px] font-[600]'>
                Approvals
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-[30px] bg-[#FFFFFF] w-[310px] h-[210px]'>
                <img src={start} alt="pic" />
                <p className='text-[#182E3C] text-[20px] font-[600]'>
                Start
                </p>
            </div>
        </div>

    </div>
)
}


export default OurWork;
