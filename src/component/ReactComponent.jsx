import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import HTML from "./React";

const Container = styled.div`
  height: 100%;
  width: 100%;

`

const Html = () => {
  return (
    <Container>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.2}>
            <HTML/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default Html;