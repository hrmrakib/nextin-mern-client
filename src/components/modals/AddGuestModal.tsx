import { IoAdd } from "react-icons/io5";
import { HiOutlineMinusSm } from "react-icons/hi";
import { useState } from "react";

const guestItems = [
  { title: "Adult", description: "Ages 18 or above", key: "adult" },
  { title: "Children", description: "Ages 2 - 12", key: "children" },
  { title: "Infants", description: "Under 2", key: "infants" },
  { title: "Pets", description: "Bringing a service animal?", key: "pets" },
];

const AddGuestModal = ({ setGuestData }) => {
  const [guests, setGuests] = useState({
    adult: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateGuests = (key: any, increment = true) => {
    setGuests((prevGuests) => {
      const updatedGuests = {
        ...prevGuests,
        [key]: Math.max(0, prevGuests[key] + (increment ? 1 : -1)),
      };

      setGuestData(updatedGuests);

      return updatedGuests;
    });
  };

  return (
    <div className='absolute top-14 right-0 w-[390px] bg-white px-10 shadow-2xl rounded-3xl z-30'>
      <div className='py-5'>
        {guestItems.map((guest, index) => (
          <div
            key={guest.key}
            className={`flex items-center justify-between py-5 ${
              guestItems.length === index + 1 ? "" : "border-b"
            }`}
          >
            <div>
              <h3 className='text-black font-semibold'>{guest.title}</h3>
              <p className='text-gray-500'>{guest.description}</p>
            </div>

            <div className='flex items-center gap-4'>
              <div
                onClick={() => updateGuests(guest.key, false)}
                className='px-1.5 py-1.5 border-2 rounded-full cursor-pointer'
              >
                <HiOutlineMinusSm />
              </div>
              <span>{guests[guest.key]}</span>
              <div
                onClick={() => updateGuests(guest.key, true)}
                className='px-1.5 py-1.5 border-2 rounded-full cursor-pointer'
              >
                <IoAdd />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddGuestModal;
