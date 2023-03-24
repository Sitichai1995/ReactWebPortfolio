import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
      width: 100%;
      display: flex;
    }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 60px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 20px;
  width: 10px;
`;

const Subtitle = styled.h2`
  color: #eab676;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;


const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 1000px;
  height: 800px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateX(20px);
    }
  }
`;

const ListItem = styled.li`
  list-style-type: none ;
  color: #ffffff;
  font-size: 40px;
`

const Animation = styled.div`
  height: 40px;
  overflow: hidden;
`

 const Animate = styled.div`
  height: 100%;
  animation: move 8s ease-in-out infinite alternate;
  @keyframes move {
  25% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(-100px);
  }
  75% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateY(-200px);
  }
}
 `

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Sitichai Paseeswat</Title>
          <WhatWeDo>
            <Line src="./images/line.png" />
            <Subtitle>What I Can Do</Subtitle>
          </WhatWeDo>
          <Desc>
          <Animation>
          <Animate>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>Javascript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Node JS</ListItem>
          </Animate>
        </Animation>
        </Desc>
        </Left>
        <Right>
          <Img src="./images/hero.png" />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
