import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1em;
  background: red;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Login = () => {
  return (
    <Wrapper>
      <Title>Login page</Title>
    </Wrapper>
  );
};

export default Login;
