// https://look.com.ua/pic/201303/1280x1024/look.com.ua-65931.jpg

import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { fetchUser as fetchUserAction } from "../store/actions/user";

const mapDispatchToProps = {
  fetchUser: fetchUserAction
};

const mapStateToProps = state => {
  return {
    users: state.userData
  };
};

const Img = styled.img`
  width: 776px;
  height: 380px;
  object-fit: cover;
`;
const Name = styled.span`
  font-size: 50px;
  color: ${props => props.colorValue || "#000000;"};
`;

const FullName = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const MainContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AboutMe = styled.p`
  padding: 20px 0;
  text-align: center;
  line-height: 1.5em;
  font-size: 14px;
`;

export default function MainComponent({ fetchUser, users }) {
  useEffect(() => {
    fetchUser(1);
  }, []);

  return (
    <>
      <MainContainer>
        <Img src="https://look.com.ua/pic/201303/1280x1024/look.com.ua-65931.jpg" />
        <FullName>
          <Name>Кристина Ким. &nbsp;</Name>
          <Name colorValue="rgba(170,168,168,1)">Frontend Dev.</Name>
        </FullName>
      </MainContainer>
      <MainContainer>
        <AboutMe>
          Привет! Мне 22 года. Сейчас я живу в Москве и учусь в школе Сбербанка.
        </AboutMe>
      </MainContainer>
    </>
  );
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
