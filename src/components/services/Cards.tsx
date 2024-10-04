import Container from "../Container";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import RoatingLine from "../loading/RoatingLine";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Cards = () => {
  const filterLabel = useSelector((state: any) => state.categories.filterValue);
  const version = useSelector((state: any) => state.categories.version);
  const location = useLocation();
  const [serachQuery, setSearchQuery] = useState();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/categories", {
        params: { serachQuery },
      });
      return res.data;
    },
  });

  // call the "/api/categories" -> when change the filter value
  useEffect(() => {
    refetch();
  }, [serachQuery]);

  //
  useEffect(() => {
    const parsedString = queryString.parse(location.search);
    setSearchQuery(parsedString.category);
    console.log(serachQuery);
  }, [location.search]);

  // console.log(filterLabel, version);

  if (isPending) return <RoatingLine />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container>
      <div className='grid grid-cols-4 gap-6'>
        {data?.map((category: any) => (
          <Card key={category?._id} category={category} />
        ))}
      </div>
    </Container>
  );
};

export default Cards;
