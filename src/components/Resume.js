import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 50px;
  box-sizing: border-box;
  padding: 60px 0 25px 0;
`;
const Block = styled.div`
  width: 50%;
`;
const BlockName = styled.div`
  font-size: 25px;
  margin: 15px 0;
`;
const BlockItem = styled.p`
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
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export default function Resume() {
  return (
    <>
      <Title>Резюме</Title>
      <BlockWrapper>
        <Block>
          <BlockName>Кристина Ким</BlockName>
          <BlockItem>22 года.</BlockItem>
          <BlockItem>Живу в Москве.</BlockItem>
          <BlockItem>Учусь в школе Сербанка.</BlockItem>
        </Block>
      </BlockWrapper>
      <Wrapper>
        <BlockWrapper>
          <Block>
            <BlockName>Образование</BlockName>
            <BlockItem>22 года.</BlockItem>
            <BlockItem>Живу в Москве.</BlockItem>
            <BlockItem>Учусь в школе Сербанка.</BlockItem>
          </Block>
          <Block>
            <BlockName>Опыт работы</BlockName>
            <BlockItem>22 года.</BlockItem>
            <BlockItem>Живу в Москве.</BlockItem>
            <BlockItem>Учусь в школе Сербанка.</BlockItem>
          </Block>
        </BlockWrapper>
        <BlockWrapper>
          <Block>
            <BlockName>Навыки</BlockName>
            <BlockItem>22 года.</BlockItem>
            <BlockItem>Живу в Москве.</BlockItem>
            <BlockItem>Учусь в школе Сербанка.</BlockItem>
          </Block>
          <Block>
            <BlockName>Проекты</BlockName>
            <BlockItem>22 года.</BlockItem>
            <BlockItem>Живу в Москве.</BlockItem>
            <BlockItem>Учусь в школе Сербанка.</BlockItem>
          </Block>
        </BlockWrapper>
      </Wrapper>
    </>
  );
}
