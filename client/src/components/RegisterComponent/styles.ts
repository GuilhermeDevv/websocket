"use client";

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px #ccc;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }


  
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
  outline: none;
  &:focus {
    border: 1px solid #333;
  }
`;
