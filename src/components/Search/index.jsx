import { BsSearch } from 'react-icons/bs'
const Search = () => {
    return (
      <div className='relative search-bar'>
        <div className="flex items-center border-[2px] border-[#1d1d1d] h-[60px] mt-[32px] rounded-[15px]">
        <button className='flex items-center justify-center rounded-l-[15px] bg-[#fbf8f2] border-r-2 border-[#1d1d1d] h-[100%] w-[70px]'>
          <BsSearch/>
        </button>
        <input type="text" placeholder="Search Music" className='px-[16px]'/>
        </div>
        
      </div>
    );
  }
  
  export default Search;
  