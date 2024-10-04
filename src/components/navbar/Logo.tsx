import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className='hidden h-full md:block px-4 py-3 cursor-pointer'>
        <img
          src={"/logo.png"}
          className='hidden py-2 h-full md:block cursor-pointer'
          width={100}
          height={100}
          alt='logo'
        />
      </div>
    </Link>
  );
};

export default Logo;
