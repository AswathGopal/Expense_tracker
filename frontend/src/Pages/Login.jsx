import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";
import Cookies from 'js-cookie'
const Login = () => {
  const [values, setValues] = useState({
    email:'',
    password:''    
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(values);
    if(!values.email || !values.password ){
      alert("Fill the neccessary details")
    }
    try {
      const result = await axios.post('http://localhost:8000/auth/login', values);
      console.log(result);
      if (result.data.LoginStatus) {
        Cookies.set("token", result.data.token, { expires: 7 });
        alert("Login Success")
        navigate('/dashboard');
      } else {
        setError(result.data.message);
      }
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="py-3 px-4 w-1/4  border rounded">
        <div className="text-warning">{error && error}</div>
        <h2 className="flex justify-center font-bold text-xl">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="font-semibold text-lg" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border rounded w-full py-1 px-2 font-normal"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="font-semibold text-lg" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
              className="border rounded w-full py-1 px-2 font-normal"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button
            className=" w-full rounded-0 mb-2 bg-blue-500 text-white py-2 px-4"
            type="submit"
          >
            Login
          </button>
          <div className=" flex justify-center mb-2">
            <span className="text-lg">
              Not Registered?{" "}
              <Link className="underline" to="/signin">
                Create an account here
              </Link>
            </span>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
