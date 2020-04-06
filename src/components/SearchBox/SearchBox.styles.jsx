import styled from "styled-components";

export const SearchBoxContainer = styled.form.attrs({
  className: "p-2",
})``;

export const SearchBoxInput = styled.input.attrs({
  className:
    "p-3 border border-black bg-yellow-300 text-black placeholder-black",
  type: "search",
  placeholder: "search by movie title",
})``;

export const SearchBoxButton = styled.button.attrs({
  type: "submit",
  className: "border border-black bg-yellow-500 cursor-pointer text-center p-3",
})``;

export const SearchBoxSubmitIcon = styled.i.attrs({
  className: "fa fa-search text-black",
})``;
