import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-200">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <span className="self-center ml-10 text-2xl font-bold whitespace-nowrap text-">
              CLEVERIDIOT
            </span>
          </a>
          {isMobile ? (
            <div>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="lg:hidden bg-white py-2 mt-2">
                  {/* Dropdown menu content here */}
                  <ul className="text-gray-700">
                    <li>
                      <Link smooth to="#heador">
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 hover:text-whitehover:bg-gray-50 lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                        >
                          HOME
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link smooth to="#about">
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 hover:text-whitehover:bg-gray-50 lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                        >
                          ABOUT ME
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link smooth to="#skills">
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 hover:text-whitehover:bg-gray-50 lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                        >
                          SKILLS
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link smooth to="#projects">
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 hover:text-whitehover:bg-gray-50 lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                        >
                          PROJECTS
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link smooth to="#contact">
                        <a
                          href="#"
                          className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 hover:text-whitehover:bg-gray-50 lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                        >
                          CONTACT
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link smooth to="#heador">
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 border-gray-100 hover:text-white lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                    >
                      HOME
                    </a>
                  </Link>
                </li>
                <li>
                  <Link smooth to="#about">
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 border-gray-100 hover:text-white lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                    >
                      ABOUT
                    </a>
                  </Link>
                </li>
                <li>
                  <Link smooth to="#skills">
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 border-gray-100 hover:text-white lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                    >
                      SKILLS
                    </a>
                  </Link>
                </li>
                <li>
                  <Link smooth to="#projects">
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 border-gray-100 hover:text-white lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                    >
                      PROJECTS
                    </a>
                  </Link>
                </li>

                <li>
                  <Link smooth to="#contact">
                    <p className="block py-2 pl-3 pr-4 text-gray-700 border-b rounded-md hover:bg-gray-900 border-gray-100 hover:text-white lg:hover-bg-transparent lg-border-0 lg-hover-text-purple-700 lg-p-0 dark-text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700">
                      CONTACT
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
