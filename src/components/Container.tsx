import React from "react";

interface containrProps {
  children: React.ReactNode;
}

const Container: React.FC<containrProps> = ({ children }) => {
  return (
    <div className='max-w-[2400px] mx-auto xl:px-16 md:px-10 sm:px-2 px-4'>
      {children}
    </div>
  );
};

export default Container;
