import { BsSearch } from "react-icons/bs";
const Search = (tabSelected, setTabSelected) => {
  return (
    <div className="relative search-bar z-[2]">
      <div className="flex items-center border-[2px] border-[#1d1d1d] h-[60px] mt-[32px] rounded-[15px] overflow-hidden bg-[#ffff]">
        <button className="flex items-center justify-center rounded-l-[15px] bg-[#fbf8f2] border-r-2 border-[#1d1d1d] h-[100%] w-[70px]">
          <BsSearch />
        </button>
        <input
          type="text"
          placeholder="Search Music"
          className="placeholde:text-placeholder px-[16px] w-[100%] h-[100%] border-black rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default Search;
