import "./styles.css";
import { Canvas } from "@react-three/fiber";
import MyAvatar from "./MyAvatar";
import AnimatedBlob from "./AnimatedBlob";

import React from "react";
import { Suspense } from "react";
import SocialFollow from "./SocialFollow";

const App = () => {
  return (
    <div className="App">
       <div className="extra-info">
          <h1>
            <a href="https://rajatkumargupta.com">Rajat Kumar Gupta</a>
          </h1>
          <SocialFollow />
        </div>
        <Canvas className="canvas">
          {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <AnimatedBlob />
          <Suspense fallback={null}>
            <MyAvatar scale={2} position={[-2, -2, 1]} />
          </Suspense>
        </Canvas>
    </div>
  );
};

export default App;
