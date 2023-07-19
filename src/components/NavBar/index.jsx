import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTabSelected } from "../../App/slice/tabSlice";

const NavBar = () => {
  const tabSelected = useSelector((state) => state.tab.test);
  const content = useSelector((state) => state.tab.tab);
  const contentSelected = content.filter(
    (content) => content.id === tabSelected
  );
  const dispatch = useDispatch();

  const setTabSelected = (e) => {
    dispatch(updateTabSelected(e));
  };

  const menuList = [
    {
      id: 1,
      name: "Overview",
    },
    {
      id: 2,
      name: "Songs",
    },
    {
      id: 3,
      name: "Albums",
    },
    {
      id: 4,
      name: "Artists",
    },
  ];

  useEffect(() => {}, [menuList]);
  return (
    <div className="flex justify-between mt-[32px] pb-[16px] border-b-[1px] border-[#1d1d1d]">
      {menuList.map((item) => {
        return (
          <button
            key={item.id}
            id={item.id}
            className={`group relative font-medium text-[1.125rem] ${
              tabSelected === item.id ? "bg-[#f9bc73] bottom-[-2px]" : ""
            }`}
            onClick={() => {
              setTabSelected(item.id);
            }}
          >
            <span className="relative z-20">{item.name}</span>
            <div className="navBar z-10 bg-transparent group-hover:bg-[#f9bc73]"></div>
          </button>
        );
      })}
    </div>
  );
};

export default NavBar;
