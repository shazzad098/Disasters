import React, { useState, useEffect, useRef } from 'react'; // Keep existing imports

// Import ChatPopup if it's still needed in this file, otherwise remove
// import ChatPopup from './ChatPopup';

// Define content for each page's header/secondary bar
const pageHeaders = {
  Dashboard: {
    breadcrumb: 'Welcome back',
    title: 'Dashboard',
    showSearch: true,
    showSort: true,
    buttonText: 'Cypher AI',
    buttonIcon: null, // No icon for Cypher AI button
    buttonAction: () => console.log('Cypher AI clicked'), // Placeholder action
  },
  Incidents: {
    breadcrumb: 'Home - Incidents',
    title: 'Incidents',
    showSearch: true,
    showSort: true,
    buttonText: 'New Incident',
    buttonIcon: '+', // Plus icon for New Incident
    buttonAction: () => console.log('New Incident clicked'), // Placeholder action
  },
  Locations: {
    breadcrumb: 'Home - Locations',
    title: 'Locations',
    showSearch: true, // Assuming search/sort are common
    showSort: true,
    buttonText: 'Add Location', // Example
    buttonIcon: '+',
    buttonAction: () => console.log('Add Location clicked'),
  },
  Activities: {
    breadcrumb: 'Home - Activities',
    title: 'Activities',
    showSearch: false, // Example: maybe no search/sort here
    showSort: false,
    buttonText: 'Log Activity', // Example
    buttonIcon: '+',
    buttonAction: () => console.log('Log Activity clicked'),
  },
  Documents: {
    breadcrumb: 'Home - Documents',
    title: 'Documents',
    showSearch: true,
    showSort: true,
    buttonText: 'Upload Doc', // Example
    buttonIcon: '+',
    buttonAction: () => console.log('Upload Doc clicked'),
  },
  'Cypher AI': { // Use quotes if key has spaces or special chars
    breadcrumb: 'Home - Cypher AI',
    title: 'Cypher AI',
    showSearch: false,
    showSort: false,
    buttonText: 'Ask Cypher', // Example
    buttonIcon: null, // Example: maybe a different icon or none
    buttonAction: () => console.log('Ask Cypher clicked'),
  },
  // Add default or fallback if needed
};


function Navbar() {
  // State for active navigation link
  const [activeLink, setActiveLink] = useState('Dashboard'); // Default to Dashboard

  // Paths (keep these as they are)
  const logoPath = '/logo.png';
  const notificationIconPath = '/notification.png';
  const userIconPath = '/user.png';
  const searchIconPath = '/search.png'; // Path for the search icon

  // State for Sort By dropdown (keep this as it is)
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Date modified');
  const sortOptions = [
    'Date modified',
    'Price: Low to High',
    'Price: High to Low',
    'A-Z',
    'Z-A',
  ];
  const dropdownRef = useRef(null);

  // Click outside handler for dropdown (keep this as it is)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortDropdownOpen(false);
      }
    }
    if (isSortDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSortDropdownOpen]);

  // Handler for sort selection (keep this as it is)
  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setIsSortDropdownOpen(false);
    console.log('Sorting by:', option);
  };

  // Navigation Links Array (keep as is)
   const navLinks = [
    { name: 'Dashboard', href: '#' },
    { name: 'Incidents', href: '#' },
    { name: 'Locations', href: '#' },
    { name: 'Activities', href: '#' },
    { name: 'Documents', href: '#' },
    { name: 'Cypher AI', href: '#' }, // Make sure key matches pageHeaders
  ];

  // --- Get the header content for the currently active link ---
  const currentHeader = pageHeaders[activeLink] || pageHeaders['Dashboard']; // Fallback to Dashboard


  return (
    <div className="bg-gray-100 w-full">
      {/* Top Navigation Bar */}
      <nav className="border-b border-gray-300">
        <div className="max-w-full mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoPath} alt="Disasters I/O Logo" className="h-8 mr-10" />
          </div>

          {/* Navigation Links - Centered */}
          <div className="flex-grow flex items-center justify-center">
            <ul className="flex space-x-8 items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                       e.preventDefault();
                       setActiveLink(link.name);
                       // Add routing logic here if using a router
                    }}
                    className={`text-sm hover:text-black transition-colors duration-150 pb-4 ${ // Ensure pb-4 is always applied for alignment
                      activeLink === link.name
                        ? 'font-bold text-black border-b-2 border-black -mb-[1px]' // Active style
                        : 'text-gray-500 border-b-2 border-transparent -mb-[1px]' // Inactive style (transparent border maintains height)
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
               ))}
            </ul>
          </div>

          {/* User Info & Actions */}
          <div className="flex items-center space-x-4">
            <img src={notificationIconPath} alt="Notifications" className="h-6 w-6" />
            <img className="h-9 w-9 rounded-full object-cover" src={userIconPath} alt="User profile" />
            <div className="text-sm">
              <div className="font-semibold text-gray-800">Usman Zafar</div>
              <div className="text-gray-500">usmanzafar@gmail.com</div>
            </div>
          </div>
        </div>
      </nav>

      {/* ===================================================== */}
      {/* === Secondary Bar (Dynamically updated content) === */}
      {/* ===================================================== */}
      <div className="max-w-full mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side: Breadcrumb & Title */}
        <div>
          {/* Use dynamic breadcrumb text */}
          <p className="text-sm text-gray-500 mb-1">{currentHeader.breadcrumb}</p>
          {/* Use dynamic title text */}
          <h1 className="text-3xl font-bold text-gray-900">{currentHeader.title}</h1>
        </div>

        {/* Right Side: Search, Sort, Button */}
        <div className="flex items-center space-x-3">
          {/* Conditionally render Search Input */}
          {currentHeader.showSearch && (
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={searchIconPath} alt="Search" className="h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="Search incident" // Placeholder might need to be dynamic too
                className="block w-full py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          )}

          {/* Conditionally render Sort By Dropdown */}
           {currentHeader.showSort && (
             <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 w-full justify-between"
                  aria-haspopup="listbox"
                  aria-expanded={isSortDropdownOpen}
                >
                  <span>Sort By: </span>
                  <span className="font-medium text-gray-800 ml-1">{selectedSort}</span>
                  
                </button>
                {/* Dropdown List */}
                {isSortDropdownOpen && (
                  <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" role="listbox">
                    {sortOptions.map((option) => (
                      <li
                        key={option}
                        onClick={() => handleSortSelect(option)}
                        className={`cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900 hover:bg-orange-100 hover:text-orange-900 ${selectedSort === option ? 'bg-orange-50 font-semibold' : 'font-normal'}`}
                        role="option" aria-selected={selectedSort === option}
                      >
                        <span className="block truncate">{option}</span>
                        {selectedSort === option ? (<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-600"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></span>) : null}
                      </li>
                    ))}
                  </ul>
                )}
             </div>
           )}

          {/* Dynamic Action Button */}
          <button
            onClick={currentHeader.buttonAction} // Use dynamic action
            className="px-5 py-2 bg-orange-500 text-white text-sm font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center justify-center" // Added flex align/justify
          >
            {/* Conditionally render icon */}
            {currentHeader.buttonIcon && (
               <span className="mr-1.5 text-base font-semibold">{currentHeader.buttonIcon}</span> // Adjust styling as needed
            )}
            {/* Use dynamic button text */}
            {currentHeader.buttonText}
          </button>
        </div>
      </div>
      {/* ===================================================== */}
      {/* === End of Secondary Bar === */}
      {/* ===================================================== */}

    </div> // Close main container div
  );
}

export default Navbar;