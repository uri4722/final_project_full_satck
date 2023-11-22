import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Todo from "../pages/Todos";
import Albums from "../pages/Albums";
import Posts from "../pages/Posts";
import NoPage from "../pages/NoPage";
import { useState, createContext } from "react";
import Logout from "../pages/Logout";
import "../pages/css/App.css"

export const UserContext = createContext()

function MyWeb() {
  const [user, setUser] = useState(defaultUser())

  function defaultUser() {
    return sessionStorage.getItem("user") ?
      JSON.parse(sessionStorage.getItem("user")) :
      JSON.parse(localStorage.getItem("user"))
  }


  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route index element={<Home />} />
        < Route path='Login' element={<Login setUser={setUser} />} />
        <Route path='Info' element={<Info />} />
        <Route path='Logout' element={<Logout />} />
        <Route path='Todos' element={<Todo />} />
        <Route path='Albums' element={<Albums />} />
        <Route path='Posts' element={<Posts />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </UserContext.Provider>

  )
}


export default MyWeb