"use client";
import React from "react";
import { setopctionchoose } from "../../Redux-store/Redux-action";
import { useDispatch, useSelector } from "react-redux";
import { opctionchoose_data } from "../../Redux-store/Redux-action";
import Scale_Image from "../(Body_Section)/(ScaleImg)/Scale_Image";
import { Image_src_data } from "../../Redux-store/Redux-action";
interface Props {
  data: string;
  isMobile: boolean;
}
function ActiveNav() {
  const dispatch = useDispatch();
  const NavTag = useSelector(opctionchoose_data);
  const ImageSrc = useSelector(Image_src_data);
  return (
    <div className=" w-full h-[100px] 340:h-[70px] flex flex-row flex-wrap items-center text-gray-200  select-none justify-around">
      {ImageSrc.data ? <Scale_Image src_data={ImageSrc} /> : <div></div>}
      <div
        onClick={() => dispatch(setopctionchoose("All"))}
        className={` ${
          NavTag === "All" ? "  text-sky-500  scale-110  " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0 text-[13px] 600:text-[15px] flex flex-col items-center `}
      >
        All
      </div>
      <div
        onClick={() => dispatch(setopctionchoose("Landing Pages"))}
        className={` ${
          NavTag === "Landing Pages" ? "  text-sky-500   scale-110" : ""
        } hover:text-sky-500 cursor-pointer text-[13px] mx-[5px] 340:mx-0  ml-[10px] 600:text-[15px]`}
      >
        Landing Pages
      </div>
      <div
        onClick={() => dispatch(setopctionchoose("Instagram"))}
        className={` ${
          NavTag === "Instagram" ? "  text-sky-500   scale-110" : ""
        } hover:text-sky-500 cursor-pointer text-[13px] mx-[5px] 340:mx-0  ml-[10px] 600:text-[15px]`}
      >
        Instagram
      </div>
      <div
        onClick={() => dispatch(setopctionchoose("Mídias e publicidade"))}
        className={` ${
          NavTag === "Mídias e publicidade" ? "  text-sky-500  scale-110 " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0  text-[13px] ml-[10px] 600:text-[15px]`}
      >
        Mídias e publicidade
      </div>
      <div
        onClick={() => dispatch(setopctionchoose("E-commerce"))}
        className={` ${
          NavTag === "E-commerce" ? "  text-sky-500  scale-110 " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0  text-[13px] ml-[10px] 600:text-[15px]`}
      >
        E-commerce
      </div>
    
    </div>
  );
}

export default ActiveNav;
