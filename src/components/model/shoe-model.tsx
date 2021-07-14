import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export declare interface ShoeModelProps {
  laces: String;
  mesh: String;
  caps: String;
  inner: String;
  sole: String;
  stripes: String;
  band: String;
  patch: String;

  children?: React.ReactNode;
}
export default function ShoeModel({
  laces,
  mesh,
  caps,
  inner,
  sole,
  stripes,
  band,
  patch,
  ...props
}: ShoeModelProps) {
  const group = useRef();
  const { nodes, materials }: any = useGLTF(
    process.env.PUBLIC_URL + "/shoe-draco.glb"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={patch}
      />
    </group>
  );
}

useGLTF.preload(process.env.PUBLIC_URL + "/shoe-draco.glb");
