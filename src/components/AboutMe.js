import React from "react";
import styled from "styled-components";
import GithubLogo from "../media/github-logo.svg";
import InstLogo from "../media/instagram-logo.svg";
import VkLogo from "../media/vk-logo.svg";

import ContactForm from "./ContactForm";
const Title = styled.div`
  font-size: 50px;
  box-sizing: border-box;
  padding: 60px 0 25px 0;
`;
const TextAboutMe = styled.p`
  font-size: 15px;
`;
const Container = styled.div`
  display: flex;
`;
const ContainerAboutMe = styled.div`
  width: 50%;
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
  React.useEffect(() => {
    fetch("http://localhost:3000/123");
  }, []);
  return (
    <Container>
      <ContainerAboutMe>
        <Title>Обо Мне</Title>
        <TextAboutMe>Это текст</TextAboutMe>
      </ContainerAboutMe>
      <ContainerAboutMe>
        <Title>Контакты</Title>
        <ItemContact>Астрахань, Ул. Керченская, 28</ItemContact>
        <ItemContact>414015, Россия</ItemContact>
        {/* изменить на email */}
        <ItemContact>kriss.69ka@gmail.com</ItemContact>
        {/* изменить на телефон */}
        <ItemContact>Телефон: 79996460177</ItemContact>
        <Social>
          <SocialLink href="https://github.com/kriss69ka">
            <SocialImg src={GithubLogo} />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/kriss_69ka/">
            <SocialImg src={InstLogo} />
          </SocialLink>
          <SocialLink href="https://vk.com/id39631161">
            <SocialImg src={VkLogo} />
          </SocialLink>
        </Social>
        <ContactForm />
      </ContainerAboutMe>
    </Container>
  );
}
