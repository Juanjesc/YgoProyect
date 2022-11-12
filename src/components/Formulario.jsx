import useYgoContext from "../hooks/useYgoContext";
import { GiCardPick } from "react-icons/gi";
import Carta from "./Carta";
import Spinner from "./Spinner";

const Formulario = () => {
  const { input, setInput, changeInput, setChangeInput, consultAPI, setDatosCard, cargando, setCargando } = useYgoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(input)
    setChangeInput(input)
    if (input){
      consultAPI(input)
      //console.log('consultando...')
    }
    else{
      //console.log('no consultando nada, campo vacío')
      setDatosCard({})
    }
    setInput("");
  };
  return (
    <>
      <form action="" className=" flex items-center justify-center" onSubmit={handleSubmit}>
        <div className=" relative mx-auto flex w-3/4">
          <input
            type="text"
            className=" mt-8 w-full rounded-sm p-4 shadow-sm shadow-[red] backdrop-blur-sm md:mx-auto xl:w-2/6"
            placeholder="e.g. Dark Magician"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="absolute right-2 top-[42px] text-4xl text-[#16161a] xl:right-[35%]"
          >
            <GiCardPick />
          </button>
        </div>
      </form>
      {cargando ? (
        <Spinner />
      ) : <Carta />}
    </>
    
  );
};

export default Formulario;
