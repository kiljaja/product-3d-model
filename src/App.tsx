import * as THREE from "three";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";

 import Product from "./components/product/product";
function App() {
  return (
    <div className="w-full h-96 p-2.5">
      <Product />
    </div>
  );
}

export default App;
