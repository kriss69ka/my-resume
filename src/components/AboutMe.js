import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import GithubLogo from "../media/github-logo.svg";
import InstLogo from "../media/instagram-logo.svg";
import VkLogo from "../media/vk-logo.svg";

const Title = styled.h4`
  font-size: 50px;
  box-sizing: border-box;
  ${"" /* padding: 60px 0 25px 0; */}
  margin: 20px 0;
`;
const TextAboutMe = styled.p`
  font-size: 15px;
`;
const Container = styled.div`
  display: flex;
  padding: 10px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const ContainerAboutMe = styled.div`
  width: 50%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const ItemContact = styled.p`
  font-size: 15px;
  display: block;
  margin: 5px 0;
`;
const Social = styled.div`
  margin: 20px 0;
`;
const SocialLink = styled.a`
  text-decoration: none;
  margin-right: 5px;
`;
const SocialImg = styled.img`
  height: 25px;
  width: 25px;
`;

export default function AboutMe() {
  const {
    address,
    aboutMeText,
    phone,
    email,
    linkIg,
    linkGithub,
    linkVk
  } = useSelector(state => state.userData);

  const loaded = useSelector(state => state.userDataLoaded);
  return loaded ? (
    <Container>
      <ContainerAboutMe>
        <Title>Обо мне</Title>
        <TextAboutMe>{aboutMeText || "Текст"}</TextAboutMe>
      </ContainerAboutMe>
      <ContainerAboutMe>
        <Title>Контакты</Title>
        <ItemContact>{address || "Адрес"}</ItemContact>
        <ItemContact>{email || "Email"}</ItemContact>
        <ItemContact>{phone || "Телефон"}</ItemContact>
        <Social>
          {linkIg && (
            <SocialLink href={linkIg}>
              <SocialImg src={InstLogo} />
            </SocialLink>
          )}
          {linkGithub && (
            <SocialLink href={linkGithub}>
              <SocialImg src={GithubLogo} />
            </SocialLink>
          )}
          {linkVk && (
            <SocialLink href={linkVk}>
              <SocialImg src={VkLogo} />
            </SocialLink>
          )}
        </Social>
      </ContainerAboutMe>
    </Container>
  ) : (
    <div>loading</div>
  );
}
