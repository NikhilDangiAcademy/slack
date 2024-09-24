import React, { useState } from "react";
import { Button } from "@nextui-org/react";
const CloseLeadPopUp = ({
  handlePostComment,
}: {
  handlePostComment(
    isSmallTicket: boolean,
    isWeakCX: boolean,
    isLocationIssue: boolean
  ): void;
}) => {
  const [isSmallTicket, setIsSmallTicket] = useState<boolean>(false);
  const [isWeakCX, setIsWeakCX] = useState<boolean>(false);
  const [isLocationIssue, setIsLocationIssue] = useState<boolean>(false);

  const handleCheckboxTicket = () => {
    setIsSmallTicket(!isSmallTicket);
  };
  const handleCheckboxWeak = () => {
    setIsWeakCX(!isWeakCX);
  };
  const handleCheckboxIssue = () => {
    setIsLocationIssue(!isLocationIssue);
  };

  return (
    <div className=" absolute bg-gradient-to-br from-[#CEFCFF] to-[#A8CCFF] shadow-lg top-[40%] w-3/4 left-[13%] right-[15%]   rounded-2xl  px-[21px] py-[30px] shadow-custom">
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
          onClick={() =>
            handlePostComment(isSmallTicket, isLocationIssue, isWeakCX)
          }
          className="bg-[#00B6FF] rounded-2xl px-[14px] py-[10px]  "
        >
          <text className="text-[12px]">Post Comment</text>
        </Button>
      </div>
    </div>
  );
};
export default CloseLeadPopUp;
