import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 980px;
  @media (max-width: 640px) {
    max-width: 640px;
    width: 100%;
  }
`;

export default function ContainerWrapper({ children }) {
  return <Container>{children}</Container>;
}
