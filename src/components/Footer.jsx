import React from 'react'
import { Link } from "react-router-dom";
import FacebookIcon from "../assets/Facebook.svg?react";
import TwitterIcon from "../assets/Twitter.svg?react";
import InstagramIcon from "../assets/Instagram.svg?react";
import LinkedinIcon from "../assets/Linkedin.svg?react";



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        
        <div>
          <h2 className="text-2xl font-bold text-white">{`>>BLOGGED   `}<span>-IN</span></h2>
          <p className="mt-4 text-gray-400">
            Your go-to platform for the latest in politics, technology, and
            business. Stay informed with credible insights.
          </p>

          
          <div className="flex gap-4 mt-6">
            <Link to="#" className="hover:text-blue-500">
              <FacebookIcon className="w-6 h-6 fill-current" />
            </Link>
            <Link to="#" className="hover:text-sky-400">
              <TwitterIcon className="w-6 h-6 fill-current" />
            </Link>
            <Link to="#" className="hover:text-pink-500">
              <InstagramIcon className="w-6 h-6 fill-current" />
            </Link>
            <Link to="#" className="hover:text-blue-700">
              <LinkedinIcon className="w-6 h-6 fill-current" />
            </Link>
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/politics" className="hover:text-white">Politics</Link></li>
            <li><Link to="/technology" className="hover:text-white">Technology</Link></li>
            <li><Link to="/business" className="hover:text-white">Business</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Get the latest updates right in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-900 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BLOGGED-IN. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
