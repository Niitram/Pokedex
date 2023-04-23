import './App.css';
import { Route, Routes, useLocation } from "react-router-dom"

import Detail from './Views/Detail/Detail';
import FormCreate from './Views/FormCreate/FormCreate';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import ModifyPokemon from './Views/ModifyPokemon/ModifyPokemon';



function App() {
  const locationNow = useLocation()

  return (
    <div className="App">
      <div >
        {
          locationNow.pathname !== "/" && <Nav />
        }
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createPokemon" element={<FormCreate />} />
        <Route path="/modify/:id" element={<ModifyPokemon />} />
      </Routes>
      <div >
        {
          locationNow.pathname !== "/" && <Footer />
        }
      </div>
    </div>
  );
}

export default App;
