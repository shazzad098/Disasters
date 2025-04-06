import React, { useState, useEffect, useRef } from "react";

function Navbar() {
  // State for active navigation link
  const [activeLink, setActiveLink] = useState("Dashboard");

  // Icons
  const logoPath = "/logo.png";
  const notificationIconPath = "/notification.png";
  const userIconPath = "/user.png";
  const searchIconPath = "/search.png";

  //Dropdown
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Date modified");
  const sortOptions = [
    "Date modified",
    "Price: Low to High",
    "Price: High to Low",
    "A-Z",
    "Z-A",
  ];
  const dropdownRef = useRef(null);

  //Handler for dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortDropdownOpen(false);
      }
    }
    if (isSortDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortDropdownOpen]);

  // Handler for sort selection
  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsSortDropdownOpen(false);
    console.log("Sorting by:", option);
  };

  // Navigation Links Array
  const navLinks = [
    { name: "Dashboard", href: "#" },
    { name: "Incidents", href: "#" },
    { name: "Locations", href: "#" },
    { name: "Activities", href: "#" },
    { name: "Documents", href: "#" },
    { name: "Cypher AI", href: "#" },
  ];

  return (
    <div className="bg-gray-100 w-full">
      <nav className="border-b border-gray-300">
        <div className="max-w-full mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">

            <img
              src={logoPath}
              alt="Disasters I/O Logo"
              className="h-8 mr-10 cursor-pointer"
            />
          </div>

          <div className="flex-grow flex items-center justify-center">

            <ul className="flex space-x-8 items-center">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink(link.name);
                    }}
                    className={`text-sm hover:text-black transition-colors duration-150 ${
                      activeLink === link.name
                        ? "font-bold text-black border-b-2 border-black pb-4 -mb-[1px]"
                        : "text-gray-500"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">

            <img
              src={notificationIconPath}
              alt="Notifications"
              className="h-9 w-9 cursor-pointer"
            />
            <img
              className="h-9 w-9 rounded-full object-cover cursor-pointer"
              src={userIconPath}
              alt="User profile"
            />
            <div className="text-sm">
              <div className="font-semibold text-gray-800">Usman Zafar</div>
              <div className="text-gray-500">usmanzafar@gmail.com</div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-full mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 mb-1">Welcome back</p>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={searchIconPath} alt="Search" className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search incident"
              className="block w-full py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 w-full justify-between"
              aria-haspopup="listbox"
              aria-expanded={isSortDropdownOpen}
            >
              <span>Sort By: </span>
              <span className="font-medium text-gray-800 ml-1">
                {selectedSort}
              </span>
            </button>
            {isSortDropdownOpen && (
              <ul
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm mt-2"
                role="listbox"
              >
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSortSelect(option)}
                    className={`cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900 hover:bg-orange-100 hover:text-orange-900 ${
                      selectedSort === option
                        ? "bg-orange-50 font-semibold"
                        : "font-normal"
                    }`}
                    role="option"
                    aria-selected={selectedSort === option}
                  >
                    <span className="block truncate">{option}</span>
                    {selectedSort === option ? (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-600"></span>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="px-5 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 cursor-pointer">
            Cypher AI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;