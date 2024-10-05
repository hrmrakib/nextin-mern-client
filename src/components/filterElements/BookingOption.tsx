import { MdInsights } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";

const booking = [
  { title: "Instant Book", icon: MdInsights },
  { title: "Self Check-in", icon: IoKeyOutline },
  { title: "Allow pets", icon: MdOutlinePets },
];

const BookingOption = () => {
  return (
    <div className='mt-8'>
      <h2 className='font-semibold text-lg mb-2'>Booking option</h2>
      <div className='flex items-center flex-wrap gap-2'>
        {booking.map((item) => (
          <div
            key={item.title}
            className='flex items-center gap-2 px-5 py-2.5 border-2 hover:border-black duration-75 rounded-3xl cursor-pointer'
          >
            <item.icon className='text-xl' />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingOption;
