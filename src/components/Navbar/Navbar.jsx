import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    {
      id: "home",
      name: "Home",
      link: "/",
    },
    {
      id: "about",
      name: "Sobre",
      link: "/about",
    },
    {
      id: "services",
      name: "Serviços",
      link: "/services",
    },
    {
      id: "plan",
      name: "Planos",
      link: "/plan",
    },
    {
      id: "contact",
      name: "Contato",
      link: "/contact",
    },
  ];
  return (
    <nav className="w-full h-auto bg-[#292929] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
      <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
        {/* Navbar logo & toggle button section */}
        <div>
          <div className="flex items-center justify-between py-1 md:py-1 md:block">
            {/* Logo section */}
            <Link className="text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
              <span className="text-3xl font-bold  text-indigo-600">
                Studio Calá Equilibrium
              </span>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <X className="text-gray-400 cursor-pointer" size={24} />
                ) : (
                  <Menu className="text-gray-400 cursor-pointer" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* NAvbar menu items section */}
        <div
          className={`flex justify-between items-center md:block ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
