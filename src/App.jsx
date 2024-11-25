<<<<<<< HEAD
import React from "react"
import ServerComponent from './Components/Continoulsy/ServerComponent.server'
export default function App(){
  return (
 <div>
  <h1>Welcome to react server components</h1>
  <ServerComponent />
 </div>
  )
}

=======
import About from '../../Home/About/About';
import Home from '../../Home/home';
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/About" element = {<About />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App
>>>>>>> cf7ee1cf9d73c6120a5e6535278079a99e3bd348
