import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";

const Title = styled.h4`
  font-size: 50px;
  box-sizing: border-box;
  margin: 20px 0;
`;
const Block = styled.div`
  width: 50%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const BlockName = styled.h3`
  font-size: 25px;
  margin: 15px 0;
`;
const ItemBlock = styled.div``;
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
const BlockItemInput = styled(Field)`
  margin: 5px 0;
  width: 100%;
`;
const Button = styled.button``;
const onSubmit = async values => {};

export default function Resume() {
  return (
    <>
      <Title>Резюме</Title>
      <BlockWrapper>
        <Block>
          <BlockName>Кристина Ким</BlockName>
          <Item>31 июля 1997</Item>
          <Item>Учусь в школе Сербанка.</Item>
        </Block>
      </BlockWrapper>
      <Wrapper>
        <BlockWrapper>
          <Block>
            <BlockName>Образование</BlockName>
            <ItemBlock>
              <Item>Школа</Item>
              <Item>2013-2017</Item>
              <Item>Школьник</Item>
              <Button>Удалить</Button>
            </ItemBlock>
            <ItemBlock>
              <Item>АКВТ</Item>
              <Item>2013-2017</Item>
              <Item>Программист</Item>
              <Button>Удалить</Button>
            </ItemBlock>
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values
              }) => (
                <form>
                  <BlockItemInput
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Название учереждения"
                    required
                  />
                  <BlockItemInput
                    name="date"
                    component="input"
                    type="text"
                    placeholder="Дата обучения"
                    required
                  />
                  <BlockItemInput
                    name="speciality"
                    component="input"
                    type="text"
                    placeholder="Специальность"
                    required
                  />
                  <Button>Добавить</Button>
                </form>
              )}
            />
          </Block>
          <Block>
            <BlockName>Опыт работы</BlockName>
            <ItemBlock>
              <Item>Ай Ди Софт</Item>
              <Item>Август 2016-Май 2017</Item>
              <Item>Инженер - программист</Item>
            </ItemBlock>
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values
              }) => (
                <form>
                  <BlockItemInput
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Место работы"
                    required
                  />
                  <BlockItemInput
                    name="date"
                    component="input"
                    type="text"
                    placeholder="Дата"
                    required
                  />
                  <BlockItemInput
                    name="position"
                    component="input"
                    type="text"
                    placeholder="Должность"
                    required
                  />
                  <Button>Добавить</Button>
                </form>
              )}
            />
          </Block>
        </BlockWrapper>
        <BlockWrapper>
          <Block>
            <BlockName>Навыки</BlockName>
            <Item>HTML</Item>
            <Item>CSS</Item>
            <Item>SQL</Item>
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values
              }) => (
                <form>
                  <BlockItemInput
                    name="skills"
                    component="input"
                    type="text"
                    placeholder="Навыки"
                    required
                  />
                  <Button>Добавить</Button>
                </form>
              )}
            />
          </Block>
        </BlockWrapper>
      </Wrapper>
    </>
  );
}
