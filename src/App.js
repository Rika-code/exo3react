import logo from './logo.svg';
import  './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "./page/Contact"
import Home from "./page/Home"
import Who from "./page/Who"




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
