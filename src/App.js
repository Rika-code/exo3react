
import  './component/App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "./page/Contact"
import Home from "./page/Home"
import Who from "./page/Who"
import Profil from "./page/Profil"
import Articles from "./page/Articles"




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/who" element={<Who/>}/>
      <Route path ="/profil" element={<Profil/>}/>
      <Route path="/articles" element={<Articles/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
