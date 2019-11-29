import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title = styled.h4`
  font-size: 50px;
  box-sizing: border-box;
  margin: 20px 0;
`;
const Block = styled.div`
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const BlockName = styled.h3`
  font-size: 25px;
  margin: 15px 0;
`;
const ItemBlock = styled.div`
  width: 80%;
  border-bottom: 1px solid;
  margin: 20px 0;
`;
const Item = styled.div`
  font-size: 15px;
  margin: 5px 0;
`;
const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  margin: 15px 0;
  box-sizing: border-box;
  padding: 10px 0;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export default function Resume() {
  const {
    education,
    work,
    skills,
    lastName,
    firstName,
    dateBirth
  } = useSelector(state => state.userData);

  const loaded = useSelector(state => state.userDataLoaded);
  return loaded ? (
    <div style={{ padding: "10px" }}>
      <Title>Резюме</Title>
      <BlockWrapper>
        <Block>
          <BlockName>
            {firstName || "Имя"} {lastName || "Фамилия"}
          </BlockName>
          <Item>{dateBirth || "Дата рождения"}</Item>
        </Block>
      </BlockWrapper>
      <Wrapper>
        <BlockWrapper>
          <Block>
            <BlockName>Образование</BlockName>
            {education.length
              ? education.map(education => (
                  <ItemBlock>
                    <Item>{education.name}</Item>
                    <Item>
                      {education.dateFrom}-{education.dateTo}
                    </Item>
                    <Item>{education.position}</Item>
                  </ItemBlock>
                ))
              : "Список где учился"}
          </Block>
          <Block>
            <BlockName>Опыт работы</BlockName>
            {work.length
              ? work.map(work => (
                  <ItemBlock>
                    <Item>{work.name}</Item>
                    <Item>
                      {work.dateFrom}-{work.dateTo}
                    </Item>
                    <Item>{work.position}</Item>
                  </ItemBlock>
                ))
              : "Список где работал"}
          </Block>
        </BlockWrapper>
        <BlockWrapper>
          <Block>
            <BlockName>Навыки</BlockName>
            {skills.length
              ? skills.map(skill => <Item>{skill}</Item>)
              : "Список что умеешь"}
          </Block>
        </BlockWrapper>
      </Wrapper>
    </div>
  ) : (
    <div>loading</div>
  );
}
