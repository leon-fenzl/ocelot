import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import "./main.css"
export default function App(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    )
}