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
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { RootState } from "../store/rootReducer";
import CloseLeadPopUp from "../component/CloseLeadPopUp";

const LeadDetails = () => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const [closeLeadPopUp, setCloseLeadPopUp] = useState<boolean>(false);
  const { data } = useMyContext();
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const leadOff = useSelector((state: RootState) => state.example.leadOff);
  console.log(leadOff);

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

  const handleLeadPopUp = () => {
    setAudioUrl(null);
    dispatch({ type: "leadPopup", value: true });
    router.back();
  };

  const handlePostComment = (
    isSmallTicket: boolean,
    isLocationIssue: boolean,
    isWeakCX: boolean
  ) => {
    if (isSmallTicket || isLocationIssue || isWeakCX) {
      setCloseLeadPopUp(false);
      router.back();
    } else {
      alert("Choice atleast one comment !");
    }
  };

  const handleLeadOnOff = () => {
    router.back();
    dispatch({ type: "leadOff", value: !leadOff });
  };

  return (
    <div className={`bg-white  py-[10px] pb-[30px]`}>
      <div className={`${closeLeadPopUp ? "opacity-5" : "opacity-100"}`}>
        <UserHeader handleLeadOnOff={handleLeadOnOff} leadStopped={leadOff} />
        <RefreshLeadComp />

        <div className="flex justify-between pb-[5px]  px-[16px]   bg-[#F8F8F8] ">
          <button
            className={`py-[10px] px-[20px]  flex flex-row items-center rounded-2xl border border-[#00B6FF] `}
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
            className={`py-[10px] px-[20px] flex flex-row items-center rounded-2xl border border-[#00B6FF] `}
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

        <div className="flex justify-between px-[20px]">
          <button
            className="bg-[#FFE9E9] rounded-xl py-[11px] items-center px-[30px] flex flex-row"
            onClick={() => setCloseLeadPopUp(true)}
          >
            <text className="text-[#FF0707] mr-[5px]">Close</text>
            <MdClose color="#FF0707" />
          </button>
          <button
            onClick={() => handleLeadPopUp()}
            className="bg-[#C7FFD5] rounded-xl py-[11px] px-[30px]  items-center flex flex-row"
          >
            <text className="text-[#0C8B2C] mr-[5px]">Add Lead</text>
            <MdOutlineAddTask color="#0C8B2C" size={16} />
          </button>
        </div>
      </div>
      {closeLeadPopUp && (
        <CloseLeadPopUp handlePostComment={handlePostComment} />
      )}
    </div>
  );
};
export default LeadDetails;
