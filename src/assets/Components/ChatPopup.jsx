import React from 'react';

// Placeholder icons - replace with your actual icon components or img tags
const CameraIcon = () => <span className="text-gray-500">📷</span>;
const ImageIcon = () => <span className="text-gray-500">🖼️</span>;
const AttachmentIcon = () => <span className="text-gray-500">📎</span>;
const CloseIcon = () => (
  <img src="/c.png" alt="Close" className="w-6 h-6" />
);


function ChatPopup({ onClose }) { // Receive onClose prop
  return (
    // Main Popup Container
    <div className="fixed bottom-20 right-4 sm:right-6 md:right-8 w-80 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden z-40">

      {/* Header */}
      <div className="bg-orange-500 p-3">
        <h3 className="text-white font-semibold text-base">Chat with Cypher</h3>
      </div>

      {/* Chat Messages Area */}
      <div className="p-4 h-72 overflow-y-auto flex flex-col space-y-3">
        {/* Example Messages */}
        <div className="flex justify-end">
          <div className="bg-gray-800 text-white text-sm p-2.5 rounded-lg max-w-[80%]">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-200 text-gray-800 text-sm p-2.5 rounded-lg max-w-[80%]">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-200 text-gray-800 text-sm p-2.5 rounded-lg max-w-[80%]">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-gray-800 text-white text-sm p-2.5 rounded-lg max-w-[80%]">
            Lorem ipsum dolar sit general sac mascho werho
          </div>
        </div>
        {/* Add more messages or map through actual chat data */}
      </div>

      {/* Input Area */}
      <div className="bg-gray-100 p-3 border-t border-gray-200">
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="text"
            placeholder="Enter your question..."
            className="flex-grow border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <div className="flex justify-between items-center">
           <div className="flex space-x-3 items-center">
            <img src="/camera.png" alt="Camera" className="w-6 h-6 hover:opacity-75" />
            <img src="/gallery.png" alt="Gallery" className="w-6 h-6 hover:opacity-75" />
            <img src="/file.png" alt="Attachment" className="w-6 h-6 hover:opacity-75" />
          </div>
          <button className="bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500">
            Send
          </button>
        </div>
      </div>

        {/* Close Button for the popup (positioned below) */}
         <button
            onClick={onClose} // Call the passed function when clicked
            className="absolute -bottom-5 right-1/2 translate-x-1/2 translate-y-full mt-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none z-50"
            aria-label="Close chat"
         >
            <CloseIcon />
        </button>
    </div>
  );
}

export default ChatPopup;