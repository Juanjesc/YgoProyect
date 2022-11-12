import { YgoProvider } from "./context/YgoProvider";
import Header from "./components/Header";
import Formulario from "./components/Formulario"
import Footer from "./components/Footer";

//En este componente, Formulario incluye el componente Carta
function App() {
  return (
    <>
      <YgoProvider>
        <Header />
        <Formulario /> 
        <Footer />
      </YgoProvider>
    </>
  );
}

export default App;
