import { BsSearch } from 'react-icons/bs'
const NavBar = () => {
    return (
      <div className='flex justify-between mt-[32px] pb-[16px] border-b-[1px] border-[#1d1d1d]'>
        <a className='font-medium text-[1.125rem]'>Overview</a>
        <a className='font-medium text-[1.125rem]'>Songs</a>
        <a className='font-medium text-[1.125rem]'>Albums</a>
        <a className='font-medium text-[1.125rem]'>Artists</a>
      </div>
    );
  }
  
  export default NavBar;
  