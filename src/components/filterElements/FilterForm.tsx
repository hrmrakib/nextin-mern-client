import { useState } from "react";
import FilterModal from "./FilterModal";
import TypeTabs from "./TypeTab";
import PriceRange from "./PriceRange";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Amenities from "./Amenities";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const FilterForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className='h-full flex items-center justify-center'>
      <button
        className='flex items-center gap-2 px-4 py-3 text-gray-900 border border-gray-300 rounded-2xl'
        onClick={() => setModalOpen(true)}
      >
        <HiOutlineAdjustmentsHorizontal /> <span>Filters</span>
      </button>

      <FilterModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div>
          <h2 className='text-lg text-center font-semibold border-b py-5'>
            Filters
          </h2>

          <div className='h-[66vh] overflow-y-scroll px-6 py-6'>
            <h2 className='font-semibold text-lg mb-3'>Type of place</h2>

            <TypeTabs />
            {/* price range */}
            <div className='mt-6'>
              <h2 className='font-semibold text-lg mb-1'>Price range</h2>
              <p className='mb-5 text-gray-700'>
                Nightly prices before fees and taxes
              </p>

              <PriceRange />

              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-700 mb-2'>Minimum</p>
                  <p className='w-max border px-5 py-3 rounded-3xl'>$24</p>
                </div>
                <div>
                  <p className='text-sm text-gray-700 mb-2'>Maximum</p>
                  <p className='w-max border px-5 py-3 rounded-3xl'>$94</p>
                </div>
              </div>
            </div>

            {/* Rooms and beds */}
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

            {/* Amenities */}
            <Amenities />
          </div>

          <div className='p-5 flex items-center justify-between'>
            <button className='hover:bg-gray-100 text-gray-800 font-semibold px-2.5 py-1.5 duration-50 rounded'>
              Clear all
            </button>
            <button className='bg-black text-white px-3 py-2 rounded'>
              Show 33 result
            </button>
          </div>
        </div>
      </FilterModal>
    </div>
  );
};

export default FilterForm;
