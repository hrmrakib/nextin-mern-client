// "use client";

import { useCallback, useState } from "react";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { IoMenu } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative py-3'>
      <div className='flex flex-row items-center gap-1.5'>
        <div className='hidden md:block text-base font-semibold px-4 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
          Airbnb your home
        </div>

        <div className='hidden md:block text-base font-semibold px-3 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
          <TbWorld className='text-gray-600 text-lg' />
        </div>

        <div
          onClick={toggleMenu}
          className='p-4 md:py-1.5 md:px-2 border border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <IoMenu className='text-gray-700 text-xl' />

          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden top-12 right-0 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <MenuItem onClick={() => null} label='Sign In' />
            <MenuItem onClick={() => null} label='Login' />
            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
