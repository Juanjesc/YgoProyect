import {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';


const YgoContext = createContext();

const YgoProvider = ({children}) => {

  const [input, setInput] = useState('') //Valor del input cada vez que se escucha un cambio en el texto
  const [changeInput, setChangeInput] = useState('') //valor del input del formulario tras clickar en el botón submit
  const [datosCard, setDatosCard] = useState({})
  const [cargando, setCargando] = useState(false)

  /*COLORES DE LAS CARTAS */
  const colorsJson = {
    "normal": "#F8DB63", 
    "effect": "#F7C46B",
    "magic": "#7DCCA0",
    "trap": "#D278B1",
    "syncro": "#EFEBEC",
    "link": "#2d7eff",
    "xyz": "#121216",
    "ritual": "#6893C2",
    "pendulum": ["#7DCCA0","#F7C46B"]
  }

  const consultAPI = async (name) => {
    try {
     
      setCargando(true)
     
      const urlBase = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
      const urlContainName = `${urlBase}?name=${name}`;
      const { data, status } = await axios (urlContainName)
      console.log(data)
      setDatosCard(data)
    } catch (error) {
      console.log(error.response.status)
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Card not found",
          background: "#121216",
          color: "#fff",
          confirmButtonText: "Retry",
        }).then((result) => {
          setDatosCard({})
        });
      }
        console.log("Está ocurriendo un error con la API...");
    } finally{
      setCargando(false)
    }
  }
  return (
    <YgoContext.Provider 
      value={{
        input,
        setInput,
        changeInput,
        setChangeInput,
        colorsJson,
        datosCard,
        setDatosCard,
        consultAPI,
        cargando,
        setCargando
      }}
    >
      {children}
    </YgoContext.Provider>
  )
}

export {
  YgoProvider
}
export default YgoContext