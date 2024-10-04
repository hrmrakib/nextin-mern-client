import { FaWifi } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { BiSolidWasher } from "react-icons/bi";
import { PiHairDryer } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { FaPlateWheat } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaTv } from "react-icons/fa";
import { TbIroning1 } from "react-icons/tb";

const amenities = [
  { title: "Wifi", icon: FaWifi },
  { title: "Kitchen", icon: FaKitchenSet },
  { title: "Washer", icon: BiSolidWasher },
  { title: "Air Condition", icon: TbAirConditioning },
  { title: "Heating", icon: FaPlateWheat },
  { title: "Dedicated workspace", icon: BsPersonWorkspace },
  { title: "TV", icon: FaTv },
  { title: "Hair dryer", icon: PiHairDryer },
  { title: "Iron", icon: TbIroning1 },
];

const Amenities = () => {
  return (
    <div className='mt-8'>
      <h2 className='font-semibold text-lg mb-2'>Amenities</h2>
      <p className='mb-3 text-black'>Features</p>
      <div className='flex items-center flex-wrap gap-2'>
        {amenities.map((item) => (
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

export default Amenities;
