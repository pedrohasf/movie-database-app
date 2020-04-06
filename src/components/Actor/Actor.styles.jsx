import styled from "styled-components";

export const ActorCard = styled.div.attrs({
  className:
    "text-center rounded-lg bg-gray-400 m-2 inline-block shadow-lg text-black p-4",
})``;

export const ActorImg = styled.img.attrs(({ name, url }) => ({
  alt: "Actor " + name,
  src: url
    ? `https://image.tmdb.org/t/p/w200${url}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb481OSt5pyxs0sDiBLtbJSYBqQDFijRlhf74kfk4Wtz5Qo5-z",
}))`
  width: 200px;
  height: 300px;
`;

export const ActorName = styled.h4`
  max-width: 10rem;
`;

export const ActorCharacter = styled.h6`
  max-width: 10rem;
`;
