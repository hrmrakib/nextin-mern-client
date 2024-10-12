import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className='hidden h-full md:block px-4 py-3 cursor-pointer'>
        <h2 className='hidden text-2xl text-[#f43f5e] font-bold py-2 h-full md:block cursor-pointer'>
          NextIn
        </h2>
        {/* <img
          src={"/logo.png"}
          className='hidden py-2 h-full md:block cursor-pointer'
          width={100}
          height={100}
          alt='logo'
        /> */}
      </div>
    </Link>
  );
};

export default Logo;
