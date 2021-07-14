import * as THREE from "three";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import styles from "./product.module.css";

import { useControls } from "leva";

import ShoeModel, {ShoeModelProps} from "../model/shoe-model";
function Product() {
  const colorSet: ShoeModelProps  = useControls({ laces: "#fff", mesh: "#ff0000", caps: "#fff", inner: "#fff", sole: "#fff", stripes: "#fff", band: "#fff", patch: "#fff"  });
  return (
    <>
      <div className="w-full shadow rounded md:max-w-sm">
        <Canvas className={styles["product-window-aspect-ratio"]} camera={ { position: [0, 0, 2]}}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <ShoeModel {...colorSet} />
            <Environment files="royal_esplanade_1k.hdr" />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -0.8, 0]}
              opacity={0.25}
              width={10}
              height={10}
              blur={2}
              far={1}
            />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default Product;
