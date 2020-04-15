import React from "react";
import {
  CardContainer,
  CardImg,
  CardTitle,
  CardGenres,
  CardStar,
  CardRating,
} from "./Card.styles.jsx";

const Card = ({ info, genres }) => {
  const genresJoined = genres.join(", ");
  return (
    <CardContainer to={`/movie/${info["id"]}`} target="_blank">
      <CardImg info={info} />
      <CardTitle className="mx-auto font-semibold text-black text-lg my-3">
        {info["title"]
          ? info["title"].length > 14
            ? info["title"].substring(0, 14) + "..."
            : info["title"]
          : info["original_name"].length > 14
          ? info["original_title"].substring(0, 14) + "..."
          : info["original_title"]}
      </CardTitle>
      <CardGenres className="mx-auto mb-2">
        {genres
          ? genres.length > 0
            ? genresJoined.length > 17
              ? genresJoined.substring(0, 17) + "..."
              : genresJoined
            : "Genres not found"
          : ""}
      </CardGenres>
      <CardStar />
      <CardRating>
        {info["vote_average"]
          ? info["vote_average"] + "/10"
          : "Rating not found"}
      </CardRating>
    </CardContainer>
  );
};

export default Card;
