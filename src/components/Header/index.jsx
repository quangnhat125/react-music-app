import { AiOutlineBell } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { changingName} from "../../App/slice/appSlice";

const Header = () => {
  const name = useSelector((state) => state.app.name)
 

  return (
    <>
      <div className="flex justify-between items-center gap-[100px] mb-[24px]">
        <div className="flex justify-center items-center rounded-lg border-[2px] border-[#1d1d1d] w-[48px] h-[48px] bg-[#a8dee2]">
          <div className="flex flex-wrap w-[24px] h-[24px]">
            <span className="block bg-[#f9bc73] rounded-lg border-[2px] border-[#1d1d1d] w-[12px] h-[12px]"></span>
            <span className="block bg-[#f9bc73] rounded-lg border-[2px] border-[#1d1d1d] w-[12px] h-[12px]"></span>
            <span className="block bg-[#f9bc73] rounded-lg border-[2px] border-[#1d1d1d] w-[12px] h-[12px]"></span>
            <span className="block bg-[#f9bc73] rounded-lg border-[2px] border-[#1d1d1d] w-[12px] h-[12px]"></span>
          </div>
        </div>
        <div className="justify-center mx-auto">{name}</div>
        <div className="flex justify-end items-center">
          <button className="mr-[1rem] cursor-pointer notification relative transform hover:rotate-[10deg]">
            <AiOutlineBell className="text-[1.75rem] color-[#454545]" />
          </button>
          <button className="flex justify-center items-center w-[48px] h-[48px] rounded-[15px] border-[3px] border-[#fff] p-0 overflow-hidden cursor-pointer shadow-custom1 hover:translate-y-[-4px] hover:shadow-custom3">
            <img
              className="rounded-[15px]"
              src="https://assets.codepen.io/285131/pexels-photo-838875.jpeg"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
