import React from "react";
import styled from "styled-components";

import { Form, Field } from "react-final-form";

//отправка формы на эмэйл
const onSubmit = async values => {};

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  justify-content: space-between;
`;
const Item = styled(Field)`
  margin-top: 5px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 1);
  color: #000000;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

const Button = styled.button`
  border: 0;
  color: #ffffff;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 1);
  padding: 5px;
  margin-top: 5px;
  box-sizing: border-box;
`;

export default function ContactForm() {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <StyledForm onSubmit={handleSubmit}>
          <ItemContainer>
            <Item
              name="firstName"
              component="input"
              type="text"
              placeholder="Имя"
              required
            />

            <Item
              name="email"
              component="input"
              type="text"
              placeholder="Email"
              required
            />

            <Item
              name="topic"
              component="input"
              type="text"
              placeholder="Тема"
            />
          </ItemContainer>

          <ItemContainer>
            <Item name="message" component="textarea" placeholder="Сообщение" />
            <Button type="submit" disabled={submitting || pristine}>
              Отправить
            </Button>
          </ItemContainer>
        </StyledForm>
      )}
    />
  );
}
