import React from "react";
import styled from "styled-components";
import { IButton } from "../data";

export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 16px;
    border-radius: 8px;

    background-color: white;
  `,
  HeaderContainer: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 8px;
  `,
  HeaderText: styled.p`
    font-size: 16px;
    font-weight: 700;

    color: black;


    @media only screen and (max-width: 1000px) {
      font-size: 14px;
    }
  `,
  HeaderTitle: styled.p`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 24px;


    color: #097BF4;
    @media only screen and (max-width: 1000px) {
      font-size: 20px;
    }
  `,
  HeaderSubtitle: styled.p`
    font-size: 16px;
    font-weight: 700;

    color: black;
    margin: 0 10% 24px;
    @media only screen and (max-width: 1000px) {
      font-size: 14px;
      margin: 0 5% 24px;
    }
  `,
  FormContainer: styled.div`
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  `,
  FormContent: styled.div`
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  `,
  Label: styled.label`
    font-size: 14px;
    font-weight: 700;
    
    color: black;
  `,
  FooterContainer: styled.div`
    width: 100%;
    display: flex;
    margin-top: 16px;

    flex-direction: column;
    gap: 8px
  `,
  Button: styled.input<IButton>`
    height: ${({height}) => height};
    background-color: white;
    border: 1px solid #1d1e1c;
    border-radius: 8px;
    padding: 0 16px;
    color: black;
    width: ${({width}) => width};

  `,
  ButtonText: styled.small`
    font-size: 12px;
    font-weight: 500;
    
    color: black;
  `,
  ButtonContainer: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  Select: styled.select`
    width: 100%;
    height: 30px;
    background-color: white;
    border: 1px solid black;
    color: black;
  `,
  CredentialsButtons: styled.div`
    width: 100%;
    display: flex;

    flex-direction: column;
    gap: 4px
  `,
  SubmitButton: styled.button`
    width: 100%;
    height: 40px;

    background: #90EE90;
    color: white;
    font-size: 12px;
    font-weight: 700;
  `,
};
