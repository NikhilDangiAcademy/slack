import React from "react";

const RefreshLeadComp = () => {
  return (
    <div className="flex justify-evenly  bg-[#F8F8F8] py-[8px] ">
      <div className="border border-[#E9EFEC] flex flex-row  rounded-2xl px-[8px] py-[5px] ">
        <text className="text-black text-[14px] self-center font-bold mr-[10px]">
          Refreshing Leads In
        </text>
        <div className="bg-black rounded-xl py-[2px] px-[12px]">
          <text className="text-white text-[15px] font-bold ">2 : 59 : 59</text>
        </div>
      </div>
    </div>
  );
};

export default RefreshLeadComp;
