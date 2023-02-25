import React from 'react';

const NavigationModal = ({ items, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      {/* <div className="bg-white p-8 rounded-lg shadow-lg"> */}
        {/* <ul className="flex flex-col space-y-4"> */}
        <ul className="text-white text-2xl flex-col justify-around md:text-5xl md:grid grid-cols-2 gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                // className="text-gray-800 hover:text-blue-500"
                className="hover-underline hover:text-blue-500 m-2"
                onClick={onClose}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
        className="fixed top-4 right-4 z-50 rounded-full bg-blue-500 text-white p-4"
        onClick={onClose}
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
      </button>

      </div>
  );
};

export default NavigationModal;
