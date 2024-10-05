import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const RoomAndBed = () => {
  const [value, setValue] = useState({
    rooms: 0,
    bed: 0,
    bath: 0,
  });
  return (
    <div className='mt-10'>
      <h2 className='text-lg font-semibold'>Rooms and beds</h2>

      <div className='mt-5 flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h3>Bedrooms</h3>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setValue({ ...value, rooms: value.rooms - 1 })}
              disabled={value.rooms === 0}
              className='border-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer'
            >
              <FaMinus className='text-gray-500 text-sm' />
            </button>
            <p>{value.rooms === 0 ? "Any" : value.rooms}</p>
            <button
              onClick={() => setValue({ ...value, rooms: value.rooms + 1 })}
              className='border-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer'
            >
              <FaPlus className='text-gray-500 text-sm' />
            </button>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <h3>Beds</h3>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setValue({ ...value, bed: value.bed - 1 })}
              disabled={value.bed === 0}
              className='border-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer'
            >
              <FaMinus className='text-gray-500 text-sm' />
            </button>
            <p>{value.bed === 0 ? "Any" : value.bed}</p>
            <button
              onClick={() => setValue({ ...value, bed: value.bed + 1 })}
              className='border-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer'
            >
              <FaPlus className='text-gray-500 text-sm' />
            </button>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <h3>Bathrooms</h3>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setValue({ ...value, bath: value.bath - 1 })}
              disabled={value.bath === 0}
              className='border-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer'
            >
              <FaMinus className='text-gray-500 text-sm' />
            </button>
            <p>{value.bath === 0 ? "Any" : value.bath}</p>
            <button
              onClick={() => setValue({ ...value, bath: value.bath + 1 })}
              className='border-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer'
            >
              <FaPlus className='text-gray-500 text-sm' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomAndBed;
