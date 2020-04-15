import React from "react";
import {
  SearchBoxContainer,
  SearchBoxInput,
  SearchBoxButton,
  SearchBoxSubmitIcon,
  SearchBoxLabel,
} from "./SearchBox.styles";

const SearchBox = ({ searchChange, onSubmit }) => {
  return (
    <SearchBoxContainer onSubmit={onSubmit}>
      <SearchBoxLabel htmlFor="search">Search by movie title</SearchBoxLabel>
      <SearchBoxInput id="search" onChange={searchChange} />
      <SearchBoxButton aria-label="Search">
        <SearchBoxSubmitIcon />
      </SearchBoxButton>
    </SearchBoxContainer>
  );
};

export default SearchBox;
