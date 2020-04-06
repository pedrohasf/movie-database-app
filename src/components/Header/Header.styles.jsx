import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const yellowStyle = css`
  color: rgb(255, 193, 7);
`;

export const HeaderNav = styled.nav.attrs({
  className:
    "bg-black fixed top-0 z-10 h-16 items-center justify-between flex-row",
})`
  width: calc(100% + 2rem);
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

export const HeaderLogoLink = styled(Link).attrs({
  className: "text-4xl font-serif",
})`
  ${yellowStyle}
`;

export const HeaderLogoIcon = styled.i``;

export const LogOutContainer = styled.div`
  cursor: pointer;
  padding: 5rem;
`;

export const LogInLink = styled(Link)`
  ${yellowStyle};
  padding: 5rem;
`;
