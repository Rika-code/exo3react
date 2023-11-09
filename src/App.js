import logo from './logo.svg';
import  './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "./Contact"
import Home from "./Home"
import Who from "./Who"




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/who" element={<Who/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
