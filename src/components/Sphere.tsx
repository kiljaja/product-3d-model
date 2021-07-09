function Sphere() {
  return (
    <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="red"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}
export default Sphere