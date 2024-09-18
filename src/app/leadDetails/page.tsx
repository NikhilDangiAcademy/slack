"use client";
import React, { useState } from "react";
import UserHeader from "../component/UserHeaderComp";
import RefreshLeadComp from "../component/RefreshLeadComp";
import { CgMenuBoxed } from "react-icons/cg";
import { BsHeadphones } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { MdOutlineAddTask } from "react-icons/md";
import AudioPlayer from "../component/AudioPlayer";
import { useMyContext } from "../context/MyContext";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useDispatch, UseDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";

const LeadDetails = () => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isSmallTicket, setIsSmallTicket] = useState<boolean>(false);
  const [isWeakCX, setIsWeakCX] = useState<boolean>(false);
  const [isLocationIssue, setIsLocationIssue] = useState<boolean>(false);
  const [closeLeadPopUp, setCloseLeadPopUp] = useState<boolean>(false);
  const { data } = useMyContext();
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const leadData = [
    {
      name: "Lead ID",
      value: "BOO1RSD",
    },
    {
      name: "Loan Amount",
      value: "8934000",
    },
    {
      name: "Loan Type",
      value: "Home Loan",
    },
    {
      name: "Property Type",
      value: "Four BHK",
    },
    {
      name: "Location",
      value: "Haryana",
    },
    {
      name: "Pincode",
      value: "1200031",
    },
    {
      name: "Profession",
      value: "Salaried",
    },
    {
      name: "Annual Income",
      value: "120000",
    },
    {
      name: "ITR",
      value: "Yes",
    },
    {
      name: "CIBIL",
      value: "750",
    },
    {
      name: "First Name",
      value: "Nikhil",
    },
    {
      name: "Last Name",
      value: "Dangi",
    },
    {
      name: "ROI",
      value: "8.5%",
    },
    {
      name: "Gender",
      value: "Male",
    },
    {
      name: "xyz",
      value: "abcd",
    },
    {
      name: "abcd",
      value: "efgh",
    },
    {
      name: "E-mail ID",
      value: "xyz@123gmail.com",
    },
  ];
  const closeAudioPop = () => {
    setAudioUrl(null);
  };

  const setAudio = (url: string | null) => {
    setAudioUrl(url);
  };
  const handleCheckboxTicket = () => {
    setIsSmallTicket(!isSmallTicket);
  };
  const handleCheckboxWeak = () => {
    setIsWeakCX(!isWeakCX);
  };
  const handleCheckboxIssue = () => {
    setIsLocationIssue(!isLocationIssue);
  };

  const handleLeadPopUp = () => {
    setAudioUrl(null);
    dispatch({ type: "leadPopup", value: true });
    router.back();
  };

  const handlePostComment = () => {
    if (isSmallTicket || isLocationIssue || isWeakCX) {
      setCloseLeadPopUp(false);
      router.back();
    } else {
      alert("Choice atleast one comment !");
    }
  };

  return (
    <div className="bg-white py-[10px] pb-[30px]">
      <UserHeader />
      <RefreshLeadComp />

      <div className="flex justify-between pb-[5px]  px-[16px]   bg-[#F8F8F8] ">
        <button
          className={`py-[10px] px-[40px]  flex flex-row items-center rounded-2xl border border-[#00B6FF] `}
          onClick={() => {
            setAudio(data?.audio);
          }}
        >
          <text
            className={` text-[16px] font-semibold  pr-[10px]  text-[#667085] `}
          >
            Recording
          </text>
          <BsHeadphones color="black" />
        </button>
        <button
          className={`py-[10px] px-[40px] flex flex-row items-center rounded-2xl border border-[#00B6FF] `}
          onClick={() => setAudio(null)}
        >
          <text
            className={`text-[#667085] text-[16px] font-semibold pr-[10px]  text-[#667085] 
              }`}
          >
            Analysis
          </text>
          <CgMenuBoxed color="black" />
        </button>
      </div>
      <div className="px-[16px]">
        {audioUrl && (
          <AudioPlayer
            closeAudioPop={closeAudioPop}
            url={audioUrl}
            handleLeadPopUp={handleLeadPopUp}
          />
        )}
      </div>
      <div className="flex flex-wrap   px-[25px] pt-[10px]">
        {leadData.map((value: { name: string; value: string }) => (
          <div key={value.name} className="w-1/2 flex flex-col mb-[12px]">
            <div>
              <text className="text-black ">{value.name}</text>
            </div>
            <div>
              <text className="text-black font-bold">{value.value}</text>
            </div>
          </div>
        ))}
      </div>

      {closeLeadPopUp && (
        <div className=" absolute bg-gradient-to-br from-[#CEFCFF] to-[#A8CCFF] shadow-lg top-[50%] w-3/4 left-[10%]   rounded-2xl  px-[21px] py-[15px]">
          <text className="text-black">Tell Lead Comment</text>
          <div className="flex flex-row">
            <div className="w-3/4">
              <text className="text-[#5A5A5A] ">Small Ticket Size</text>
            </div>
            <input
              type="checkbox"
              checked={isSmallTicket}
              onChange={handleCheckboxTicket}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-3/4">
              <text className="text-[#5A5A5A] ">Weak CX Profile</text>
            </div>
            <input
              type="checkbox"
              checked={isWeakCX}
              onChange={handleCheckboxWeak}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-3/4">
              <text className="text-[#5A5A5A] ">Location Issue</text>
            </div>
            <input
              type="checkbox"
              checked={isLocationIssue}
              onChange={handleCheckboxIssue}
            />
          </div>
          <div className="flex justify-center mt-[26px]">
            <Button
              onClick={() => handlePostComment()}
              className="bg-[#00B6FF] rounded-2xl px-[14px] py-[10px]  "
            >
              <text className="text-[12px]">Post Comment</text>
            </Button>
          </div>
        </div>
      )}

      <div className="flex justify-between px-[20px]">
        <button
          className="bg-[#FFE9E9] rounded-xl py-[11px] items-center px-[47px] flex flex-row"
          onClick={() => setCloseLeadPopUp(true)}
        >
          <text className="text-[#FF0707] mr-[5px]">Close</text>
          <MdClose color="#FF0707" />
        </button>
        <button
          onClick={() => handleLeadPopUp()}
          className="bg-[#C7FFD5] rounded-xl py-[11px] px-[47px]  items-center flex flex-row"
        >
          <text className="text-[#0C8B2C] mr-[5px]">Add Lead</text>
          <MdOutlineAddTask color="#0C8B2C" size={16} />
        </button>
      </div>
    </div>
  );
};
export default LeadDetails;
