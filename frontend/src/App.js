import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import SignIn from './Pages/SignIn'
import SideNavBar from "./Components/SideNavBar";
import Income from "./Pages/Income";
import Expense from "./Pages/Expense";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
     <BrowserRouter>
       <Routes>
             <Route path='/' element={<Login/>}></Route>
             <Route path='/signin' element={<SignIn/>}></Route>
             <Route path='/dashboard' element={<SideNavBar/>}>
              <Route path='/dashboard/income' element={<Income/>}></Route>
              <Route path='/dashboard/expense' element={<Expense/>}></Route>
              <Route path='/dashboard/analytics' element={<Dashboard/>}></Route>
             </Route>
       </Routes>
     </BrowserRouter>
  );
}

export default App;
