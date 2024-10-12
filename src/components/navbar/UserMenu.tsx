import Avatar from "./Avatar";
import { IoMenu } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const UserMenu = () => {
  return (
    <div className='relative py-3'>
      <div className='flex flex-row items-center gap-0.5'>
        <div className='hidden md:block text-sm font-semibold px-4 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
          NextIn home
        </div>

        <div className='hidden md:block text-base font-semibold px-3 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
          <TbWorld className='text-gray-600 text-lg' />
        </div>

        <div className='p-4 md:py-2 md:px-2.5 border border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
          <IoMenu className='text-gray-700 text-xl' />

          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
