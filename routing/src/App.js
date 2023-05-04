import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/shop" element={<Shop/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
