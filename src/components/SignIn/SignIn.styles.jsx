import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) {
    margin-left: auto;
  }
  @media (max-width: 640px) {
    width: 310px;
  }
`;

export const SignInTitleMessage = styled.h2`
  margin: 10px 0;
`;

export const SignInInstructionMessage = styled.span``;

export const SignInForm = styled.form``;

export const SignInButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
