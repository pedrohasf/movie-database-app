import styled, { css } from "styled-components";

const container = css`
  padding: 15px;
  margin: 0 10%;
`;

export const MoviePageContainer = styled.div.attrs({
  className: "mt-20 mb-16",
})``;

export const MoviePageBackdrop = styled.div.attrs({
  className: "w-full h-full fixed top-0",
})`
    z-index: -1;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://image.tmdb.org/t/p/w1280${(
      props
    ) => props.url}}');
`;

export const MovieInfoContainer = styled.div.attrs({
  className: "flex flex-row",
})`
  color: #f4f4f4;
  background-color: rgba(0, 0, 0, 0.6);
  ${container}
`;

export const MovieAdditionalInfoContainer = styled.div.attrs({
  className: "bg-black text-xl",
})`
  color: #f4f4f4;
  ${container}
`;

export const MovieActorsContainer = styled.div.attrs({
  className: "text-center text-black bg-white",
})`
  ${container}
`;

export const MovieSectionTitle = styled.h2.attrs({
  className: "text-yellow-600 text-5xl font-semibold",
})``;

export const MoviePosterImg = styled.img.attrs(({ title, url }) => ({
  alt: "Poster " + title,
  src: url
    ? `https://image.tmdb.org/t/p/w780${url}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb481OSt5pyxs0sDiBLtbJSYBqQDFijRlhf74kfk4Wtz5Qo5-z",
}))`
  width: 30%;
  height: 30%;
`;

export const MovieTextInfoContainer = styled.div.attrs({
  className: "flex flex-col m-3",
})``;

export const MovieTagline = styled.h4.attrs({
  className: "text-2xl",
})``;

export const MovieInfoParagraph = styled.p.attrs({
  className: "text-xl",
})``;

export const RatingContainer = styled.div.attrs({
  className: "flex flex-row",
})``;

export const RatingStarIcon = styled.span.attrs({
  className: "fa fa-star text-6xl",
})`
  color: orange;
`;

export const RatingInfo = styled.p.attrs({
  className: "m-3 text-4xl",
})``;
