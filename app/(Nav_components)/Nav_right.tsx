"use client";
import React from "react";
import {
  set_Signup,
  setMobileMenu,
  MobileMenu_data,
} from "../../Redux-store/Redux-action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
function Nav_right() {
  const Mobilemenu = useSelector(MobileMenu_data);
  const { data } = useSession();
  const dispatch = useDispatch();
  const Image_src = data?.user?.image;
  return (
    <div className=" flex flex-row items-center ">
      {Mobilemenu ? (
        <div></div>
      ) : (
        <div
          onClick={() => dispatch(setMobileMenu(true))}
          className=" mr-[8px] 310:mr-[20px] cursor-pointer flex 860:hidden animate-slowfade "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[30px] w-[30px]  text-gray-300 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      )}
      <div
        
        
        className={`px-[16px] py-[5px] border  border-[#401f788e]   bg-green-500 select-none active:scale-90 transition-all duration-100  font-medium rounded-[8px] text-white 
    cursor-pointer   `}
      >
        <a href="https://wa.me/5516997998799?text=Ol%C3%A1%2C+estava+no+seu+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es">
          Whatsapp
          </a>
      </div>

      <div
        onClick={() => signOut()}
        className={`${
          Image_src?.length ? "" : " hidden"
        } flex flex-col items-center justify-center ml-[15px] cursor-pointer `}
      >
        <Image
          alt=""
          src={Image_src?.length ? Image_src : ""}
          width={1920}
          height={1080}
          className={`w-[36px] h-[36px]   rounded-full   `}
        />
        <span id="cursive" className=" text-gray-300 text-[12px] ">
          {data?.user?.name}
        </span>
      </div>
    </div>
  );
}

export default Nav_right;
