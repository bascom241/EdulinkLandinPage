import React from 'react'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  Clock
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              EduPlatform
            </h3>
            <p className="text-gray-600">
              Transforming education through innovative technology and expert-led learning experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Courses</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Tutors</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Webinars</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Tutorials</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-0.5 mr-3 text-blue-600" />
                <span>123 Education St, Learning City, LC 10001</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <a href="mailto:info@eduplatform.com" className="hover:text-blue-600 transition">info@eduplatform.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <a href="tel:+11234567890" className="hover:text-blue-600 transition">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-600" />
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-semibold mb-3">Stay Updated</h4>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest courses, tips, and educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EduPlatform. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer