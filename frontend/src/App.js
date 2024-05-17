import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import SignIn from './Pages/SignIn'
import { MainLayout } from "./Layouts/Layouts";
import Home from "./Pages/Home";
import SideNavBar from "./Components/SideNavBar";
import Income from "./Pages/Income";
function App() {
  return (
     <BrowserRouter>
       <Routes>
             <Route path='/' element={<Login/>}></Route>
             <Route path='/signin' element={<SignIn/>}></Route>
             <Route path='/dashboard' element={<SideNavBar/>}>
              {/* <Route path="/home" element={<Home/>}></Route> */}
              <Route path='/dashboard/income' element={<Income/>}></Route>
             </Route>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
