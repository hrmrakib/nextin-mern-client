import { IoSearchSharp } from "react-icons/io5";
import RegionSelector from "../modals/RegionSelector";
import { useEffect, useState } from "react";
import AddGuestModal from "../modals/AddGuestModal";
import DateRangeSelector from "../modals/DateRangePicker";

const OnTopSearch = () => {
  const [openRegion, setOpenRegion] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const [openDateRangeIn, setOpenDateRangeIn] = useState(false);
  const [openDateRangeOut, setOpenDateRangeOut] = useState(false);
  // const regionRef = useRef(null);

  const [region, setRegion] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [checkDate, setCheckDate] = useState("");

  // const formatDate = (date) => {
  //   return date.toDateString().split(" ").slice(1, 3).join(" ");
  // };

  // useEffect(() => {
  //   if (checkDate) {
  //     setCheckIn(formatDate(checkDate.startDate));
  //     setCheckOut(formatDate(checkDate.endDate));
  //   }
  // }, [checkDate]);

  const [searchValue, setSearchValue] = useState({
    guests: {
      adult: 0,
      children: 0,
      infants: 0,
      pets: 0,
    },
  });

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

  // console.log(region);

  // console.log(checkIn, checkOut);

  console.log(checkIn, checkOut);

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
              value={region}
              onChange={() => setRegion(region)}
              className='text-sm text-gray-500 bg-transparent border-none outline-none focus:outline-none'
              placeholder='Search distination'
            />

            {openRegion && <RegionSelector sendRegionData={setRegion} />}
          </div>

          <div
            onClick={toggleDateRangeIn}
            className='relative text-sm font-semibold py-2 pl-6 pr-16 border-r hover:border-transparent hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'
          >
            <h3>Check in</h3>
            {/* <input
              value={checkIn}
              onChange={() => setRegion(checkIn)}
              className='w-max text-sm text-gray-500 bg-transparent border-none outline-none focus:outline-none'
              placeholder='Add dates'
            /> */}
            <p className='text-sm text-gray-500'>Add dates</p>

            {openDateRangeIn && (
              <DateRangeSelector sendCheckDate={setCheckDate} />
            )}
          </div>

          <div
            onClick={toggleDateRangeOut}
            className='relative text-sm font-semibold py-2 pl-6 pr-16 border-r hover:border-transparent hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'
          >
            <h3>Check out</h3>
            {/* <input
              value={region}
              onChange={() => setRegion(region)}
              className='w-max text-sm text-gray-500 bg-transparent border-none outline-none focus:outline-none'
              placeholder='Add dates'
            /> */}
            <p className='text-sm text-gray-500'>Add dates</p>

            {openDateRangeOut && (
              <DateRangeSelector sendCheckDate={setCheckDate} />
            )}
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
