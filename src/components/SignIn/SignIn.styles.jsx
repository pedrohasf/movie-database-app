import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const SignInTitleMessage = styled.h2`
  margin: 10px 0;
`;

export const SignInInstructionMessage = styled.span``;

export const SignInForm = styled.form``;

export const SignInButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
