import { IconType } from "react-icons";
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
  const navigate = useNavigate();

  const handleCategoryQuery = (category: string) => {
    const query = queryString.stringify({ category });
    navigate(`?${query}`);
  };

  return (
    <div
      onClick={() => handleCategoryQuery(label)}
      className={`flex flex-col items-center justify-between gap-1 md:gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
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
