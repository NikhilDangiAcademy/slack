"use client";
import { useRef, useState, useEffect } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { MdOutlineAddTask } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
interface AudioProps {
  url: string;
  closeAudioPop: () => void;
}
const AudioPlayer: React.FC<AudioProps> = ({ url, closeAudioPop }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [speedTime, setSpeedTime] = useState<number>(1);

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, [url]);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      const updateTime = () => {
        setCurrentTime(audioElement.currentTime);
      };

      // Set duration when loaded metadata
      const onLoadedMetadata = () => {
        setDuration(audioElement.duration);
      };

      audioElement.addEventListener("timeupdate", updateTime);
      audioElement.addEventListener("loadedmetadata", onLoadedMetadata);

      // Cleanup event listeners on component unmount
      return () => {
        audioElement.removeEventListener("timeupdate", updateTime);
        audioElement.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }
  }, []);

  const handleSpeedChange = () => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speedTime;
    }
  };

  useEffect(() => {
    handleSpeedChange();
  }, [speedTime]);

  const play = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current;

      if (audioElement.src) {
        audioElement
          .play()
          .then(() => setIsPlaying(true)) // Set playing state to true if play is successful
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      } else {
        console.error("Audio source not set");
      }
    } else {
      console.error("Audio reference is not set");
    }
  };

  const stop = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current;
      audioElement.pause(); // Pause the playback
      setIsPlaying(false); // Update playing state
    } else {
      console.error("Audio reference is not set");
    }
  };

  const handleSeekChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="  flex   rounded-2xl flex-col relative p-[4px] bg-white shadow-custom-inset shadow-custom-lg shadow-custom-subtle">
      <div className="flex flex-row justify-between mt-[10px] px-[5%]">
        <div className="px-[16px]  flex-col w-[70%] pt-[8px]">
          <input
            type="range"
            className="flex  w-[100%] "
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeekChange}
            step="0.1"
          />
          <div className="flex justify-between">
            <text className="text-black text-[9px] ">
              {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
            </text>
            <text className="text-black text-[9px]">
              {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
            </text>
          </div>
        </div>

        <button
          onClick={() => {
            speedTime === 1 ? setSpeedTime(2) : setSpeedTime(1);
          }}
        >
          <div className="bg-[#DDD] flex  self-center rounded-xl px-[8px] p-[5px]">
            <text className="text-black text-center text-[12px]">
              {speedTime} x
            </text>
          </div>
        </button>
        <div className="flex">
          {isPlaying ? (
            <button
              className="bg-[#00B6FF] p-[6px] rounded-3xl self-center"
              onClick={() => stop()}
            >
              <CiPause1 color="white" size={20} />
            </button>
          ) : (
            <button
              className="bg-[#00B6FF] p-[6px] rounded-3xl self-center"
              onClick={() => play()}
            >
              <CiPlay1 color="white" size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="mt-[10px] p-[7px] flex justify-between">
        <button
          onClick={() => closeAudioPop()}
          className="flex items-center  py-[8px] px-[20px] bg-[#FFE9E9] rounded-xl"
        >
          <text className="text-[#FF0707] text-[12px] pr-[6px]">Close</text>
          <IoIosClose color="#FF0707" size={16} />
        </button>
        <button className=" flex items-center bg-[#C7FFD5] py-[8px] px-[20px] rounded-xl">
          <text className="text-[#0C8B2C] text-[12px]  pr-[6px]">Add Lead</text>
          <MdOutlineAddTask color="#0C8B2C" size={16} />
        </button>
      </div>
      <audio ref={audioRef} color="00B6FF" src={url} />
    </div>
  );
};

export default AudioPlayer;
