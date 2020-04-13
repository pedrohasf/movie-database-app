import styled from "styled-components";

export const SignInAndSignUpPageContainer = styled.div.attrs({
  className: "p-4",
})`
  display: flex;
  justify-content: space-between;
  margin: 4rem auto 0 auto;
  @media (min-width: 640px) {
    flex-direction: row;
    height: calc(100vh - 4.5rem);
  }
  @media (max-width: 640px) {
    margin-left: -1rem;
  }
`;
