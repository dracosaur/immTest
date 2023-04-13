import React from "react";
import styled from "styled-components";

export default {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    background-color: #ADD8E6;

    img {
      width: 200px;
    }
  `,
  FormContent: styled.div`
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  `,
};
