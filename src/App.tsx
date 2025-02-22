import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Neo from "./components/neo/Neo";
import MarsRover from "./components/marsRover/MarsRover";

import Loader from "./components/loader/Loader";
import Apod from "./components/apod/apod";
import SpaceWeather from "./components/spaceweather/SpaceWeather";
import Exoplanets from "./components/exoplanet/Exoplanet";
import { Satellites } from "./components/satelites/Satelites";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading delay
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
        {/* 🔹 Navbar */}
        <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg border-b border-blue-500/50">
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* 🚀 Logo */}
            <h1 className="text-2xl font-extrabold text-blue-400 tracking-wide">
              🚀 NASA Space Dashboard
            </h1>

            {/* 🌎 Desktop Links */}
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300"
              >
                APOD
              </Link>
              <Link
                to="/neo"
                className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Asteroids
              </Link>
              <Link
                to="/mars"
                className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Mars Rover
              </Link>
              <Link
                to="/space-weather"
                className="text-lg font-semibold text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                ☀️ Space Weather
              </Link>
              <Link
                to="/exoplanets"
                className="text-lg font-semibold text-gray-300 hover:text-green-400 transition duration-300"
              >
                🔭 Exoplanets
              </Link>
              <Link
                to="/satellites"
                className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition duration-300"
              >
                🛰️ Satellites
              </Link>
            </div>

            {/* 📱 Mobile Menu Button */}
            <button
              className="md:hidden text-blue-400 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>

          {/* 📱 Mobile Links */}
          {isOpen && (
            <div className="md:hidden bg-gray-800 border-t border-blue-500/50 p-4 space-y-2">
              <Link
                to="/"
                className="block text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                APOD
              </Link>
              <Link
                to="/neo"
                className="block text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Asteroids
              </Link>
              <Link
                to="/mars"
                className="block text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Mars Rover
              </Link>
              <Link
                to="/space-weather"
                className="block text-lg font-semibold text-gray-300 hover:text-yellow-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                ☀️ Space Weather
              </Link>
              <Link
                to="/exoplanets"
                className="block text-lg font-semibold text-gray-300 hover:text-green-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                🔭 Exoplanets
              </Link>
              <Link
                to="/satellites"
                className="block text-lg font-semibold text-gray-300 hover:text-purple-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                🛰️ Satellites
              </Link>
            </div>
          )}
        </nav>

        {/* 🌠 Page Content */}
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Apod />} />
            <Route path="/neo" element={<Neo />} />
            <Route path="/mars" element={<MarsRover />} />
            <Route path="/space-weather" element={<SpaceWeather />} />
            <Route path="/exoplanets" element={<Exoplanets />} />
            <Route path="/satellites" element={<Satellites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
