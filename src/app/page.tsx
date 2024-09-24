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
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import useWindowSize from "./hooks/windowSize";
import CloseLeadPopUp from "./component/CloseLeadPopUp";

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
  const leadOff = useSelector((state: RootState) => state.example.leadOff);
  const [leadStopped, setLeadStopped] = useState<boolean>(leadOff);
  const router = useRouter();
  const { setData } = useMyContext();
  const leadStatus = useSelector((state: RootState) => state.example.value);
  const [closeLeadPopUp, setCloseLeadPopUp] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  const size = useWindowSize();

  useEffect(() => {
    if (leadStatus) {
      setAddLeadPopUp(leadStatus);
      dispatch({ type: "leadPopup", value: false });
    }
  }, [leadStatus]);

  // useEffect(() => {
  //   console.log("hello" + leadOff);
  //   setLeadStopped(leadOff);
  // }, [leadOff]);

  useEffect(() => {
    console.log(size);
    dispatch({ type: "leadOff", value: leadStopped });
  }, [leadStopped]);

  useEffect(() => {
    if (addLeadPopUp) {
      setTimeout(() => {
        setAddLeadPopUp(false);
      }, 3000);
    }
  }, [addLeadPopUp]);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  const handlePostComment = (
    isSmallTicket: boolean,
    isLocationIssue: boolean,
    isWeakCX: boolean
  ) => {
    console.log("hello ");
    if (isSmallTicket || isLocationIssue || isWeakCX) {
      setCloseLeadPopUp(false);
    } else {
      alert("Choice atleast one comment !");
    }
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

  const handleLeadOnOff = () => {
    setLeadStopped(!leadStopped);
  };

  const handleLeadPopUp = () => {
    setAddLeadPopUp(true);
    if (audioUrl) {
      setAudioUrl(null);
    }
  };
  return (
    <div className="py-[5px]   bg-white ">
      <UserHeaderComp
        handleLeadOnOff={handleLeadOnOff}
        leadStopped={leadStopped}
      />
      <div>
        {!expireLeads && !leadOff && <RefreshLeadComp />}
        <div className="flex justify-evenly py-[5px]  px-[10px]  bg-[#F8F8F8] ">
          <button
            className={`py-[10px] px-[20px] rounded-2xl border border-[#00B6FF]  ${
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
            className={`py-[10px] px-[20px] rounded-2xl border border-[#00B6FF] ${
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
      {addLeadPopUp && !leadStopped && (
        <div className="px-[20px]">
          <AddLeadPopUp />
        </div>
      )}
      {!expireLeads && !leadStopped && (
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
              key={Math.random()}
              className="flex  mt-[13px] scrollbar-hide rounded-xl  overflow-x-auto whitespace-nowrap"
            >
              <div
                onClick={() => {
                  handleNavigate(val);
                }}
                style={ColorChoice(val.category)}
                className="flex w-full rounded-xl shadow-custom"
              >
                <div
                  className={`flex items-center mr-[10px] w-[35px] justify-center `}
                  style={backgroundColor(val.category)}
                >
                  <text
                    style={{ fontFamily: "aldrich-font" }}
                    className={`text-black font-bold text-[11px]  -rotate-90 `}
                  >
                    {val.category.toUpperCase()}
                  </text>
                </div>
                <div
                  className="flex flex-col py-[14px] pr-[14px]"
                  style={{
                    width:
                      size.width > 800 ? size.width * 0.7 : size.width * 0.83,
                  }}
                >
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

                  <div className="flex justify-between mt-[5px]  ">
                    <text className="text-[#566573] text-[14px] font-normal pr-[10px]  ">
                      {val.amount}
                    </text>
                    <text className="text-[#566573] text-[14px] font-normal  ">
                      {val.sAmount}
                    </text>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-row justify-around  "
                style={{
                  width: size.width > 800 ? size.width * 0.5 : size.width * 0.5,
                }}
              >
                <Button
                  onClick={() => setCloseLeadPopUp(true)}
                  className="mx-[10px] px-[16px] my-[10px] bg-[#FF2E00] rounded-2xl"
                >
                  <text className="text-black text-[18px] font-normal">
                    Reject
                  </text>
                </Button>
                <Button
                  onClick={() => handleLeadPopUp()}
                  className="mx-[10px] px-[16px] my-[10px] bg-[#05FF00] rounded-2xl"
                >
                  <text className="text-black text-[18px] font-normal">
                    Accept
                  </text>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {expireLeads && (
        <div className="px-[16px]">
          {dataList.map((val: dataInterface) => (
            <div
              key={val.sAmount}
              onClick={() => {
                // handleNavigate(val);
              }}
              style={ColorChoice(val.category)}
              className="bg-[#BDBDBD]  mt-[13px]  scrollbar-hide rounded-xl  overflow-x-auto whitespace-nowrap shadow-custom"
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
                  <text className="text-[#343434] text-[18px] ">
                    {val.name}
                  </text>

                  <div className="flex flex-col">
                    <text className="text-[10px] text-[#343434] font-semibold">
                      CX Profile Issue
                    </text>
                    <text className="text-[9px] text-[#343434] font-semibold leading-[0.2rem]">
                      14-06-24, 12:06 PM
                    </text>
                  </div>
                </div>

                <div className="flex justify-between mt-[5px]">
                  <text className="text-[#343434] text-[14px] font-normal  pr-[10px] ">
                    {val.amount}
                  </text>
                  <text className="text-[#343434] text-[14px] font-normal  ">
                    {val.sAmount}
                  </text>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {leadStopped && !expireLeads && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 60,
          }}
        >
          <Image
            onClick={() => handleLeadOnOff()}
            src={require("../app/assets/images/leadOff.png")}
            alt="Lead Off"
          />
        </div>
      )}
      {closeLeadPopUp && (
        <CloseLeadPopUp handlePostComment={handlePostComment} />
      )}
    </div>
  );
}
