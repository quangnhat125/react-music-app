import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
const NavBar = ({ tabSelected, setTabSelected }) => {
  console.log("setTabSelected", setTabSelected);
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

  const handleClick = (id) => {
    this.setTabSelected(id);
  };
  useEffect(() => {
    console.log("11");
    // setTabSelected(tabSelected);
  }, [tabSelected]);

  console.log("menuList", menuList);
  return (
    <div className="flex justify-between mt-[32px] pb-[16px] border-b-[1px] border-[#1d1d1d]">
      {menuList.map((item) => {
        return (
          <button
            key={item.id}
            id={item.id}
            className="font-medium text-[1.125rem] hover:bg-[#f9bc73] hover:h-[14px] hover:bottom-[-2px] hover:position-absolutely"
            onClick={() => {
              setTabSelected(item.id);
            }}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default NavBar;
