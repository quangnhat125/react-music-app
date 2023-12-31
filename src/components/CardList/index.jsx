import { useState, useEffect, useRef } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { updateTabSelected } from "../../App/slice/tabSlice";
import useSound from "use-sound";
import useWavesurfer from "../Ultils/useWavesurfer";

const CardList = ({ myImage, myVideo }) => {
  const tabSelected = useSelector((state) => state.tab.test);
  const content = useSelector((state) => state.tab.tab);
  const contentSelected = content.filter(
    (content) => content.id === tabSelected
  );
  const dispatch = useDispatch();

  const setTabSelected = (e) => {
    dispatch(updateTabSelected(e));
  };

  const audioSrc = myVideo;
  const waveContainerRef = useRef(null);
  const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } =
    useWavesurfer(waveContainerRef, audioSrc, () => {});

  console.log("isPlaying ", isPlaying);

  return (
    <>
      <div className="flex justify-between gap-[10px] mt-[24px] py-[32px] px-[8px]">
        <div className="relative border-[2px] border-[#1d1d1d] rounded-[20px] bg-[#fff] p-[8px] w-[170px] rotate-[-3deg] transform hover:translate-y-3 transition duration-1500 ease-out ">
          <div className="absolute left-[86px] top-[20px] w-[12px] h-[12px] bg-[#1d1d1d] rounded-full shadow-custom2 z-1 rotate-[3deg]">
            <div className="w-[12px] h-[12px] bg-[#1d1d1d] rounded-full z-1 relative top-[-44px]"></div>
            <div className="relative w-[6px] bg-[#fff] h-[50px] border-[1px] border-[#1d1d1d] rounded-[99rem] bottom-[52px] left-[3px]"></div>
          </div>
          <div className="overflow-hidden rounded-[15px] aspect-[4/3]">
            <img src={myImage} className="w-[100%]" />
          </div>
          <div>
            <div className="flex justify-between items-center px-[8px] pt-[12px]">
              <span>{contentSelected[0].content[0].songs}</span>
              <button>
                <AiFillPlayCircle className="w-[30px] h-[30px]" />
              </button>
            </div>
            <div>
              <span className="text-base font-semibold mt-[4px] px-[8px] pb-[8px]">
                {contentSelected[0].content[0].name}
              </span>
            </div>
          </div>
        </div>
        <div className="relative border-[2px] border-[#1d1d1d] rounded-[20px] bg-[#fff] p-[8px] w-[170px] rotate-[5deg] top-[20px] transform hover:translate-y-3 transition duration-1500 ease-out ">
          <div className="absolute left-[20px] top-[20px] w-[12px] h-[12px] bg-[#1d1d1d] rounded-full shadow-custom2 z-1 rotate-[-5deg]">
            <div className="w-[12px] h-[12px] bg-[#1d1d1d] rounded-full z-1 relative top-[-44px]"></div>
            <div className="relative w-[6px] bg-[#fff] h-[50px] border-[1px] border-[#1d1d1d] rounded-[99rem] bottom-[52px] left-[3px]"></div>
          </div>
          <div className="overflow-hidden rounded-[15px] aspect-[4/3]">
            <img
              src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg"
              className="w-[100%]"
            />
          </div>
          <div>
            <div className="flex justify-between items-center px-[8px] pt-[12px]">
              <span>{contentSelected[0].content[1].songs}</span>
              <button>
                <AiFillPlayCircle className="w-[30px] h-[30px]" />
              </button>
            </div>
            <div>
              <span className="text-base font-semibold mt-[4px] px-[8px] pb-[8px]">
                {contentSelected[0].content[1].name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[8px] py-[16px]">
        <div className="w-[100%] rotate-[3deg]">
          <div className="relative flex flex-row items-center border-[2px] border-[#1d1d1d] rounded-[20px] p-[16px]">
            <div className="absolute w-[12px] h-[12px] bg-black rounded-full z-1 top-[10px] left-[10px]">
              <div className="relative w-[12px] h-[12px] bg-black rounded-full left-[-40px] top-[-40px]"></div>
              <div className="relative w-[8px] bg-white border-[2px] rounded-[99em] h-[55px] left-[-17px] top-[-55px] rotate-[-44deg] border-[#1d1d1d]"></div>
            </div>
            <div
              className={`w-[60px] h-[60px] rounded-[15px] overflow-hidden aspect-[4/3] rounded-full ${
                isPlaying ? "animate-spin" : ""
              }`}
            >
              <img src="https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg" />
            </div>
            <div className="ml-[8px] grow">
              <div className="px-[8px] pt-[12px]">
                <span className="font-bold">Marshello</span>
                <button onClick={handlePlayPause}>
                  {!isPlaying ? (
                    <AiFillPlayCircle className="w-[30px] h-[30px]" />
                  ) : (
                    <AiFillPauseCircle className="w-[30px] h-[30px]" />
                  )}
                </button>
              </div>
              <h2 className={`flex justify-between items-center text-[#5f5f5f] mt-[2.2px] px-[8px] pb-[8px] ${isPlaying ? "hidden" : "block"}`}>
                Hate on other side<span className={`${isPlaying ? "block" : ""}`}>3:40</span>
              </h2>
              <div className={`${!isPlaying ? "opacity-0" : "opacity-1"} w-[100%] h-[30px]`} ref={waveContainerRef}></div>
            </div>
            <div className="absolute w-[12px] h-[12px] bg-black rounded-full z-1 top-[120px] left-[415px]">
              <div className="relative w-[12px] h-[12px] bg-black rounded-full left-[-40px] top-[-40px]"></div>
              <div className="relative w-[8px] bg-white border-[2px] rounded-[99em] h-[60px] left-[-18px] top-[-56px] rotate-[-44deg] border-[#1d1d1d]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
