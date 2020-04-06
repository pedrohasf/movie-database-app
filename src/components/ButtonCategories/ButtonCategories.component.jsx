import React from "react";
import {
  ButtonCategoriesGroup,
  ButtonCategoryPopular,
  ButtonCategoryNowPlaying,
  ButtonCategoryTopRated,
  ButtonCategoryUpcoming
} from "./ButtonCategories.styles.jsx";

const ButtonTypes = ({ category }) => {
  return (
    <ButtonCategoriesGroup>
      <ButtonCategoryPopular to={"/popular"} category={category}>
        Popular
      </ButtonCategoryPopular>
      <ButtonCategoryNowPlaying to={"/now_playing"} category={category}>
        Now Playing
      </ButtonCategoryNowPlaying>
      <ButtonCategoryTopRated to={"/top_rated"} category={category}>
        Top Rated
      </ButtonCategoryTopRated>
      <ButtonCategoryUpcoming to={"/upcoming"} category={category}>
        Upcoming
      </ButtonCategoryUpcoming>
    </ButtonCategoriesGroup>
  );
};
export default ButtonTypes;
