import React from "react";

const Footer = () => {
  return (
    <div className=" mt-8 flex flex-col justify-center xl:gap-16 gap-8 border-t px-4 py-8 xl:flex-row">
      <p className=" text-center font-indi text-lg font-bold text-white drop-shadow-customFooter">
        By:{" "}
        <a
          href="https://www.juanjesc.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className=" block cursor-pointer underline underline-offset-4"
        >
          Juanjesc.dev
        </a>
      </p>
      <p className="text-center font-indi  text-lg font-bold text-white drop-shadow-customFooter">
        Api Data provided by:
        <a
          href="https://ygoprodeck.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" block cursor-pointer underline underline-offset-4"
        >
          Ygoprodeck.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
