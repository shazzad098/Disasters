import React from 'react';

// Sample data matching the structure in the image
// Replace with your actual data source if needed
const incidentData = [
  {
    id: 1,
    image: 'src/assets/images/img1.png',
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

// Placeholder path for the icon inside the tag
const tagIconPath = '/house-icon.png'; // <-- *** UPDATE THIS PATH ***

function IncidentCard({ incident }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      {/* Image Section with Tag Overlay */}
      <div className="relative">
        <img
          src={incident.image}
          alt={`Incident at ${incident.title}`}
          className="w-full h-48 object-cover" // Adjust h-48 if needed
        />
        {/* Tag/Badge */}
        <div className="absolute top-2 right-2 bg-white rounded-full px-2.5 py-1 text-xs font-medium flex items-center space-x-1 shadow">
          <img
             src={tagIconPath} // *** MAKE SURE THIS PATH IS CORRECT ***
             alt="" // Alt text can be empty for decorative icons
             className="h-3 w-3" // Adjust size as needed
          />
          <span className="text-gray-700">{incident.tag}</span>
        </div>
      </div>

      {/* Content Section */}
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


function Dashboard() {
  return (
    <div className="p-6 bg-gray-100"> {/* Optional: Add bg-gray-100 if needed */}
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Map over the data to create cards */}
        {incidentData.map((incident) => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
       {/* You might add pagination or other elements here later */}
    </div>
  );
}

export default Dashboard;