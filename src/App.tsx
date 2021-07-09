import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Sphere from "./components/Sphere";

function App() {
  return (
    <div className="App p-2">
      <div className="max-w-max shadow rounded mx-auto p-4">
        <h1>Bike Shop 3D</h1>
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Sphere></Sphere>
      </Canvas>
    </div>
  );
}

export default App;
