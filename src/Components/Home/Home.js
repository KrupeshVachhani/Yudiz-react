import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const Navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        Welcome To Krupesh's React Training Tasks
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-md">
        Explore a variety of interactive and engaging tasks that will help you
        enhance your React skills!
      </p>
      <button onClick={()=>{
        Navigate("/react-lifecycle")
      }} className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Home;
