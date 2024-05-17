import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignIn = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    address: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !values.name ||
      !values.email ||
      !values.password ||
      !values.age ||
      !values.address
    ) {
      setError("Please fill in all fields");
    }


    try {
      const result = await axios.post(
        "http://localhost:8000/auth/signup",
        values
      );
      if (result.data.signupStatus) {
        console.log(result.data.signupStatus);
        Cookies.set("token", result.data.token, { expires: 7 });
        localStorage.setItem("valid", true);
        navigate("/");
      } else {
        alert(result.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validateEmail = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-3 w-1/2 border rounded">
        <div className="text-warning">{error && error}</div>
        <h2 className="flex justify-center text-xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="font-semibold text-lg" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border rounded w-full py-1 px-2 font-normal"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
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
          <div className="mb-3">
            <label className="font-semibold text-lg" htmlFor="age">
              Age:
            </label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="border rounded w-full py-1 px-2 font-normal"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="font-semibold text-lg" htmlFor="address">
              Address:
            </label>
            <textarea
              name="address"
              placeholder="Address"
              className="border rounded w-full py-1 px-2 font-normal"
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
            ></textarea>
          </div>
          <button
            className="btn btn-success w-full rounded-0 mb-2 bg-blue-500 text-white py-2 px-4"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
