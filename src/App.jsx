import React from "react";
import { BrowserRouter,Route,Routes } from "react-router";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
const  App=()=> {
  return (
<BrowserRouter>
<Routes>
    {/* Home*/}
  <Route path="/" element={<Home />}/>
   {/* Register*/}
   <Route path="/register" element={<Register />}/>
    {/* Login*/}
  <Route path="/login" element={<Login />}/>
   {/* Dashboard*/}
   <Route path="/dashboard" element={<Dashboard />}/>
</Routes>
</BrowserRouter>
    
  );
}

export default App;