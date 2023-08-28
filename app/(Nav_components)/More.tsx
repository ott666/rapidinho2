"use client";
import React from "react";
import {
  ChevronDownIcon,
  BookOpenIcon,
  NewspaperIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ChooseColour from "./ChooseColour";
import { useDispatch, useSelector } from "react-redux";
import {
  setStarMode,
  StarMode_data,
  setStarColur,
  StarColur_data,
} from "../../Redux-store/Redux-action";
import { useState, useEffect, useRef } from "react";
function More() {
  const starmode = useSelector(StarMode_data);
  const colour = useSelector(StarColur_data);
  const dispatch = useDispatch();
  const [open, setopen] = useState<boolean>(false);
  let MenuRef = useRef<HTMLDivElement>(null);
  const StarModeStatus = () => {
    const status = localStorage.getItem("starMode");
  
    if (status === "active") {
      dispatch(setStarMode("disable"));
      localStorage.setItem("starMode", "disable");
    } else {
      dispatch(setStarMode("active"));
      localStorage.setItem("starMode", "active");
    }
  };

  const onColourChange = (e: string) => {
    dispatch(setStarColur(e));
    localStorage.setItem("colour", e);
  };

  useEffect(() => {
    let handler = (e: any) => {
      if (!MenuRef.current?.contains(e.target)) {
        setopen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="Nav_text flex flex-row group relative ">
      <div onClick={() => setopen(true)} className=" flex flex-row">
        Mais
        <ChevronDownIcon className=" w-[18px] h-[18px]  text-gray-300 translate-y-[2px] group-hover:text-[#0000009e] group-hover:text-gray-50 ml-[10px]" />
      </div>
      <div
        ref={MenuRef}
        className={`w-[400px] h-auto rounded-[10px] bg-[#0c0728]  p-[20px] absolute right-[-150px] animate-slideup0  mt-[43px] ${
          open ? "flex" : " hidden"
        } flex-col   items-center justify-center `}
      >
        <div className="w-[100px] h-[25px] absolute top-[-22px]  "></div>
        <div className=" absolute top-[-13px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-triangle-fill text-[#0c0728] "
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
            />
          </svg>
        </div>
        
       
        <a
          href="https://www.instagram.com/rapidinho.solutions/"
          className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[15px] "
        >
          <div className="mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-instagram text-sky-500 "
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </div>
          <div className=" flex flex-col">
            <span className=" font-bold text-gray-200 text-[16px] ">
              Instagram
            </span>
            <p className=" mt-[5px] text-[14px] text-gray-300 ">
              Confira nossas postagens mais recentes!
            </p>
          </div>
        </a>
        <div className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[15px] ">
          <div className="mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-discord text-sky-500 "
              viewBox="0 0 16 16"
            >
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
            </svg>
          </div>
          <div className=" flex flex-col">
            <a href="https://discord.gg/CAWAWHtNQK" className=" font-bold text-gray-200 text-[16px] ">
              Servidor do Discord
            </a>
            <p className=" mt-[5px] text-[14px] text-gray-300 ">
              Faça parte da nossa comunidade no discord, lá você tira suas dúvidas e interage conosco.
            </p>
          </div>
        </div>
        <div className="w-full h-auto hover:bg-[#221d41] active:scale-95 transition-all duration-100 select-none rounded-[8px] flex flex-row py-[13px] px-[15px] ">
          <div className="mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-star text-sky-500 "
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>
          <div
            onClick={() => StarModeStatus()}
            className="w-full h-auto flex flex-col"
          >
            <div className=" font-bold text-gray-200 text-[16px] flex flex-col items-start  justify-start  ">
              <div>
                <span>Estrelas : </span>
              </div>
              <div className=" mt-[10px]">
                {starmode === "active" ? (
                  <div className=" text-teal-500  text-[14px] "> Ativado </div>
                ) : (
                  <div className=" text-rose-500  text-[14px] "> Desativado </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto hover:bg-[#221d41]  select-none rounded-[8px] flex flex-row py-[13px] px-[15px] ">
          <div className="mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-star text-sky-500 "
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>
          <ChooseColour
            colour={colour}
            onColourChange={onColourChange}
            text_tittle={true}
          />
        </div>
      </div>
    </div>
  );
}

export default More;
