import React from "react";

import styles from "../styles/Shimmer.module.css";
const RefreshLeadComp = () => {
  return (
    <div className="bg-[#f6f7f8] flex justify-evenly   py-[8px]   ">
      <div className="border border-[#E9EFEC] flex flex-row  rounded-2xl px-[8px] py-[5px] ">
        <div
          className={styles.shimmer}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <text className="text-black text-[14px] self-center font-bold mr-[10px]">
            Refreshing Leads In
          </text>
          <div className="bg-black rounded-xl py-[2px] px-[12px] flex items-center">
            <text className="text-white text-[15px] font-bold ">
              2 : 59 : 59
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefreshLeadComp;
