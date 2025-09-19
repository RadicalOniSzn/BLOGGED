import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../assets/Facebook.svg?react";
import TwitterIcon from "../assets/Twitter.svg?react";
import InstagramIcon from "../assets/Instagram.svg?react";
import LinkedinIcon from "../assets/Linkedin.svg?react";
import emailjs from "@emailjs/browser";




const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.email) {
      setStatus("Please enter a valid email.");
      return;
    }

    emailjs
      .send(
        "service_zojowrk",   //  Your EmailJS Service ID
        "template_v7bu9j9",  //  Your Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_address: formData.address,
        },
        "qbYRQc9-bh_0vHo5H"    //  Public Key
      )
      .then(
        () => {
          setStatus("Subscription successful! 🎉");
          setFormData({ name: "", email: "", address: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

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
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Stay updated with our latest articles and news.</p>

          <form onSubmit={sendEmail} className="space-y-3">
            
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 bg-gray-800 rounded-lg text-sm focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 bg-gray-800 rounded-lg text-sm focus:outline-none"
            />

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your Address"
              className="w-full px-3 py-2 bg-gray-800 rounded-lg text-sm focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium"
            >
              Subscribe
            </button>
          </form>

          {status && <p className="mt-2 text-xs text-green-400">{status}</p>}
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BLOGGED-IN. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
