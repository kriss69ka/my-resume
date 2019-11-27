import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SignIn } from "./SignIn";

const MenuItem = styled(Link)`
  color: #aaa8a8;
  text-align: center;
  line-height: 28px;
  padding: 0 10px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  &:focus {
    color: #000000;
  }
  &:hover {
    color: #000000;
  }
  @media (max-width: 640px) {
    line-height: 20px;
  }
`;

const Navigation = styled.nav`
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  width: 100%;
  height: 120px;
  margin-bottom: 25px;
  display: flex;
  align-items: flex-end;
  @media (max-width: 640px) {
    justify-content: space-around;
    height: 60px;
  }
`;

export default function Header() {
  // const login = useSelector(state => state.user);
  return (
    <Navigation>
      <MenuItem to="/">Главная</MenuItem>
      <MenuItem to="/about">Обо мне</MenuItem>
      <MenuItem to="/resume">Резюме</MenuItem>
      {/* <SignIn /> */}
    </Navigation>
  );
}
