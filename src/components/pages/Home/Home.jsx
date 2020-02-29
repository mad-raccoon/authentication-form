import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1em;
  background: blue;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>Login page</Title>
    </Wrapper>
  );
};

export default Home;
