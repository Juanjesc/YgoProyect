import React from "react";
import logoYgo from "../img/ygologo.png";

const Header = () => {
  return (
    <div className="mx-auto mt-4 w-3/4 md:w-max flex flex-col justify-center items-center ">
      <img src={logoYgo} alt="logoYgo" className="" />
      <div className=" mb-8">
        <p className=" mt-8 text-center font-indi text-2xl text-white drop-shadow-custom md:text-left ">
          Look for a card and consult its information 🧐
          <span className="block mt-2 text-[20px] text-center">* Type the full name card in english please 🤗</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
