"use client";
import { useEffect, useState } from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import AudioPlayer from "./component/AudioPlayer";
import UserHeaderComp from "./component/UserHeaderComp";
import RefreshLeadComp from "./component/RefreshLeadComp";
import { useRouter } from "next/navigation";
import { useMyContext } from "./context/MyContext";
import AddLeadPopUp from "./component/AddLeadPopUp";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { RootState, AppDispatch } from "./store/store";

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
  const [addLeadPopUp, setAddLeadPopUp] = useState<boolean>(false);
  const router = useRouter();
  const { setData } = useMyContext();
  const leadStatus = useSelector((state: RootState) => state.example.value);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (leadStatus) {
      setAddLeadPopUp(leadStatus);
      dispatch({ type: "leadPopup", value: false });
    }
  }, [leadStatus]);

  useEffect(() => {
    if (addLeadPopUp) {
      setTimeout(() => {
        setAddLeadPopUp(false);
      }, 5000);
    }
  }, [addLeadPopUp]);

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

  const handleNavigate = (val: dataInterface) => {
    setData(val);
    router.push("/leadDetails");
  };

  const handleLeadPopUp = () => {
    setAddLeadPopUp(true);
    if (audioUrl) {
      setAudioUrl(null);
    }
  };
  return (
    <div className="py-[5px]  bg-white ">
      <UserHeaderComp />
      <div>
        <RefreshLeadComp />
        <div className="flex justify-evenly pb-[5px]  px-[10px]  bg-[#F8F8F8] ">
          <button
            className={`py-[10px] px-[40px] rounded-2xl border border-[#00B6FF]  ${
              expireLeads ? "bg-[#EDEDED]" : "bg-[#00B6FF]"
            }`}
            onClick={() => setExpireLeads(false)}
          >
            <text
              className={` text-[16px] font-semibold   ${
                expireLeads ? "text-[#667085]" : "text-[#FFFFFF]"
              }`}
            >
              Fresh Leads
            </text>
          </button>
          <button
            className={`py-[10px] px-[40px] rounded-2xl border border-[#00B6FF] ${
              !expireLeads ? "bg-[#EDEDED]" : "bg-[#00B6FF]"
            }`}
            onClick={() => setExpireLeads(true)}
          >
            <text
              className={`text-[#667085] text-[16px] font-semibold ${
                !expireLeads ? "text-[#667085]" : "text-[#FFFFFF]"
              }`}
            >
              Expired Leads
            </text>
          </button>
        </div>
      </div>
      {addLeadPopUp && (
        <div className="px-[20px]">
          <AddLeadPopUp />
        </div>
      )}
      {!expireLeads && (
        <div className="px-[16px]  rounded-xl ">
          {audioUrl && (
            <AudioPlayer
              closeAudioPop={closeAudioPop}
              url={audioUrl}
              handleLeadPopUp={handleLeadPopUp}
            />
          )}
          {dataList.map((val: dataInterface) => (
            <div
              key={val.sAmount}
              onClick={() => {
                handleNavigate(val);
              }}
              style={ColorChoice(val.category)}
              className=" mt-[13px] rounded-xl overflow-hidden shadow-custom"
            >
              <div
                className=" flex items-center mr-[10px] w-[7%] justify-center "
                style={backgroundColor(val.category)}
              >
                <text className="text-black font-bold text-[9px]   -rotate-90 ">
                  {val.category}
                </text>
              </div>
              <div className="flex flex-col py-[14px] pr-[14px] w-[93%] ">
                <div className="flex leading-5 justify-between  ">
                  <text className="text-black text-[18px] font-semibold">
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
                  <text className="text-[#566573] text-[14px] font-normal  ">
                    {val.amount}
                  </text>
                  <text className="text-[#566573] text-[14px] font-normal  ">
                    {val.sAmount}
                  </text>
                </div>
              </div>
            </div>
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
