import { IoAdd } from "react-icons/io5";
import { HiOutlineMinusSm } from "react-icons/hi";

const guests = [
  {
    title: "Adult",
    description: "Ages 18 or above",
  },
  {
    title: "Children",
    description: "Ages 2 - 12",
  },
  {
    title: "Infants",
    description: "Under 2",
  },
  {
    title: "Pets",
    description: "Bringing a service animal?",
  },
];

const AddGuestModal = () => {
  return (
    <div className='absolute top-14 right-0 w-[390px] bg-white px-10 shadow-2xl rounded-3xl z-30'>
      <div className='py-5'>
        {guests?.map((guest, index) => (
          <div
            className={`flex items-center justify-between ${
              guests.length === index + 1 ? "" : "border-b"
            } py-5`}
          >
            <div>
              <h3 className='text-black font-semibold'>{guest?.title}</h3>
              <p className='text-gray-500'>{guest?.description}</p>
            </div>

            <div className='flex items-center gap-4'>
              <div className='px-1.5 py-1.5 border-2 rounded-full'>
                <HiOutlineMinusSm />
              </div>
              <span>0</span>
              <div className='px-1.5 py-1.5 border-2 rounded-full'>
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
