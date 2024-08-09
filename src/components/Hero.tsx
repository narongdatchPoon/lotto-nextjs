"use client";
import { Text3D, useMatcapTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Hero() {
  const [matcapTexture] = useMatcapTexture("3B3C3F_DAD9D5_929290_ABACA8");
  const ref = useRef();

  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <>
      <ambientLight intensity={1} color={"#dee2ff"} />
      <Text3D
        position={[-32, -4, 16]}
        scale={[1, 1, 1]}
        ref={ref}
        size={8}
        maxWidth={[-w / 5, -h * 1, 5]}
        font={"/Inter_Bold.json"}
        curveSegments={24}
        brevelSegments={1}
        bevelEnabled
        bevelSize={0.2}
        bevelThickness={0.03}
        height={5}
        lineHeight={0.9}
        letterSpacing={0.5}
      >
        {`LOTTO88`}
        <meshMatcapMaterial color="white" matcap={matcapTexture} />
      </Text3D>
    </>
  );
}
