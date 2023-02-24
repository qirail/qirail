import React, { useState } from 'react';
import NavigationModal from './NavigationModal';

const RoundNavigationButton = ({ items }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-500 text-white p-4"
        onClick={handleClick}
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
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>
      {showModal && (
        <NavigationModal items={items} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default RoundNavigationButton;
