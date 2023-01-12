import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMenu from "./components/Navbar";
import Home from './pages';
import TCCS from './pages/tccs';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tccs" element={<TCCS />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;