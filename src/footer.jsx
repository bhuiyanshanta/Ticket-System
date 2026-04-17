import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4 mt-6 flex justify-between items-start px-6">
        <div>
          <h3 className="font-bold">CS Ticket System</h3>
          <p className="w-80 h-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
            vero. Quidem accusantium non, architecto consectetur commodi nostrum
            eligendi facilis beatae!
          </p>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <ul>
            <li>
              About Us
              <a href="#" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              Our Mission
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
            <li>
              Contact saled
              <a href="#" className="text-gray-300 hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="font-bold">
          Information
          <ul>
            <li>Products & Services</li>
            <li>Support</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Social Links</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div></div>
      </footer>
      <div className="container mx-auto text-center bg-gray-800 text-white py-4 ">
        <p className="text-sm">
          &copy; 2026 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
