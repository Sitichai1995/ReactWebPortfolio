import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cubic from "./Cubic";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
      width: 100%;
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
  flex: 1;
  @media only screen and (max-width: 768px) {
      display: none;
    }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
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
  width: 20px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Who() {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cubic />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>I'm a learner from JSD#3. 
          </Title>
          <WhatWeDo>
            <Line src="./images/line.png" />
            <Subtitle>Generation's Junior Software Developer Bootcamp. </Subtitle>
          </WhatWeDo>
          <Desc>
          I believe that my previous work experiences and my teachnical skills can launch my career in the tech sector.
          </Desc>
          <Button onClick={()=>{window.location.href='https://github.com/Sitichai1995'}}>See My works</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who;
