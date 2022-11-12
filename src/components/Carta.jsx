import React from "react";
import useYgoContext from "../hooks/useYgoContext";
import { useEffect } from "react";
import ygoImg from "../img/diosesEgipcios.png"


const Carta = () => {
  const { changeInput, colorsJson, datosCard } = useYgoContext();
  // Habrá que desectructurizar todos los datos necesarios de datosCard aquí en este componente
  // en data[0].loquesea encontramos nuestros datos...
  
  if (Object.keys(datosCard).length > 0){
    var { data } = datosCard
    var {atk, def, desc, name, attribute, archetype, type, race, id, level, card_images, linkval} = data[0]

  }
  return (
    <>
      {Object.keys(datosCard).length > 0 ? (
        <div className=" mx-auto mt-8 w-[95%] border-4 border-black md:border-[8px] xl:w-[1000px] ">
          <div
            className={
              type === "Effect Monster"
                ? "bg-[#ffaf24]"
                : type === "Normal Monster"
                ? "bg-[#F8DB63]"
                : type === "Ritual Monster"
                ? "bg-[#6893C2]"
                : type === "Synchro Monster"
                ? "bg-[#EFEBEC]"
                : type === "Link Monster"
                ? " bg-bgLink bg-cover bg-no-repeat"
                : type === "Spell Card"
                ? "bg-[#7DCCA0]"
                : type === "Trap Card"
                ? "bg-[#D278B1]"
                : type === "Pendulum Effect Monster"
                ? " bg-gradient-to-b from-amber-500 to-green-700"
                : type === "Pendulum Tuner Effect Monster"
                ? " bg-gradient-to-b from-amber-500 to-green-700"
                : type === "Pendulum Normal Monster"
                ? " bg-gradient-to-b from-amber-200 to-green-700"
                : type === "Pendulum Effect Fusion Monster"
                ? " bg-gradient-to-b from-[#8200e5] to-green-700"
                : type === "XYZ Pendulum Effect Monster"
                ? " bg-gradient-to-b from-[#121216] to-green-700"
                : type === "XYZ Monster"
                ? " bg-bgxyz bg-cover bg-no-repeat"
                : type === "Fusion Monster"
                ? "bg-[#9A82C1]"
                : "bg-[#F8DB63]"
            }
          >
            <div
              className={
                type === "Link Monster" ||
                type === "XYZ Monster" ||
                type === "XYZ Pendulum Effect Monster" ||
                type === "Pendulum Effect Fusion Monster"
                  ? `w-full gap-8 p-4 tracking-wide text-white shadow-customCard shadow-emerald-900 md:flex `
                  : `w-full gap-8 p-4 shadow-customCard shadow-emerald-900 md:flex`
              }
            >
              <img
                src={card_images[0].image_url}
                alt="imgYGOCard"
                className=" mx-auto rounded-xl shadow-md shadow-black md:mx-0 md:h-full md:w-[30%] md:self-center "
              />
              <div className=" md:flex md:flex-col">
                <div className=" mt-4 flex flex-col">
                  <small className="text mt-2 block font-mono text-sm font-bold uppercase">
                    {name}
                  </small>
                  {level && (
                    <small className="text mt-2 block font-mono text-sm font-bold">
                      Level: {level}
                    </small>
                  )}
                  {linkval && (
                    <small className="text mt-2 block font-mono text-sm font-bold">
                      Link Ratio: {linkval}
                    </small>
                  )}
                  <small className="text mt-2 font-mono text-sm font-bold">
                    {race} / {type} / {attribute}{" "}
                  </small>
                  {atk && (
                    <small className="text mt-2 block font-mono text-sm font-bold uppercase">
                      ATK/ {atk} DEF/ {def}
                    </small>
                  )}
                </div>
                <div>
                  <p className=" my-4 w-full bg-[#121216] bg-opacity-30 p-1 pl-2 font-mono text-xl text-white">
                    Description
                  </p>
                  <p className=" mt-4">{desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" my-20 mx-auto flex w-[90%] justify-center xl:w-1/2">
          <img
            src={ygoImg}
            alt="imgDioses"
            className=" drop-shadow-customImgGods"
          />
        </div>
      )}
    </>
  );
};

export default Carta;
