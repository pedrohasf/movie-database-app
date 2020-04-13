import styled from "styled-components";

export const SearchBoxContainer = styled.form.attrs({
  className: "p-2 flex",
})``;

export const SearchBoxLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export const SearchBoxInput = styled.input.attrs({
  className:
    "p-3 border border-black bg-yellow-300 text-black placeholder-black",
  type: "search",
  placeholder: "Search by movie title",
})`
  width: 12rem;
`;

export const SearchBoxButton = styled.button.attrs({
  type: "submit",
  className: "border border-black bg-yellow-500 cursor-pointer text-center p-3",
})``;

export const SearchBoxSubmitIcon = styled.i.attrs({
  className: "fa fa-search text-black",
})``;
