// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { ArrayDemo1 } from "./Components/ArrayDemo1";
// import { ArrayDemo2 } from "./Components/ArrayDemo2";
// import { ArrayDemo3 } from "./Components/ArrayDemo3";
// import { ArrayDemo4 } from "./Components/ArrayDemo4";
// import { Content } from "./Components/Content";
// import { Task_1 } from "./Components/Task-1";
// import { UseStateDemo } from "./Components/UseStateDemo";
// import Footer from "./Components/Footer";
// import { Header } from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { HotstarHome } from "./Components/Hotstar/HotstarHome";
import { HotstarWelcome } from "./Components/Hotstar/HotstarWelcome";
import { HotstarMovie } from "./Components/Hotstar/HotstarMovie";
import { Error404 } from "./Components/Hotstar/Error404";

function App() {
  
  

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HotstarWelcome/>}></Route>
        <Route path="/home" element={<HotstarHome/>}></Route>
        <Route path="/movie" element={<HotstarMovie/>}></Route>
        <Route path="/*" element={<Error404/>}></Route>
      </Routes>
      {/* <Header></Header> */}
      {/* <Content></Content>     */}
      {/* <Footer></Footer> */}

      {/* <ArrayDemo1></ArrayDemo1> */}
      {/* <ArrayDemo2></ArrayDemo2> */}
      {/* <ArrayDemo3></ArrayDemo3> */}
      {/* <ArrayDemo4></ArrayDemo4> */}
      {/* <Task_1></Task_1> */}
      {/* <UseStateDemo></UseStateDemo> */}
    </div>
  )
}

export default App
