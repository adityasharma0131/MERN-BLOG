import React from "react";

const Login = () => {
  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center space-y-6 w-[80%] md:w-[30%] lg:w-[25%] p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold">Login to your Account</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button className="w-full px-4 py-2 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-900 focus:outline-none ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
