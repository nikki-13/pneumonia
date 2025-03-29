import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import React from "react";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Project Name / Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-400">
            Pneumonia Prediction
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>About</NavLink>
            <NavLink to="/implementation" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>Implementation</NavLink>
            <NavLink to="/predict" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>Predict</NavLink>
            <NavLink to="/team" className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-gray-400"}>Team</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 py-4 text-center">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/implementation" onClick={() => setIsOpen(false)}>Implementation</NavLink>
            <NavLink to="/predict" onClick={() => setIsOpen(false)}>Predict</NavLink>
            <NavLink to="/team" onClick={() => setIsOpen(false)}>Team</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
