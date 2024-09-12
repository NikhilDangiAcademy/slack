"use client";
import { useState, useRef } from "react";
import Switch from "./component/Switch";
import { TbHeadphonesFilled } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import AudioPlayer from "./component/AudioPlayer";
interface dataInterface {
  name: string;
  category: string;
  amount: string;
  sAmount: string;
  audio: string;
}
export default function Home() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [audioPopUp, setAudioPopUp] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

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
      category: "Silver",
      amount: "Loan Against Property : 20L",
      sAmount: "Business Income 10L",
      audio: "https://jervo.org/zanado/audio/halo.mp3",
    },
    {
      name: "Thakur Singh",
      category: "Bronze",
      amount: "Loan Against Property : 20L",
      sAmount: "Business Income 10L",
      audio:
        "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3",
    },
    {
      name: "Singh",
      category: "Gold",
      amount: "Home Loan: 20L",
      sAmount: "Salaried Income 12L",
      audio:
        "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3",
    },
  ];
  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  const closeAudioPop = () => {
    setAudioPopUp(false);
  };

  const setAudio = (url: string) => {
    setAudioUrl(url);
  };

  return (
    <div className="w-[360px] py-[5px] px-[36px] bg-white ">
      <div className="flex justify-between my-[10px]">
        <div className="flex flex-col ">
          <text className="text-black font-bold">Sonu Singh</text>
          <text className="text-black text-[8.6px] font-normal">
            Total Leads Quota : 00/02
          </text>
        </div>

        <div className="flex flex-col">
          <text className="text-black font-bold text-base self-center">
            01:05
          </text>
          <text className="text-[8.6px] text-black">Hours : Minutes</text>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Switch isOn={isOn} handleToggle={handleToggle} />
          <text className="text-[8.6px] mt-[2px] text-black">
            Accepting Leads
          </text>
        </div>
      </div>
      <div className="  rounded-xl ">
        {audioPopUp && (
          <AudioPlayer closeAudioPop={closeAudioPop} url={audioUrl} />
        )}
        {dataList.map((val) => (
          <div
            key={val.sAmount}
            className="bg-white rounded-xl p-[14px] mt-[13px] "
          >
            {val.category && (
              <div className="flex -mx-[15px] justify-start   -mt-[23px] ">
                <text
                  style={
                    (val.category === "Gold" && {
                      backgroundColor: "#FFD700",
                    }) ||
                    (val.category === "Silver" && {
                      backgroundColor: "#C0C0C0",
                    }) || { backgroundColor: "#CD9575" }
                  }
                  className="rounded-md text-[8px] text-[#181616] self-center p-[2px] px-[6px] "
                >
                  {val.category}
                </text>
              </div>
            )}

            <div className="flex  justify-between ">
              <text className="text-black text-[15px] font-normal">
                {val.name}
              </text>

              <div className="flex flex-row">
                <button
                  onClick={() => {
                    setAudioPopUp(true);
                  }}
                >
                  <TbHeadphonesFilled color="black" size={20} />
                </button>
                <button style={{ marginLeft: 10 }}>
                  <HiDotsHorizontal color="black" size={20} />
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
        ))}
      </div>
    </div>
  );
}
