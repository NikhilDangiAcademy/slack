"use client";
import { Button } from "@nextui-org/react";
import React from "react";

const UserHeader = ({
  handleLeadOnOff,
  leadStopped,
}: {
  handleLeadOnOff(): void;
  leadStopped: boolean;
}) => {
  return (
    <div className="flex justify-between my-[10px] px-[36px]">
      <div className="flex flex-col ">
        <text className="text-black font-bold">Sonu Singh</text>
        <text className="text-black text-[9px] font-normal flex flex-row">
          <div className="bg-[#11B7F5] w-[6px] h-[6px] self-center rounded-[6px] mr-[2px]"></div>
          Total Leads Quota : 00/02
        </text>
      </div>
      <Button
        onClick={() => handleLeadOnOff()}
        className={`flex flex-row items-center border-[#0C8B2C]  border p-[2px] rounded-full`}
      >
        <div
          style={
            leadStopped
              ? { backgroundColor: "#8B0C0C" }
              : { backgroundColor: "#0C8B2C" }
          }
          className="w-[32px] h-[32px] rounded-2xl ml-[2px] flex justify-center "
        >
          <div className="w-[21px] h-[21px] bg-white self-center rounded-xl justify-center flex">
            <text
              className={`text-[10px] font-bold flex self-center ${
                leadStopped ? "text-[#8B0C0C]" : "text-[#0C8B2C]"
              }  `}
            >
              {leadStopped ? "OFF" : "ON"}
            </text>
          </div>
        </div>
        <div className="flex flex-col mr-[8px]">
          <text className="text-[10px]  mt-[2px] text-black  self-center ml-[4px] font-bold">
            {leadStopped ? "Leads" : "Accepting"}
          </text>
          <text className="text-[10px]   mt-[2px] text-black  self-center ml-[4px] font-bold">
            {leadStopped ? "Stopped" : "Leads"}
          </text>
        </div>
      </Button>
    </div>
  );
};

export default UserHeader;
