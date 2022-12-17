import { Routes, Route } from "react-router-dom"
import About from "./components/About/About"
import Contacts from "./components/Contacts/Contacts"
import { Counter } from "./components/Counter/Counter"
import Home from "./components/Home/Home"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contacts/> } />
        <Route path="counter" element={ <Counter/> } />
      </Routes>
    </div>
  )
}

export default App