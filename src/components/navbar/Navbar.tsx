import { useEffect, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import OnTopSearch from "./OnTopSearch";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "../category/Categories";

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrollingDown(true); // Show secondary div when scrolled past 50px
      } else {
        setScrollingDown(false); // Show original div when back at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className='fixed w-full z-10 shadow-sm bg-white'>
      <div className='py-2 px-4 border-b-[1px]'>
        <Container>
          <div
            className={`flex flex-row ${
              scrollingDown ? "items-center" : "items-start"
            } justify-between gap-3 md:gap-0`}
          >
            <Logo />

            {scrollingDown ? <Search /> : <OnTopSearch />}
            <UserMenu />
          </div>
        </Container>
      </div>
      <Categories />
    </nav>
  );
};

export default Navbar;
