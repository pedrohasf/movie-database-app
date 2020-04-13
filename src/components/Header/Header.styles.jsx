import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox.component";

const yellowStyle = css`
  color: rgb(255, 193, 7);
`;

export const HeaderNav = styled.nav.attrs({
  className:
    "bg-black fixed top-0 z-10 h-16 items-center justify-between flex-row",
})`
  width: calc(100vw + 1rem);
  margin-left: -1rem;
  margin-right: -1rem;
  opacity: 0.95;
  display: flex;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 0;
  -webkit-appearance: none;
  border: 1px solid transparent;
`;

export const SearchBoxStyled = styled(SearchBox)``;

export const HeaderLogoLink = styled(Link).attrs({
  className: " font-serif flex items-center",
})`
  ${yellowStyle}
`;

export const HeaderSpan = styled.span.attrs({
  className: "ml-4",
})`
  display: none;
  font-size: 2.5rem;
  @media only screen and (min-width: 640px) {
    display: flex;
  }
`;

export const HeaderLogoIcon = styled.i``;

export const LogOutContainer = styled.div`
  ${yellowStyle};
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 12.5rem;
  @media only screen and (max-width: 640px) {
    font-size: 16px;
    margin-right: 0;
  }
`;

export const LogInLink = styled(Link)`
  ${yellowStyle};
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 12.5rem;
  @media only screen and (max-width: 640px) {
    font-size: 16px;
    margin-right: 0;
  }
`;
