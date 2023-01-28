import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Account from "./pages/Account"
import Menu from "./pages/Menu"
import Model3 from "./pages/Model3"
import ModelS from "./pages/ModelS"
import ModelX from "./pages/ModelX"
import ModelY from "./pages/ModelY"
import Shop from "./pages/Shop"
import SolarPanels from "./pages/SolarPanels"
import SolarRoof from "./pages/SolarRoof"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ModelS/>} />
        <Route path="/model3" element={<Model3/>} />
        <Route path="/modelX" element={<ModelX/>} />
        <Route path="/modelY" element={<ModelY/>} />
        <Route path="/solarRoof" element={<SolarRoof/>} />
        <Route path="/solarPanels" element={<SolarPanels/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </div>
  )
}

export default App
