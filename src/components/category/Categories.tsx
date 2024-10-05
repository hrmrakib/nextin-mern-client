import Container from "../Container";
import CategoryBox from "./CategoryBox";
import { categories } from "../../constants";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import FilterForm from "../filterElements/FilterForm";
import SwitchBtn from "../switch/SwitchButton";
import { Link, useLocation } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import queryString from "query-string";

const Categories = () => {
  const location = useLocation();
  const [serachQuery, setSearchQuery] = useState();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScrollPosition = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      // Check if the scroll is at the very start
      if (scrollElement.scrollLeft === 0) {
        setShowLeftButton(false); // Hide left button if at the start
      } else {
        setShowLeftButton(true); // Show left button if scrolled
      }

      // Check if the scroll is at the very end (with a tolerance to catch small scroll inaccuracies)
      const isAtEnd =
        scrollElement.scrollLeft + scrollElement.clientWidth >=
        scrollElement.scrollWidth - 1; // Use -1 to allow for small scroll inaccuracy

      if (isAtEnd) {
        setShowRightButton(false); // Hide right button if at the end
      } else {
        setShowRightButton(true); // Show right button if not at the end
      }
    }
  };

  // Scroll left or right by 100px
  const handleScroll = (direction: "left" | "right") => {
    const scrollAmount = 420;
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      if (direction === "right") {
        scrollElement.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        scrollElement.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    checkScrollPosition();
    // Listen for scroll events
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollPosition);
    }

    // Cleanup scroll event listener on component unmount
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  // get category search value from url (?category=Countryside)
  useEffect(() => {
    const parsedString = queryString.parse(location.search);
    setSearchQuery(parsedString.category);
  }, [location.search]);

  return (
    <Container>
      <div className='flex items-center gap-5'>
        <div
          className={`relative ${
            serachQuery && "lg:w-[calc(100%-400px)]"
          } md:w-full z-10`}
        >
          {showLeftButton && (
            <button
              className='absolute -left-1 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-2 z-10 border rounded-full shadow-sm'
              onClick={() => {
                handleScroll("left");
              }}
            >
              <IoIosArrowBack />
            </button>
          )}
          <div
            ref={scrollRef}
            className='mx-2 pt-4 px-3 flex flex-row items-center justify-between gap-3 overflow-x-scroll scrollbar-none'
          >
            <Link
              to={"/"}
              className='flex flex-col items-center justify-between gap-2 p-3 text-neutral-500 hover:text-neutral-800 transition cursor-pointer'
            >
              <BiCategoryAlt size={25} />
              <p className='font-medium text-sm text-center whitespace-nowrap w-full'>
                Icon
              </p>
            </Link>
            {categories?.map((category) => (
              <CategoryBox
                key={category.label}
                label={category.label}
                icon={category.icon}
                selected={false}
              />
            ))}
          </div>
          {showRightButton && (
            <button
              className='absolute -right-1 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-2 py-2 z-10 border rounded-full shadow-sm'
              onClick={() => {
                handleScroll("right");
              }}
            >
              <IoIosArrowForward />
            </button>
          )}
        </div>

        {serachQuery && (
          <div className='w-[375px] flex items-center gap-3'>
            <FilterForm />

            <div className='w-max flex items-center gap-2.5 pl-4 py-3 text-gray-900 border border-gray-300 rounded-xl'>
              <p>Display total before taxes</p>
              <SwitchBtn />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Categories;
