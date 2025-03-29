import { Link } from "react-router-dom";
import React from "react";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 text-center">
      <h1 className="text-5xl font-bold text-blue-400">Welcome to PneumoScan</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl">
        An AI-powered tool for pneumonia detection using chest X-ray images.  
        Upload an image and let our deep learning model assist in diagnosis.
      </p>
      <div className="mt-8 space-x-4">
        <Link to="/predict">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Predict Now
          </button>
        </Link>
        <Link to="/about">
          <button className="px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
