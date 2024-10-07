/* eslint-disable */

import Container from "../Container";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import RoatingLine from "../loading/RoatingLine";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearSearchResults } from "../../features/searchResult/searchResultSlice";

const Cards = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string | null>();
  const dispatch = useDispatch();
  const filterResult = useSelector(
    (state: any) => state.filterResult.filterResults
  );

  const searchResult = useSelector(
    (state: any) => state.searchResult.searchResults
  );

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/categories", {
        params: { searchQuery },
      });
      return res.data;
    },
  });

  // call the "/api/categories" -> when change the filter value
  useEffect(() => {
    refetch();
    dispatch(clearSearchResults());
  }, [searchQuery]);

  // get category search value from url (?category=Countryside)
  useEffect(() => {
    const parsedString = queryString.parse(location.search);
    setSearchQuery(parsedString.category);
  }, [location.search]);

  if (isPending) return <RoatingLine />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container>
      <div className='grid grid-cols-4 gap-6'>
        {filterResult && filterResult.length > 0
          ? filterResult.map((category: any) => (
              <Card key={category?._id} category={category} />
            ))
          : searchResult && searchResult.length > 0
          ? searchResult.map((category: any) => (
              <Card key={category?._id} category={category} />
            ))
          : data?.map((category: any) => (
              <Card key={category?._id} category={category} />
            ))}
      </div>
      {/* <div className='grid grid-cols-4 gap-6'>
        {filterResult && filterResult.length > 0
          ? filterResult.map((category: any) => (
              <Card key={category?._id} category={category} />
            ))
          : data?.map((category: any) => (
              <Card key={category?._id} category={category} />
            ))}
        {searchResult && searchResult.length > 0
          ? searchResult.map((category: any) => (
              <Card key={category?._id} category={category} />
            ))
          : data?.map((category: any) => (
              <Card key={category?._id} category={category} />
            ))}
      </div> */}
    </Container>
  );
};

export default Cards;
