import { AiOutlineHome, AiOutlineHeart, AiOutlineFire, AiOutlineSetting } from 'react-icons/ai'
const Footer = () => {
    return (
     <div className='flex'>
        <div className='flex justify-between bg-[#2ab3c0] rounded-[15px] border-[2px] border-[#1d1d1d] mt-[32px] w-[100%] p-[12px]'>
            <a className='flex justify-center items-center text-[1.5rem] w-[80px] rounded-[15px] py-[6px] border-[2px]'><AiOutlineHome/></a>
            <a className='flex justify-center items-center text-[1.5rem] w-[80px] rounded-[15px] py-[6px] border-[2px]'><AiOutlineHeart/></a>
            <a className='flex justify-center items-center text-[1.5rem] w-[80px] rounded-[15px] py-[6px] border-[2px]'><AiOutlineFire/></a>
            <a className='flex justify-center items-center text-[1.5rem] w-[80px] rounded-[15px] py-[6px] border-[2px]'><AiOutlineSetting/></a>
        </div>
     </div>

    );
  }
  
  export default Footer;
  