import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 980px;
`;

export default function ContainerWrapper({ children }) {
  return <Container>{children}</Container>;
}
