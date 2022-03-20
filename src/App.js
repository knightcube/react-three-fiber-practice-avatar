import "./styles.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, useAnimations } from "@react-three/drei";
import Logo2 from "./Logo2";
import MyAvatar from "./MyAvatar";
import ReactThreeBox from "./ReactThreeBox";
import AnimatedBlob from "./AnimatedBlob";

import React from "react";
import { Suspense } from "react";
import SocialFollow from "./SocialFollow";

const App = () => {
  return (
    <div>
      <Wrapper className="App">
        <div className="extra-info">
          <h1>
            <a href="https://revidd.com">Rajat Kumar Gupta</a>
          </h1>
          {/* <p>@knightcube</p> */}
          <SocialFollow />
        </div>
        <Canvas className="canvas">
          {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <AnimatedBlob />
          <Suspense fallback={null}>
            {/* <Logo3D scale={2} position={[0, 0, 0]} /> */}
            <MyAvatar scale={2} position={[-2, -2, 1]} />
            {/* <MyAvatar scale={2} position={[0,-2,0]}/> */}
          </Suspense>
          {/* <React.Suspense fallback={null}>
            <Text
              position={[0, 0, 2.2]}
              fontSize={0.2}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              REACT THREE FIBER
            </Text>
          </React.Suspense> */}
        </Canvas>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: #060818;
  canvas {
    display: block;
    height: 100vh;
  }

  h1 {
    font-size: 4rem;
    color: #ffffff;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export default App;
