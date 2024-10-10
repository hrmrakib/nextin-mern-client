import { IoSearchSharp } from "react-icons/io5";
import RegionSelector from "../modals/RegionSelector";
import AddGuestModal from "../modals/AddGuestModal";
import DateRangeSelector from "../modals/DateRangePicker";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../../features/searchResult/searchResultSlice";
import { clearFilterResults } from "../../features/filterResult/filterResultSlice";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

const OnTopSearch = () => {
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/search", {
        params: {
          region,
          ...(checkIn && { checkIn }),
          ...(checkOut && { checkOut }),
          ...(guests && { guests }),
        },
      });
      return res.data;
    },
    enabled: false,
  });

  const handleSearch = () => {
    refetch();
    handleCategoryQuery(region);

    modals.guest = false;
    modals.dateRangeIn = false;
    modals.dateRangeOut = false;
  };

  useEffect(() => {
    setTimeout(() => {
      if (!isPending && !error && data) {
        dispatch(clearFilterResults());
        dispatch(setSearchResults(data));
      }
    }, 10);
  }, [data]);

  const handleCategoryQuery = (region: string) => {
    const query = queryString.stringify({ region });
    navigate(`?${query}`);
  };

  // TODO: search data
  console.log("onTOPSearch", data);

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
      <div className='mt-10 lg:border w-full md:w-auto rounded-full lg:shadow-lg transition'>
        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-0'>
          {/* Region input */}
          <div
            onClick={() => toggleModal("region")}
            ref={regionRef}
            className='relative text-sm font-semibold py-2 pl-3 lg:pl-8 lg:pr-24 lg:border-r border lg:border-0 rounded-3xl lg:rounded-none hover:bg-neutral-100 hover:rounded-3xl focus:bg-white transition cursor-pointer'
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
          <div className='relative text-sm font-semibold py-2 pl-3 lg:pl-6 lg:pr-16 lg:border-r border lg:border-0 rounded-3xl lg:rounded-none hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'>
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
          <div className='relative text-sm font-semibold py-2 pl-3 lg:pl-6 lg:pr-16 lg:border-r border lg:border-0 rounded-3xl lg:rounded-none hover:bg-neutral-100 hover:rounded-3xl cursor-pointer'>
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
              <p className={`w-40 pb-1.5 pl-6 text-sm text-black`}>
                {guests.adult
                  ? `${guests.adult || 0} adult, ${
                      guests.children || 0
                    } children  ...`
                  : "Add guests"}
                {/* {`${guests.adult || 0} ad, ${guests.children || 0} ch ....`} */}
              </p>
            </div>
            <button
              onClick={handleSearch}
              disabled={region ? false : true}
              className={`p-3 bg-rose-500 text-white rounded-full disabled:cursor-not-allowed`}
            >
              <IoSearchSharp />
            </button>
            {modals.guest && <AddGuestModal setGuestData={setGuests} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnTopSearch;
