"use client";

import styled from "styled-components";
interface IChatOpenContainer {
  viewChat: boolean;
}
export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  width: 100%;
  padding: 1rem;
  max-width: 1300px;
  border-radius: 10px;
  height: 90%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  overflow: hidden;
  & h1 {
    font-size: 2.5rem;
    color: #616060;
    margin: 1rem 0;
    text-align: center;
    text-transform: uppercase;
  }
`;
export const Input = styled.input`
  width: 100%;
  align-self: center;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0 1rem;
  background-color: #dfdfdf;
  font-size: 1.5rem;

  color: #616060;
  &::placeholder {
    color: #616060;
  }
`;
export const UsersContainer = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #f5f5f5;
`;
export const FirstLatter = styled.div`
  max-width: 100%;
  max-height: 100%;
  min-width: 60px;
  min-height: 60px;
  border-radius: 100%;
  background-color: #4a7bfa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: white;
  text-transform: uppercase;
`;
export const User = styled.div`
  cursor: pointer;
  max-width: 490px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;

  & > strong {
    width: 100%;
    font-size: 2rem;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & > span {
    width: 100%;
    font-size: 1.2rem;
    color: #616060;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ChatOpenContainer = styled.div<IChatOpenContainer>`
  padding: ${({ viewChat }) => (viewChat ? "1rem" : "0")};
  transition: all 0.5s ease-in-out;
  z-index: 2;
  width: ${({ viewChat }) => (viewChat ? "100%" : "0")};
  height: 100%;
  position: absolute;
  background-color: #f5f5f5;
  overflow: hidden;
  & input {
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 80%;
  }
`;

export const HeaderChat = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 20px;
  & svg,
  path {
    cursor: pointer;
  }
`;
export const Chat = styled.div`
  width: 100%;
  height: 90%;
  display: flex;

  & > div {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #4a7bfa;
    }

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 3rem 1rem;
    overflow-y: auto;
    .mine {
      align-self: flex-end;
    }
    & > span {
      max-width: 400px;
      font-size: 2.2rem;
      background-color: #4a7bfa;
      color: white;
      padding: 1rem;
      border-radius: 10px;
      align-self: flex-start;
    }
  }
`;
