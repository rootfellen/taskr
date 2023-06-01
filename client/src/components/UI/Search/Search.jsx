import React from "react";
import { SearchContainer } from "./SearchElements";
import searchIcon from "../../../assets/icons/search.svg";

const Search = () => {
  return (
    <SearchContainer>
      <img src={searchIcon} alt="search" />
      <input type="text" placeholder=" Search here.." />
    </SearchContainer>
  );
};

export default Search;
