import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SearchFilter = () => {
  return (
    <div className="searchDiv m-3 grid gp-10 bg-gray-300 rounded-[10px] p-[3rem]">
      {/* <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-gray-500-700">
          <div className="flex gap-2 items-center">
            <select name="" id="" className="bg-white rounded-[3px] px-4 py-1">
              <option value={"s"}>Test1</option>
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus-outline-none w-[100%]"
              placeholder="Search Job"
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus-outline-none w-[100%]"
              placeholder="Search Job"
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <button className="bg-blue-500 h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
            Search
          </button>
        </div>
      </form> */}
      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <lable htmlFor="Status" className="text-[#808080] font-semibold">
            Status:
          </lable>
          <select
            name=""
            id="Status"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value={""}>All</option>
            <option value={""}>Active</option>
            <option value={""}>Destroyed</option>
            <option value={""}>Retired</option>
            <option value={""}>Unknown</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <lable htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </lable>
          <select
            name=""
            id="Type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value={""}>All</option>
            <option value={""}>Dragon 1.0</option>
            <option value={""}>Dragon 1.1</option>
            <option value={""}>Dragon 2.0</option>
          </select>
        </div>
        {/* <span className="text-[#a1a1a1] cursor-pointer">Clear All</span> */}
      </div>
    </div>
  );
};

export default SearchFilter;
