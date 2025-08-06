"use client"
import React, { useState } from 'react'
import { Menu, X, User, LogIn } from 'lucide-react'

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-4 left-0 w-full flex justify-center items-center p-4 bg-transparent z-50">
        <div className="bg-white shadow-lg px-6 py-3 rounded-full flex justify-between items-center w-[90%] max-w-6xl">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              EduLink
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
                Tutors
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300 font-medium">
              <User className="w-5 h-5 mr-2" />
              Login
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-md">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 mt-20 md:hidden">
          <div className="bg-white shadow-xl rounded-b-2xl p-6 animate-slideDown">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-800 font-medium"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-800 font-medium"
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-800 font-medium"
                  onClick={toggleMobileMenu}
                >
                  Tutors
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-800 font-medium"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-4">
              <button className="w-full flex items-center justify-center py-3 px-4 rounded-lg border border-gray-200 text-gray-800 font-medium hover:bg-gray-50">
                <LogIn className="w-5 h-5 mr-2" />
                Login
              </button>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar