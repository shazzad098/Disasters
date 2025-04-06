import React, { useState } from 'react'; // Import useState
import ChatPopup from './ChatPopup'; // Import the new component

// Sample data (keep as is, but ensure paths are correct for your setup)
const incidentData = [
  // ... (your incident data remains here)
   {
    id: 1,
    image: 'src/assets/images/img1.png', // Assuming images are in public folder now based on prev steps
    tag: 'Blizzard',
    title: 'Whitechapel Rd.',
    location: 'Tulare County, Los Angles, CA 23415',
    value: '$1,456,654.00',
  },
  {
    id: 2,
    image: 'src/assets/images/img2.png',
    tag: 'Blizzard',
    title: 'Whitechapel Rd.',
    location: 'Tulare County, Los Angles, CA 23415',
    value: '$1,456,654.00',
  },
  {
    id: 3,
    image: 'src/assets/images/img3.png',
    tag: 'Blizzard',
    title: 'Tulare County',
    location: 'Tulare County, Los Angles, CA 23415',
    value: '$1,456,654.00',
  },
  {
    id: 4,
    image: 'src/assets/images/img4.png',
    tag: 'Blizzard',
    title: 'Tulare County',
    location: 'Tulare County, Los Angles, CA 23415',
    value: '$1,456,654.00',
  },
  {
    id: 5,
    image: 'src/assets/images/img5.png',
    tag: 'Blizzard',
    title: 'Tulare County',
    location: 'Tulare County, Los Angles, CA 23415',
    value: '$1,456,654.00',
  },
  {
    id: 6,
    image: 'src/assets/images/img6.png',
    tag: 'Blizzard',
    title: 'Tulare County',
    location: 'Tulare County, Los Angles, CA 23415',
    value: '$1,456,654.00',
  },
];

// Path for the icon inside the tag
const tagIconPath = '/billzard.png'; // Use the correct blizzard icon path

// --- IncidentCard Component (Keep as is) ---
function IncidentCard({ incident }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={incident.image}
          alt={`Incident at ${incident.title}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2.5 py-1 text-xs font-medium flex items-center space-x-1 shadow">
          <img
             src={tagIconPath}
             alt=""
             className="h-3.5 w-3.5"
          />
          <span className="text-gray-700">{incident.tag}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-1 truncate">
          {incident.title}
        </h3>
        <p className="text-sm text-gray-500 mb-2 truncate">
          {incident.location}
        </p>
        <p className="text-lg font-bold text-gray-900">
          {incident.value}
        </p>
      </div>
    </div>
  );
}

// --- Dashboard Component (Modified) ---
function Dashboard() {
  // State to control chat popup visibility
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    // Use Fragment to avoid adding an extra unnecessary div to the DOM
    <>
      <div className="p-6 bg-gray-100 min-h-screen"> {/* Added min-h-screen for context */}
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Map over the data to create cards */}
          {incidentData.map((incident) => (
            <IncidentCard key={incident.id} incident={incident} />
          ))}
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)} // Toggle chat visibility
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50
                   w-14 h-14 bg-orange-500 rounded-full text-white
                   flex items-center justify-center text-2xl font-bold
                   shadow-lg hover:bg-orange-600 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label={isChatOpen ? "Close chat" : "Open chat"} // Accessibility label
      >
        C
      </button>

      {/* Conditionally render the Chat Popup */}
      {isChatOpen && <ChatPopup onClose={() => setIsChatOpen(false)} />}
    </>
  );
}

export default Dashboard;