import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const RoomAndBed = () => {
  return (
    <div className='mt-10'>
      <h2 className='text-lg font-semibold'>Rooms and beds</h2>

      <div className='mt-5 flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h3>Bedrooms</h3>
          <div className='flex items-center gap-4'>
            <button
              disabled={true}
              className='border-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer'
            >
              <FaMinus className='text-gray-500 text-sm' />
            </button>
            <p>Any</p>
            <button
              disabled={true}
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
              disabled={true}
              className='border-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer'
            >
              <FaMinus className='text-gray-500 text-sm' />
            </button>
            <p>Any</p>
            <button
              disabled={true}
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
              disabled={true}
              className='border-2 p-1.5 hover:bg-gray-100 rounded-full cursor-pointer'
            >
              <FaMinus className='text-gray-500 text-sm' />
            </button>
            <p>Any</p>
            <button
              disabled={true}
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
