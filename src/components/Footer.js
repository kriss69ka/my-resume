import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  margin: 10px;
  margin-top: 20px;
  width: 100%;
  display: flex-start;
  justify-content: center;
`;

const Btn = styled(Link)`
  text-align: center;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  color: black;
  text-decoration: none;
`;

export default function Footer({ uid }) {
  const history = useHistory();
  const editPage = history.location.pathname.split("/")[1] === "edit";
  return (
    !editPage && (
      <Wrapper>
        <Btn to={`/edit/${uid}`}>Редактировать</Btn>
      </Wrapper>
    )
  );
}
