//KNown error when using BrowserRouter on Github pages react  websites
//import {BrowserRouter, Routes, Route} from "react-router-dom"

//HashRouter - reccomended for github pages react frontend website 
import {HashRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

function App() {
  return (
     <HashRouter>            
      <NavBar/>  
      <Routes>       
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </HashRouter>    
  );

}

export default App;
