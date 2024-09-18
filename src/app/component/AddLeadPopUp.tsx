import React from "react";
import Image from "next/image";
import tickImg from "../assets/images/right.png";

const AddLeadPopUp = () => {
  return (
    <div className="bg-gradient-to-br from-[#CEFCFF] to-[#A8CCFF] shadow-lg flex flex-col items-center rounded-2xl pb-[32px]">
      <div className="bg-[#646464] w-full flex px-[20px] rounded-t-2xl justify-between py-[8px]">
        <text className="text-[10px] font-semibold">Total Leads Quota: 03</text>
        <text className="text-[10px] font-semibold">Leads Selected:01</text>
      </div>
      <Image src={tickImg} alt="right tick" width={100} height={100} />
      <text className="text-black text-[18px] font-semibold">
        {" "}
        Successfully added
      </text>
      <text className="text-[#727272] text-[12px] text-center font-normal">
        New Lead added in your account
        <br />
        Please check your leads in <strong>My Leads</strong>
      </text>
    </div>
  );
};
export default AddLeadPopUp;
