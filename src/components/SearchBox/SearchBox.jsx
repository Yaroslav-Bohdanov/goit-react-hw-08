import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input type="text" onChange={handleSearch} placeholder="Search Contacts" />
  );
};

export default SearchBox;
