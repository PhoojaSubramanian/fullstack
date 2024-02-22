import {  Navigate,BrowserRouter, Route,Routes } from "react-router-dom"
import { lazy } from "react"
import  LazyLayout  from "./components/ui/LazyLayout"
import Footer from "./components/ui/user/Footer"
const LazyLogin = lazy(()=>import("./pages/auth/Login"))
const LazyRegister = lazy(()=>import("./pages/auth/Register"))
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Navigate to ="/homecare/login"/>}/>
      <Route path ="/homecare/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path ="/homecare/register" element={<LazyLayout component={LazyRegister}/>}/>
      <Route path="/footer" element={<Footer/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
