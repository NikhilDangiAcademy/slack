"use client";
import { useState } from "react";
import Switch from "./component/Switch";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import AudioPlayer from "./component/AudioPlayer";
import Link from "next/link";

interface dataInterface {
  name: string;
  category: string;
  amount: string;
  sAmount: string;
  audio: string;
}

export default function Home() {
  const [expireLeads, setExpireLeads] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };
  const dataList: dataInterface[] = [
    {
      name: "Ravi Singh",
      category: "Gold",
      amount: "Home Loan: 20L",
      sAmount: "Salaried Income 12L",
      audio:
        "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3",
    },
    {
      name: "Avi Singh",
      category: "Bronze",
      amount: "Loan Against Property : 20L",
      sAmount: "Business Income 10L",
      audio: "https://jervo.org/zanado/audio/halo.mp3",
    },
    {
      name: "Thakur Singh",
      category: "Silver",
      amount: "Loan Against Property : 20L",
      sAmount: "Business Income 10L",
      audio: "https://audio.jukehost.co.uk/5G1VuuVpIjRQQV31ejdfmJndF0Bh7AAf",
    },
    {
      name: "Singh",
      category: "Gold",
      amount: "Loan Against Property : 20L",
      sAmount: "Business Income 10L",
      audio:
        "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3",
    },
    {
      name: "Ravi Singh",
      category: "Gold",
      amount: "Home Loan: 20L",
      sAmount: "Salaried Income 12L",
      audio:
        "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3",
    },
    {
      name: "Avi Singh",
      category: "Bronze",
      amount: "Loan Against Property : 20L",
      sAmount: "Business Income 10L",
      audio: "https://jervo.org/zanado/audio/halo.mp3",
    },
    {
      name: "Thakur Singh",
      category: "Silver",
      amount: "Loan Against Property : 20L",
      sAmount: "Business Income 10L",
      audio: "https://audio.jukehost.co.uk/5G1VuuVpIjRQQV31ejdfmJndF0Bh7AAf",
    },
    {
      name: "Ravi Singh",
      category: "Gold",
      amount: "Home Loan: 20L",
      sAmount: "Salaried Income 12L",
      audio:
        "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3",
    },
    {
      name: "Avi Singh",
      category: "Bronze",
      amount: "Loan Against Property : 20L",
      sAmount: "Business Income 10L",
      audio: "https://jervo.org/zanado/audio/halo.mp3",
    },
    {
      name: "Thakur Singh",
      category: "Silver",
      amount: "Loan Against Property : 20L",
      sAmount: "Business Income 10L",
      audio: "https://audio.jukehost.co.uk/5G1VuuVpIjRQQV31ejdfmJndF0Bh7AAf",
    },
  ];

  const closeAudioPop = () => {
    setAudioUrl(null);
  };

  const setAudio = (url: string) => {
    setAudioUrl(url);
  };

  const ColorChoice = (catName: string): object => {
    return (
      (catName === "Gold" && {
        borderColor: "#ECD179",
        borderWidth: 2,
        flexDirection: "row",
        display: "flex",
      }) ||
      (catName === "Bronze" && {
        borderWidth: 2,
        borderColor: "#E4A77C",
        flexDirection: "row",
        display: "flex",
      }) || {
        borderWidth: 2,
        borderColor: "#D9D9D9",
        flexDirection: "row",
        display: "flex",
      }
    );
  };

  const backgroundColor = (catName: string): object => {
    return (
      (catName === "Gold" && {
        backgroundColor: "#ECD179",
      }) ||
      (catName === "Bronze" && {
        backgroundColor: "#E4A77C",
      }) || {
        backgroundColor: "#D9D9D9",
      }
    );
  };

  return (
    <div className="py-[5px]  bg-white ">
      <div className="flex justify-between my-[10px] px-[36px]">
        <div className="flex flex-col ">
          <text className="text-black font-bold">Sonu Singh</text>
          <text className="text-black text-[9px] font-normal flex flex-row">
            <div className="bg-[#11B7F5] w-[6px] h-[6px] self-center rounded-[6px] mr-[2px]"></div>
            Total Leads Quota : 00/02
          </text>
        </div>

        {/* <div className="flex ">
          <text className="text-black font-bold text-[16px] text-center flex flex-col ">
            01<text className="text-[9px] font-bold text-center">Hours</text>
          </text>
          <text className="text-black font-bold">:</text>
          <text className="text-black font-bold text-[16px]  text-center flex flex-col">
            05
            <text className="text-[9px] font-bold text-center">Minutes</text>
          </text>
        </div> */}
        <div className="flex flex-row items-center border-2 p-[2px] rounded-full">
          <div className="w-[32px] h-[32px] bg-[#0C8B2C] rounded-2xl  flex justify-center ">
            <div className="w-[21px] h-[21px] bg-white self-center rounded-xl justify-center flex">
              <text className="text-[9px] flex self-center text-[#0C8B2C] ">
                ON
              </text>
            </div>
          </div>
          <text className="text-[10px]  mt-[2px] text-black  self-center ml-[4px] font-bold">
            Accepting Leads
          </text>
        </div>
      </div>
      <div className="py-[10px] px-[20px]   bg-[#F8F8F8] ">
        <div className="flex flex-row justify-between mb-[10px] ">
          <text className="text-black text-[14px] font-bold">
            Refreshing Leads In :
          </text>
          <div className="bg-black rounded-2xl py-[6px] px-[12px]">
            <text className="text-white text-[14px] font-bold ">
              2 : 59 : 59
            </text>
          </div>
        </div>
        <div className="flex justify-between  ">
          <button
            className={`py-[10px] px-[30px] rounded-2xl ${
              expireLeads ? "bg-[#EDEDED]" : "bg-[#00B6FF]"
            }`}
            onClick={() => setExpireLeads(false)}
          >
            <text
              className={` text-[14px] font-semibold ${
                expireLeads ? "text-[#667085]" : "text-[#FFFFFF]"
              }`}
            >
              Fresh Leads
            </text>
          </button>
          <button
            className={`py-[10px] px-[30px] rounded-2xl ${
              !expireLeads ? "bg-[#EDEDED]" : "bg-[#00B6FF]"
            }`}
            onClick={() => setExpireLeads(true)}
          >
            <text
              className={`text-[#667085] text-[14px] font-semibold ${
                !expireLeads ? "text-[#667085]" : "text-[#FFFFFF]"
              }`}
            >
              Expired Leads
            </text>
          </button>
        </div>
      </div>
      {!expireLeads && (
        <div className="px-[16px]  rounded-xl ">
          {audioUrl && (
            <AudioPlayer closeAudioPop={closeAudioPop} url={audioUrl} />
          )}
          {dataList.map((val) => (
            <Link key={val.audio} href={{ pathname: "/leadDetails" }}>
              <div
                key={val.sAmount}
                style={ColorChoice(val.category)}
                className=" mt-[13px] rounded-xl overflow-hidden shadow-custom"
              >
                <div
                  className=" flex items-center mr-[10px] w-[7%] justify-center "
                  style={backgroundColor(val.category)}
                >
                  <text className="text-black text-[9px]   -rotate-90 ">
                    {val.category}
                  </text>
                </div>
                <div className="flex flex-col py-[14px] pr-[14px] w-[93%] ">
                  <div className="flex leading-5 justify-between  ">
                    <text className="text-black text-[14px] font-semibold">
                      {val.name}
                    </text>

                    <div className="flex flex-row">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setAudio(val?.audio);
                        }}
                      >
                        <TfiHeadphoneAlt color="black" size={20} />
                      </button>
                      <button style={{ marginLeft: 10 }}>
                        <BsThreeDotsVertical color="black" size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between mt-[5px]">
                    <text className="text-[#566573] text-[9.5px] font-normal  ">
                      {val.amount}
                    </text>
                    <text className="text-[#566573] text-[9.5px] font-normal  ">
                      {val.sAmount}
                    </text>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {expireLeads && (
        <div>
          <text className="text-black">Expire List </text>
        </div>
      )}
    </div>
  );
}
