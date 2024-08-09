import { Text3D, useMatcapTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function NumberLotto({ lotto }) {
  const [matcapTexture] = useMatcapTexture("3B3C3F_DAD9D5_929290_ABACA8");
  const textMesh = useRef();
  useFrame((state, delta) => {
    textMesh.current.rotation.y += delta * 0.5;
    textMesh.current.geometry.center();
  });
  // useEffect(() => {
  //   textMesh.current.geometry.translate(-4, 0, 0);
  //   textMesh.current.position.set(-4, 10, -2);
  // });
  return (
    <>
      <ambientLight intensity={1} color={"#dee2ff"} />
      <Text3D
        position={[-2, 14.5, -2]}
        scale={[1, 1, 1]}
        ref={textMesh}
        size={10}
        font={"/Inter_Bold.json"}
        curveSegments={24}
        brevelSegments={1}
        bevelEnabled
        bevelSize={0.2}
        bevelThickness={0.03}
        height={4}
        lineHeight={0.9}
        letterSpacing={0.5}
      >
        {lotto}
        <meshMatcapMaterial color="red" matcap={matcapTexture} />
      </Text3D>
    </>
  );
}
