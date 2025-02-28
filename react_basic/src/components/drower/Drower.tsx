import { useState } from "react";
import { Menu, X, Home, User, Settings, Info } from "lucide-react";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Menu */}
      <button 
        className="p-2 rounded-md bg-gray-800 text-white fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-lg z-40`}
      >
        {/* Close Button */}
        <button 
          className="p-2 absolute right-4 top-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Navigation Links */}
        <nav className="mt-12">
          <ul className="space-y-4">
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 cursor-pointer">
              <Home size={20} className="mr-2" /> Home
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 cursor-pointer">
              <User size={20} className="mr-2" /> Profile
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 cursor-pointer">
              <Settings size={20} className="mr-2" /> Settings
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-gray-700 cursor-pointer">
              <Info size={20} className="mr-2" /> About
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Drawer;
