import { Reflector } from "@react-three/drei";
import { useRef } from "react";
import Cylinder from "./Cylinder";
import Hero from "./Hero";
export default function ModelReflector({
  propsGroup,
  unitPosition,
  minTime,
  maxTime,
}) {
  const group = useRef();
  // const { nodes } = useGLTF("/pink-d.glb");
  const positions = [
    [[-2, 6, 0]],
    [
      [-16, 6, 0],
      [14, 6, 0],
    ],
    [
      [-2, 6, 0],
      [-28, 6, 0],
      [24, 6, 0],
    ],
  ];
  return (
    <group ref={group} {...propsGroup} dispose={null}>
      <Reflector
        resolution={1024}
        receiveShadow
        mirror={0.1}
        mixBlur={1}
        mixStrength={1}
        depthScale={1}
        minDepthThreshold={0.5}
        maxDepthThreshold={1}
        position={[0, -5, 8]}
        scale={[2, 2, 1]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        args={[70, 70]}
      >
        {(Material, props) => (
          <Material metalness={0.25} color="#bb86a1" roughness={1} {...props} />
        )}
      </Reflector>
      {/* <Model /> */}
      <Hero />
      {positions[unitPosition - 1].map((position, index) => (
        <Cylinder
          key={index}
          props={(position = { position })}
          minTime={minTime}
          maxTime={maxTime}
        />
      ))}
      {/* <Cylinder position={[-2, 6, 0]} color={"white"} />
      <Cylinder position={[-28, 6, 0]} color={"white"} />
      <Cylinder position={[24, 6, 0]} color={"white"} /> */}
    </group>
  );
}
