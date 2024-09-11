"use client";
import { useState } from "react";
import Image from "next/image";
import Switch from "./component/Switch";
export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div className=" w-[360px] py-[5px] px-[36px] bg-white ">
      <div className="flex justify-between my-[10px]">
        <div className="flex flex-col ">
          <text className="text-black font-bold">Sonu Singh</text>
          <text className="text-black text-[6px] font-normal">
            Total Leads Quota : 00/02
          </text>
        </div>

        <div className="flex flex-col">
          <text className="text-black font-bold text-base">01:05:20</text>
          <text className="text-[6px] text-black">Hours:Minutes:Seconds</text>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Switch isOn={isOn} handleToggle={handleToggle} />
          <text className="text-[6px] mt-[2px] text-black">
            Accepting Leads
          </text>
        </div>
      </div>
      <div className="bg-[#D9D9D9]  p-[16px]  rounded-xl ">
        <div className="bg-white rounded-xl p-[14px] ">
          <div className="flex  justify-between ">
            <div className="flex-row flex ">
              <text className="text-black text-[20px] font-normal">
                Ravi Singh
              </text>
              <div className="ml-[10px]">
                <text className="bg-[#FFD700] rounded-md text-[8px] text-[#181616] p-[6px]">
                  Gold
                </text>
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={require("../app/assets/images/earphone.png")}
                width={30}
                height={30}
                alt="Earphone"
              />
              <Image
                src={require("../app/assets/images/dots.png")}
                alt="Dots"
                width={18}
                height={18}
                style={{ marginLeft: 10 }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-[5px]">
            <text className="text-[#566573] text-xs font-normal  ">
              Home Loan :20 L
            </text>
            <text className="text-[#566573] text-xs font-normal  ">
              Salaried Income:12 L
            </text>
          </div>
        </div>
        <div className="bg-white rounded-xl p-[14px] mt-[10px] ">
          <div className="flex  justify-between ">
            <div className="flex-row flex ">
              <text className="text-black text-[20px] font-normal">
                Ravi Singh
              </text>
              <div className="ml-[10px]">
                <text className="bg-[#FFD700] rounded-md text-[8px] text-[#181616] p-[6px]">
                  Gold
                </text>
              </div>
            </div>
            <div className="flex flex-row">
              <Image
                src={require("../app/assets/images/earphone.png")}
                width={30}
                height={30}
                alt="Earphone"
              />
              <Image
                src={require("../app/assets/images/dots.png")}
                alt="Dots"
                width={18}
                height={18}
                style={{ marginLeft: 10 }}
              />
            </div>
          </div>
          <div className="flex justify-between mt-[5px]">
            <text className="text-[#566573] text-xs font-normal  ">
              Home Loan :20 L
            </text>
            <text className="text-[#566573] text-xs font-normal  ">
              Salaried Income:12 L
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}
