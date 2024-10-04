import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { useDispatch } from "react-redux";
import {
  resetFilterValue,
  setFilterValue,
} from "../../features/categories/categoriesSlice";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";

interface categoryBoxProps {
  icon: IconType;
  label: string;
  selected: boolean;
}

const CategoryBox: React.FC<categoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  // send filter label to redux store
  const [filterLabel, setFilterLabel] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetFilterValue());
    setTimeout(() => {
      dispatch(setFilterValue(filterLabel));
    }, 10);
  }, [filterLabel]);

  const handleCategoryQuery = (category: string) => {
    const query = queryString.stringify({ category });
    navigate(`?${query}`);
  };

  return (
    <div
      // onClick={() => setFilterLabel(label)}
      onClick={() => handleCategoryQuery(label)}
      className={`flex flex-col items-center justify-between gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected ? "border-b-neutral-800" : "border-transparent"
      } ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={25} />
      <div className='font-medium text-sm text-center whitespace-nowrap w-full'>
        {label}
      </div>
    </div>
  );
};

export default CategoryBox;
