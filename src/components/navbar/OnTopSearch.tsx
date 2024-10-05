import { IoSearchSharp } from "react-icons/io5";
import RegionSelector from "../modals/RegionSelector";
import { useState } from "react";
import AddGuestModal from "../modals/AddGuestModal";
import DateRangeSelector from "../modals/DateRangePicker";

const OnTopSearch = () => {
  const [openRegion, setOpenRegion] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const [openDateRangeIn, setOpenDateRangeIn] = useState(false);
  const [openDateRangeOut, setOpenDateRangeOut] = useState(false);
  // const regionRef = useRef(null);

  const toggleRegionModal = () => {
    setOpenRegion(!openRegion);
  };
  const toggleDateRangeIn = () => {
    setOpenDateRangeIn(!openDateRangeIn);
  };
  const toggleDateRangeOut = () => {
    setOpenDateRangeOut(!openDateRangeOut);
  };
  const toggleGuestModal = () => {
    setOpenGuest(!openGuest);
  };

  // Close modal when clicking outside the modal
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       regionRef.current &&
  //       !regionRef.current.contains(event.target as Node)
  //     ) {
  //       setOpenRegion(false);
  //       setOpenGuest(false);
  //       setOpenDateRangeIn(false);
  //       setOpenDateRangeOut(false);
  //     }
  //   };

  //   // Add event listener
  //   if (openRegion) {
  //     // if (openRegion || openGuest || openDateRangeIn || openDateRangeOut) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   // Cleanup event listener on unmount
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [openRegion, openGuest, openDateRangeIn, openDateRangeOut]);

  return (
    <div className='flex flex-col duration-700 ease-in-out transform transition-opacity z-30'>
      <div className='flex items-center justify-center gap-5'>
        <div className='font-semibold cursor-pointer'>Stays</div>
        <div className='px-3 py-2 rounded-3xl hover:bg-neutral-100 cursor-pointer'>
          Experience
        </div>
      </div>

      <div className='mt-10 border w-full md:w-auto rounded-full shadow-lg transition'>
        <div className='flex items-center justify-between'>
          <div
            onClick={toggleRegionModal}
            // ref={regionRef}
            className='relative text-sm font-semibold py-2 pl-8 pr-24 border-r hover:border-transparent hover:bg-neutral-100 hover:rounded-3xl focus:bg-white transform transition-transform duration-300 cursor-pointer'
          >
            <h3>Where</h3>
            <input
              className='text-sm text-gray-500 bg-transparent border-none outline-none focus:outline-none'
              placeholder='Search distination'
            />

            {openRegion && <RegionSelector />}
          </div>

          <div
            onClick={toggleDateRangeIn}
            className='relative text-sm font-semibold py-2 pl-6 pr-16 border-r hover:border-transparent hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'
          >
            <h3>Check in</h3>
            <p className='text-sm text-gray-500'>Add dates</p>

            {openDateRangeIn && <DateRangeSelector />}
          </div>

          <div
            onClick={toggleDateRangeOut}
            className='relative text-sm font-semibold py-2 pl-6 pr-16 border-r hover:border-transparent hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'
          >
            <h3>Check out</h3>
            <p className='text-sm text-gray-500'>Add dates</p>

            {openDateRangeOut && <DateRangeSelector />}
          </div>

          <div
            onClick={toggleGuestModal}
            className='relative flex items-center pr-3 hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'
          >
            <div className='text-sm font-semibold py-2 pl-6 pr-20'>
              <h3>Who</h3>
              <p className='text-sm text-gray-500'>Add guests</p>
            </div>
            <div className='p-3 bg-rose-500 text-white rounded-full'>
              <IoSearchSharp />
            </div>

            {openGuest && <AddGuestModal />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnTopSearch;
