"use client";
import { useRef, useState, useEffect } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { MdOutlineAddTask } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { HiOutlineForward, HiOutlineBackward } from "react-icons/hi2";
interface AudioProps {
  url: string;
  closeAudioPop: () => void;
}
const AudioPlayer: React.FC<AudioProps> = ({ url, closeAudioPop }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

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
    <div className="border-[#00B6FF] border-[0.5px] flex py-[20px] rounded-2xl flex-col relative p-[4px] bg-white shadow-custom-inset shadow-custom-lg shadow-custom-subtle">
      <div className="flex justify-between mt-[10px]   px-[10%] ">
        <button
          onClick={() => {
            if (audioRef.current)
              audioRef.current.currentTime = audioRef.current.currentTime - 10;
          }}
        >
          <HiOutlineBackward color="black" size={24} />
        </button>
        {isPlaying ? (
          <button onClick={() => stop()}>
            <CiPause1 color="black" size={20} />
          </button>
        ) : (
          <button onClick={() => play()}>
            <CiPlay1 color="black" size={20} />
          </button>
        )}
        <button
          onClick={() => {
            if (audioRef.current)
              audioRef.current.currentTime = audioRef.current.currentTime + 10;
          }}
        >
          <HiOutlineForward color="black" size={24} />
        </button>
      </div>

      <div className="px-[16px] mt-[10px]">
        <input
          type="range"
          className="flex w-[98%] "
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeekChange}
          step="0.1"
        />
        <div className="flex justify-between mt-[5px]">
          <text className="text-black text-[9px] ">
            {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
          </text>
          <text className="text-black text-[9px]">
            {" "}
            {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
          </text>
        </div>
      </div>
      <div className="mt-[10px] px-[10px] flex justify-between">
        <button
          onClick={() => closeAudioPop()}
          className="flex items-center  py-[10px] px-[30px] bg-[#FFE9E9] rounded-xl"
        >
          <text className="text-[#FF0707] text-[12px] pr-[6px]">Close</text>
          <IoIosClose color="#FF0707" size={16} />
        </button>
        <button className=" flex items-center bg-[#C7FFD5] py-[10px] px-[30px] rounded-xl">
          <text className="text-[#0C8B2C] text-[12px]  pr-[6px]">Add Lead</text>
          <MdOutlineAddTask color="#0C8B2C" size={16} />
        </button>
      </div>
      <audio ref={audioRef} src={url} />
    </div>
  );
};

export default AudioPlayer;
