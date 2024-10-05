import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Close the modal when clicking outside of the modal content
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Add class to blur background when modal is open
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50'
      onClick={handleOverlayClick}
    >
      <div className='relative bg-white rounded-lg shadow-lg max-w-xl h-[88vh] w-full'>
        <button
          className='absolute top-4 left-4 p-2 text-gray-900 hover:bg-neutral-200 duration-100 rounded-full'
          onClick={onClose}
        >
          <IoClose className='text-lg' />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default FilterModal;
