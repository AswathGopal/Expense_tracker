import React,{useEffect} from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { dashboard, expenses } from '../Utils/Icons'
import axios from 'axios'
const SideNavBar = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8000/verify", { token: Cookies.get("token") })
  //     .then((result) => {
  //       console.log(result.data.Status)
  //       if (result.data.Status = "ok") navigate("/dashboard");
  //       if (result.data.Status = "not ok") navigate("/");
  //     })
  //     .then((err) => console.log(err));
  // }, []);

  return (
    <div className="container-fluid">
    <div className="flex">
      {/* Side Navigation */}
      <div className="w-56 bg-blue-500">
        <div className="flex flex-col items-center sm:items-start px-3 pt-2 min-h-screen">
          <Link
            to="/dashboard"
            className="flex items-center pb-3 px-2 text-white text-decoration-none"
          >
            <span className="text-lg font-semibold hidden sm:inline">
              Aswath
            </span>
          </Link>
          {/* Navigation Links */}
          <ul className="flex flex-col mb-auto sm:mb-0 items-start mt-3">
            <li className="w-full">
              <Link to="/dashboard/analytics" className="text-white px-4 py-2 flex items-center hover:bg-blue-600">
                <i className="text-lg bi-speedometer2 mr-2"></i>
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            </li>
            <li className="w-full">
              <Link to="/dashboard/income" className="px-4 py-2 flex items-center text-white hover:bg-blue-600">
                {expenses}
                <span className="hidden sm:inline">Income</span>
              </Link>
            </li>
            <li className="w-full">
              <Link to="/dashboard/expense" className="px-4 py-2 flex items-center text-white hover:bg-blue-600">
                <i className="text-lg bi-columns mr-2"></i>
                <span className="hidden sm:inline">Expense</span>
              </Link>
            </li>
            <li className="w-full">
              <Link className="px-4 py-2 flex items-center text-white hover:bg-blue-600">
                <i className="text-lg bi-power mr-2"></i>
                <span className="hidden sm:inline">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="p-2 bg-gray-200 shadow">
          <h4 className="text-center text-lg font-semibold">Expense Tracker</h4>
        </div>
        <div className="flex-grow p-4 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  </div>
  


  )
}

export default SideNavBar