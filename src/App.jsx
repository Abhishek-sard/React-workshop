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
