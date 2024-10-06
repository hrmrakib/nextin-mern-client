import { IoSearchSharp } from "react-icons/io5";
import RegionSelector from "../modals/RegionSelector";
import AddGuestModal from "../modals/AddGuestModal";
import DateRangeSelector from "../modals/DateRangePicker";
import { useEffect, useRef, useState } from "react";

const OnTopSearch = () => {
  // Consolidated modal states into one object for better state management
  const [modals, setModals] = useState({
    region: false,
    guest: false,
    dateRangeIn: false,
    dateRangeOut: false,
  });

  const [region, setRegion] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [checkDate, setCheckDate] = useState(null);
  const regionRef = useRef(null);

  const [guests, setGuests] = useState({
    adult: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  // Format date function
  const formatDate = (date) =>
    date?.toDateString().split(" ").slice(1, 3).join(" ");

  // Handle check-in and check-out dates
  useEffect(() => {
    if (checkDate) {
      setCheckIn(formatDate(checkDate.startDate));
      setCheckOut(formatDate(checkDate.endDate));
    }
  }, [checkDate]);

  // Toggle modal visibility
  const toggleModal = (type) => {
    setModals((prev) => ({
      region: type === "region" ? !prev.region : false,
      guest: type === "guest" ? !prev.guest : false,
      dateRangeIn: type === "dateRangeIn" ? !prev.dateRangeIn : false,
      dateRangeOut: type === "dateRangeOut" ? !prev.dateRangeOut : false,
    }));
  };

  return (
    <div className='flex flex-col duration-700 ease-in-out transform transition-opacity z-30'>
      {/* Search type toggler */}
      <div className='flex items-center justify-center gap-5'>
        <div className='font-semibold cursor-pointer'>Stays</div>
        <div className='px-3 py-2 rounded-3xl hover:bg-neutral-100 cursor-pointer'>
          Experience
        </div>
      </div>

      {/* Search fields */}
      <div className='mt-10 border w-full md:w-auto rounded-full shadow-lg transition'>
        <div className='flex items-center justify-between'>
          {/* Region input */}
          <div
            onClick={() => toggleModal("region")}
            ref={regionRef}
            className='relative text-sm font-semibold py-2 pl-8 pr-24 border-r hover:bg-neutral-100 hover:rounded-3xl focus:bg-white transition cursor-pointer'
          >
            <h3>Where</h3>
            <input
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className='text-sm text-gray-500 bg-transparent border-none outline-none'
              placeholder='Search destination'
            />
            {modals.region && <RegionSelector sendRegionData={setRegion} />}
          </div>

          {/* Check-in input */}
          <div className='relative text-sm font-semibold py-2 pl-6 pr-16 border-r hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'>
            <div
              onClick={() => toggleModal("dateRangeIn")}
              className='flex flex-col'
            >
              <h3 className='w-[100px]'>Check in</h3>
              <p className='text-sm text-gray-500'>{checkIn || "Add dates"}</p>
            </div>
            {modals.dateRangeIn && (
              <DateRangeSelector sendCheckDate={setCheckDate} />
            )}
          </div>

          {/* Check-out input */}
          <div className='relative text-sm font-semibold py-2 pl-6 pr-16 border-r hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'>
            <div
              onClick={() => toggleModal("dateRangeOut")}
              className='flex flex-col'
            >
              <h3 className='w-[100px]'>Check out</h3>
              <p className='text-sm text-gray-500'>{checkOut || "Add dates"}</p>
            </div>
            {modals.dateRangeOut && (
              <DateRangeSelector sendCheckDate={setCheckDate} />
            )}
          </div>

          {/* Guests input */}
          <div className='relative flex items-center pr-3 hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'>
            <div
              onClick={() => toggleModal("guest")}
              className='flex flex-col pr-20'
            >
              <h3 className='text-sm font-semibold py-2 pl-6'>Who</h3>
              <p className={`w-32 pb-1.5 pl-6 text-sm text-black`}>
                {guests.adult
                  ? `${guests.adult || 0} ad, ${guests.children || 0} ch  ....`
                  : "Add guests"}
                {/* {`${guests.adult || 0} ad, ${guests.children || 0} ch ....`} */}
              </p>
            </div>
            <div className='p-3 bg-rose-500 text-white rounded-full'>
              <IoSearchSharp />
            </div>
            {modals.guest && <AddGuestModal setGuestData={setGuests} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnTopSearch;

// ==================================================

// import { IoSearchSharp } from "react-icons/io5";
// import RegionSelector from "../modals/RegionSelector";
// import { useEffect, useRef, useState } from "react";
// import AddGuestModal from "../modals/AddGuestModal";
// import DateRangeSelector from "../modals/DateRangePicker";

// const OnTopSearch = () => {
//   const [openRegion, setOpenRegion] = useState(false);
//   const [openGuest, setOpenGuest] = useState(false);
//   const [openDateRangeIn, setOpenDateRangeIn] = useState(false);
//   const [openDateRangeOut, setOpenDateRangeOut] = useState(false);
//   const regionRef = useRef(null);

//   const [region, setRegion] = useState("");
//   const [isRegion, setIsRegion] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [checkDate, setCheckDate] = useState("");

//   const formatDate = (date) => {
//     return date.toDateString().split(" ").slice(1, 3).join(" ");
//   };

//   useEffect(() => {
//     setIsRegion(region);
//   }, [region]);

//   console.log(checkIn, checkOut);

//   useEffect(() => {
//     if (checkDate) {
//       setCheckIn(formatDate(checkDate.startDate));
//       setCheckOut(formatDate(checkDate.endDate));
//     }
//   }, [checkDate]);

//   const [guests, setGuests] = useState({
//     guests: {
//       adult: 0,
//       children: 0,
//       infants: 0,
//       pets: 0,
//     },
//   });

//   const toggleRegionModal = () => {
//     setOpenRegion(!openRegion);
//     setOpenDateRangeIn(false);
//     setOpenGuest(false);
//     setOpenDateRangeOut(false);
//   };
//   const toggleDateRangeIn = () => {
//     setOpenRegion(false);
//     setOpenDateRangeIn(!openDateRangeIn);
//     setOpenDateRangeOut(false);
//     setOpenGuest(false);
//     setIsRegion("");
//   };
//   const toggleDateRangeOut = () => {
//     setOpenRegion(false);
//     setOpenDateRangeIn(false);
//     setOpenDateRangeOut(!openDateRangeOut);
//     setOpenGuest(false);
//     setIsRegion("");
//   };
//   const toggleGuestModal = () => {
//     setOpenRegion(false);
//     setOpenDateRangeIn(false);
//     setOpenDateRangeOut(false);
//     setOpenGuest(!openGuest);
//   };

//   // Close modal when clicking outside the modal
//   // useEffect(() => {
//   //   const handleClickOutside = (event: MouseEvent) => {
//   //     if (
//   //       regionRef.current &&
//   //       !regionRef.current.contains(event.target as Node)
//   //     ) {
//   //       setOpenRegion(false);
//   //       setOpenGuest(false);
//   //       setOpenDateRangeIn(false);
//   //       setOpenDateRangeOut(false);
//   //     }
//   //   };

//   //   // Add event listener
//   //   if (openRegion) {
//   //     // if (openRegion || openGuest || openDateRangeIn || openDateRangeOut) {
//   //     document.addEventListener("mousedown", handleClickOutside);
//   //   } else {
//   //     document.removeEventListener("mousedown", handleClickOutside);
//   //   }

//   //   // Cleanup event listener on unmount
//   //   return () => {
//   //     document.removeEventListener("mousedown", handleClickOutside);
//   //   };
//   // }, [openRegion, openGuest, openDateRangeIn, openDateRangeOut]);

//   console.log(region, checkIn, checkOut, guests);

//   return (
//     <div className='flex flex-col duration-700 ease-in-out transform transition-opacity z-30'>
//       <div className='flex items-center justify-center gap-5'>
//         <div className='font-semibold cursor-pointer'>Stays</div>
//         <div className='px-3 py-2 rounded-3xl hover:bg-neutral-100 cursor-pointer'>
//           Experience
//         </div>
//       </div>

//       <div className='mt-10 border w-full md:w-auto rounded-full shadow-lg transition'>
//         <div className='flex items-center justify-between'>
//           <div
//             onClick={toggleRegionModal}
//             ref={regionRef}
//             className='relative text-sm font-semibold py-2 pl-8 pr-24 border-r hover:border-transparent hover:bg-neutral-100 hover:rounded-3xl focus:bg-white transform transition-transform duration-300 cursor-pointer'
//           >
//             <h3>Where</h3>
//             <input
//               value={region}
//               onChange={() => setRegion(region)}
//               className='text-sm text-gray-500 bg-transparent border-none outline-none focus:outline-none'
//               placeholder='Search distination'
//             />

//             {openRegion && <RegionSelector sendRegionData={setRegion} />}
//           </div>

//           <div className='relative text-sm font-semibold py-2 pl-6 pr-16 border-r hover:border-transparent hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'>
//             <div onClick={toggleDateRangeIn} className='flex flex-col'>
//               <h3 className='w-[100px]'>Check in</h3>

//               <p className='text-sm text-gray-500'>{checkIn || "Add dates"}</p>
//             </div>
//             {isRegion && <DateRangeSelector sendCheckDate={setCheckDate} />}
//             {openDateRangeIn && (
//               <DateRangeSelector sendCheckDate={setCheckDate} />
//             )}
//           </div>

//           <div className='relative text-sm font-semibold py-2 pl-6 pr-16 border-r hover:border-transparent hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'>
//             <div onClick={toggleDateRangeOut} className='flex flex-col'>
//               <h3 className='w-[100px]'>Check out</h3>

//               <p className='text-sm text-gray-500'>{checkOut || "Add dates"}</p>
//             </div>
//             {openDateRangeOut && (
//               <DateRangeSelector sendCheckDate={setCheckDate} />
//             )}
//           </div>

//           <div className='relative flex items-center pr-3 hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'>
//             <div onClick={toggleGuestModal}>
//               <div
//                 className={`text-sm font-semibold py-2 pl-6 ${
//                   guests ? "pr-10" : "pr-20"
//                 } `}
//               >
//                 <h3>Who</h3>
//                 <p className='text-sm text-gray-500'>
//                   {/*
//                 ${guests?.adult && guests?.adult + " ad"}
//                   ${guests?.children && guests?.children + " ch"}
//                   ${guests?.infants && guests?.infants + " inf"}
//                   ${guests?.pets && guests?.pets + " pet"}  */}

//                   {`

//                   Add Guests
//                   `}
//                 </p>
//               </div>
//             </div>

//             <div className='p-3 bg-rose-500 text-white rounded-full'>
//               <IoSearchSharp />
//             </div>
//             {openGuest && <AddGuestModal setGuestData={setGuests} />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnTopSearch;
