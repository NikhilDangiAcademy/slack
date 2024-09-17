import React from "react";
import UserHeader from "../component/UserHeaderComp";
import RefreshLeadComp from "../component/RefreshLeadComp";
import { CgMenuBoxed } from "react-icons/cg";
import { BsHeadphones } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { MdOutlineAddTask } from "react-icons/md";
const LeadDetails = () => {
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
  return (
    <div className="bg-white py-[10px] pb-[30px]">
      <div className="h-3/4">
        <UserHeader />
        <RefreshLeadComp />
        <div className="flex flex-row justify-between px-[20px] my-[10px]">
          <div className="bg-[#EEE] flex flex-row rounded-xl py-[11px] px-[30px] items-center">
            <text className="text-black  mx-[5px]">Recording</text>
            <BsHeadphones color="black" />
          </div>
          <div className="bg-[#EEE] flex flex-row rounded-xl py-[11px] px-[30px] items-center">
            <text className="text-black mx-[5px]">Analysis</text>
            <CgMenuBoxed color="black" />
          </div>
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
      </div>
      <div className="flex justify-between px-[20px]">
        <button className="bg-[#FFE9E9] rounded-xl py-[11px] items-center px-[47px] flex flex-row">
          <text className="text-[#FF0707] mr-[5px]">Close</text>
          <MdClose color="#FF0707" />
        </button>
        <button className="bg-[#C7FFD5] rounded-xl py-[11px] px-[47px]  items-center flex flex-row">
          <text className="text-[#0C8B2C] mr-[5px]">Add Lead</text>
          <MdOutlineAddTask color="#0C8B2C" size={16} />
        </button>
      </div>
    </div>
  );
};
export default LeadDetails;
