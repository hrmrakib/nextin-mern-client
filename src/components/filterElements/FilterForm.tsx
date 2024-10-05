/* eslint-disable */

import * as React from "react";
import Slider from "@mui/material/Slider";
import RoomAndBed from "./RoomAndBed";
import { useEffect, useState } from "react";
import FilterModal from "./FilterModal";
import Amenities from "./Amenities";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import { setFiltrerResult } from "../../features/filterResult/filterResultSlice";
import BookingOption from "./BookingOption";

const styles = {
  color: "black",
  width: "33%",
  fontWeight: "500",
  textTransform: "capitalize",
  borderRight: "1px",
  borderColor: "black",
};

function valuetext(value: number) {
  return `${value}`;
}
const FilterForm = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState();
  const [value, setValue] = useState("any");
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["filter"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/type-of-place", {
        params: {
          searchQuery,
          type: value || "any",
        },
      });
      return res.data;
    },
  });

  // use here for hoisting issue
  const [price, setPrice] = React.useState<number[]>([200, 600]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  // get category search value from url (?category=Countryside)
  useEffect(() => {
    const parsedString = queryString.parse(location.search);
    setSearchQuery(parsedString.category);
  }, [location.search]);

  // call again and again "/api/type-of-place" -> when change the place type tab
  useEffect(() => {
    refetch();
  }, [value, price]);

  useEffect(() => {
    setTimeout(() => {
      if (!isPending && data) {
        setPrice([
          data?.findMinMaxPrice[0]?.minRate,
          data?.findMinMaxPrice[0]?.maxRate,
        ]);
      }
    }, 50);
  }, [value, data]);

  const handleShowPlace = () => {
    dispatch(setFiltrerResult(data?.typeOfPlace));
    setModalOpen(false);
  };

  // console.log(data && data.typeOfPlace);

  if (isPending) return <span>...</span>;

  if (error) return "An error has occurred: " + error.message;

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

            <Box
              sx={{ width: "100%", typography: "body1", borderBottom: "1px" }}
            >
              <TabContext value={value}>
                <Box
                  sx={{
                    border: 1,
                    borderRadius: "12px",
                    borderColor: "divider",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label='lab API tabs example'
                    sx={{ width: "100%" }}
                  >
                    <Tab sx={styles} label='Any Type' value='any' />
                    <Tab sx={styles} label='Room' value='Room' />
                    <Tab sx={styles} label='Entire Home' value='Home' />
                  </TabList>
                </Box>
              </TabContext>
            </Box>

            {/* price range */}
            <div className='mt-6'>
              <h2 className='font-semibold text-lg mb-1'>Price range</h2>
              <p className='mb-5 text-gray-700'>
                Nightly prices before fees and taxes
              </p>

              <Box sx={{ width: "100%" }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={price}
                  onChange={handlePriceChange}
                  valueLabelDisplay='auto'
                  getAriaValueText={valuetext}
                  min={5}
                  max={800}
                />
              </Box>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-700 mb-2'>Minimum</p>
                  <p className='w-max border px-5 py-3 rounded-3xl'>
                    $
                    {(data?.findMinMaxPrice[0] &&
                      data?.findMinMaxPrice[0]?.minRate) ||
                      "00"}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-700 mb-2'>Maximum</p>
                  <p className='w-max border px-5 py-3 rounded-3xl'>
                    $
                    {(data?.findMinMaxPrice[0] &&
                      data?.findMinMaxPrice[0]?.maxRate) ||
                      "00"}
                  </p>
                </div>
              </div>

              {data && data?.typeOfPlace.length <= 1 ? (
                <p className='text-sm text-gray-700 text-center'>
                  I found {data?.typeOfPlace.length} result so it hasn't min/max
                  price
                </p>
              ) : null}
            </div>

            {/* Rooms and beds */}
            <RoomAndBed />

            {/* Amenities */}
            <Amenities />

            {/* Booking option */}
            <BookingOption />
          </div>

          <div className='p-5 flex items-center justify-between'>
            <button className='hover:bg-gray-100 text-gray-800 font-semibold px-2.5 py-1.5 duration-50 rounded'>
              Clear all
            </button>
            <button
              onClick={() => handleShowPlace()} // send data
              disabled={data && data.typeOfPlace.length === 0}
              className='bg-black text-white px-3 py-2 rounded'
            >
              Show {(data && data.typeOfPlace.length) || "0"} places
            </button>
          </div>
        </div>
      </FilterModal>
    </div>
  );
};

export default FilterForm;
