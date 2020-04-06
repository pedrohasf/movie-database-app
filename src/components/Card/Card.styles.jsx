import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link).attrs({
  className:
    "text-center transform transition duration-300 ease-in-out bg-gray-400 rounded-lg p-4 m-2 shadow-lg cursor-pointer inline-block",
  target: "_blank",
})`
  :hover {
    --transform-scale-x: 1.1;
    --transform-scale-y: 1.1;
  }
`;

export const CardImg = styled.img.attrs(({ info }) => ({
  alt: "Poster " + info["title"],
  src: info["poster_path"]
    ? `https://image.tmdb.org/t/p/w200${info["poster_path"]}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb481OSt5pyxs0sDiBLtbJSYBqQDFijRlhf74kfk4Wtz5Qo5-z",
}))`
  width: 200px;
  height: 300px;
`;

export const CardTitle = styled.h4`
  max-width: 10rem;
`;

export const CardGenres = styled.p`
  max-width: 10rem;
`;

export const CardStar = styled.span.attrs({
  className: "fa fa-star text-xl",
})`
  color: orange;
`;

export const CardRating = styled.p``;
