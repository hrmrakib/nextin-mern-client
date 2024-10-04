// "use client";

import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className='border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md cursor-pointer duration-900 ease-in-out transform transition-opacity'>
      <div className='flex items-center justify-between'>
        <div className='text-sm font-semibold px-6'>Anywhere</div>
        <div className='hidden sm:block text-sm font-semibold flex-1 px-6 border-x text-center'>
          Any Week
        </div>
        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
          <div className='hidden sm:block'>Add Guests</div>
          <div className='p-2 bg-rose-500 text-white rounded-full'>
            <IoSearchSharp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
