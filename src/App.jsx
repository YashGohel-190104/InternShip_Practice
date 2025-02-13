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
import { FormDemo1 } from "./Components/forms/FormDemo1";
import { FormDemo3 } from "./Components/forms/FormDemo3";
import { FormDemo2 } from "./Components/forms/FormDemo2";
import { FormDemo4 } from "./Components/forms/FormDemo4";
import { TaskForm } from "./Components/forms/TaskForm";
import { FormDemo5 } from "./Components/forms/FormDemo5";
import { LoginForm } from "./Components/forms/LoginForm";

function App() {
  
  

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HotstarWelcome/>}></Route>
        <Route path="/home" element={<HotstarHome/>}></Route>
        <Route path="/movie" element={<HotstarMovie/>}></Route>
        <Route path="/formdemo1" element={<FormDemo1/>}></Route>
        <Route path="/formdemo2" element={<FormDemo2/>}></Route>
        <Route path="/formdemo3" element={<FormDemo3/>}></Route>
        <Route path="/formdemo4" element={<FormDemo4/>}></Route>
        <Route path="/formdemo5" element={<FormDemo5/>}></Route>
        <Route path="/task" element={<TaskForm/>}></Route>
        <Route path="/loginform" element={<LoginForm/>}></Route>
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
