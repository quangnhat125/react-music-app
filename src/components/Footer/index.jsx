import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineFire,
  AiOutlineSetting,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMenuSelected } from "../../App/slice/menuSlice";

const Footer = () => {
  const menuSelected = useSelector((state) => state.menu.menu)
  const dispatch = useDispatch();
  const setMenuSelected = (e) => {
    dispatch(updateMenuSelected(e))
  };

  const footerList = [
    {
      id: 1,
      content: <AiOutlineHome />,
    },
    {
      id: 2,
      content: <AiOutlineHeart />,
    },
    {
      id: 3,
      content: <AiOutlineFire />,
    },
    {
      id: 4,
      content: <AiOutlineSetting />,
    },
  ];

  return (
    <div className="flex">
      <div className="flex justify-between bg-[#2ab3c0] rounded-[15px] border-[2px] border-[#1d1d1d] mt-[32px] w-[100%] p-[12px]">
        {footerList.map((item) => {
          return (
            <button
              key={item.id}
              id={item.id}
              className={`flex justify-center items-center text-[1.5rem] w-[80px] h-[50px] rounded-[15px] py-[6px] hover:bg-[#f9bc73] hover:border-[#1d1d1d] ${
                menuSelected === item.id ? "bg-[#f9bc73] border-[#1d1d1d]" : ""
              }`}
              onClick={() => {
                setMenuSelected(item.id);
              }}
            >
              {item.content}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
