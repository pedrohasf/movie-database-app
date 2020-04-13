import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const baseButtonStyles = css`
color: #dee2e6;
display:flex;
align-items: center;
padding: 0 0.75rem;
border: 1px solid rgb(167, 39, 39);
border-radius: 0.4rem;
margin: 5px;
cursor: pointer;
height: 4rem
}
@media (min-width:320px)  {.btn-group{
margin-top: 9%;
}}
@media (min-width:640px){
  padding: 0.4rem 0.75rem;
  height: auto;
}
@media (min-width:961px)  { .btn-group{
margin-top: 8%;
}}
@media (min-width:1281px) { .btn-group{
margin-top: 6%;
} }
`;

export const ButtonCategoriesGroup = styled.div.attrs({
  className: "btn-group flex justify-center items-center",
})``;

export const ButtonCategoryPopular = styled(Link)`
  ${baseButtonStyles}
  ${(props) =>
    props.category === "Popular" ? "background-color: rgb(218, 11, 11);" : ""}
`;
export const ButtonCategoryUpcoming = styled(Link)`
  ${baseButtonStyles}
  ${(props) =>
    props.category === "Upcoming" ? "background-color: rgb(218, 11, 11);" : ""}
`;
export const ButtonCategoryTopRated = styled(Link)`
  ${baseButtonStyles}
  ${(props) =>
    props.category === "TopRated" ? "background-color: rgb(218, 11, 11);" : ""}
`;
export const ButtonCategoryNowPlaying = styled(Link)`
  ${baseButtonStyles}
  ${(props) =>
    props.category === "NowPlaying"
      ? "background-color: rgb(218, 11, 11);"
      : ""}
`;
