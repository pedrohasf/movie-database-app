import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton.component";

export const SignUpContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  @media (min-width: 640px) {
    margin-left: 4rem;
  }
  @media (max-width: 640px) {
    width: 300px;
  }
`;

export const SignUpTitleMessage = styled.h2`
  margin: 10px 0;
`;

export const SignUpInstructionMessage = styled.span``;

export const SignUpForm = styled.form``;

export const CustomButtonStyled = styled(CustomButton)`
  @media (max-width: 640px) {
    width: 100%;
  }
`;
