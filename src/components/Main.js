import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { fetchUser as fetchUserAction } from "../store/actions/user";

const mapDispatchToProps = {
  fetchUser: fetchUserAction
};

const mapStateToProps = state => {
  return {
    firebaseUserInfo: state.firebaseUser,
    userData: state.userData,
    registred: state.registred,
    userDataLoaded: state.userDataLoaded
  };
};

const Img = styled.img`
  width: 100%;
  max-width: 50%;
  object-fit: contain;

  @media (max-width: 640px) {
    display: none;
  }
`;
const Name = styled.span`
  text-align: center;
  font-size: 50px;
  color: ${props => props.colorValue || "#000000;"};
`;

const FullName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  flex-direction: column;
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

export default class MainComponent extends Component {
  componentDidMount() {
    const { fetchUser, uid } = this.props;
    fetchUser(uid);
  }

  render() {
    const { registred, userDataLoaded } = this.props;

    return registred && userDataLoaded ? (
      <>
        <MainContainer>
          <Img
            src={
              this.props.userData.imgUrl ||
              "http://lluban.by/images/storage/news/000509_818136_big.jpg"
            }
          />
          <FullName>
            <Name>
              {this.props.userData.firstName || "Имя"}{" "}
              {this.props.userData.lastName || "Фамилия"}.
            </Name>
            <Name colorValue="rgba(170,168,168,1)">
              {this.props.userData.profession || "Профессия"}
            </Name>
          </FullName>
        </MainContainer>
        <MainContainer>
          <AboutMe>{this.props.userData.text || "Текст"}</AboutMe>
        </MainContainer>
      </>
    ) : (
      <div>loading...</div>
    );
  }
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
