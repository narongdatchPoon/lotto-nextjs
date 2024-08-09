"use client";
import ModelReflector from "@/components/ModelReflector";
import Rig from "@/components/Rig";
import Setting from "@/components/Setting";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

RectAreaLightUniformsLib.init();
// import Image from 'next/image'

export default function Home() {
  const [windowHeight, setWindowHeight] = useState();
  const [unit, setUnit] = useState(3);
  const [minTimeSpin, setminTimeSpin] = useState(2000);
  const [maxTimeSpin, setMaxTimeSpin] = useState(5000);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  });
  const onSave = ({ unit, minTimeSpin, maxTimeSpin }) => {
    setUnit(unit);
    setminTimeSpin(minTimeSpin);
    setMaxTimeSpin(maxTimeSpin);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#000]">
      <div className="absolute right-0 bottom-0 z-50">
        <Setting
          defaultMaxTimeSpin={maxTimeSpin}
          defaultMinTimeSpin={minTimeSpin}
          onSave={onSave}
          defaultUnit={unit}
        />
      </div>
      <div
        className="text-center text-neutral-content w-full"
        style={{
          background: "#ffb6c1",
          cursor: `url(
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxMCIgZmlsbD0id2hpdGUiLz48L3N2Zz4="
          ),
          auto`,
        }}
      >
        {windowHeight && (
          <div className="w-full">
            <Canvas
              style={{
                height: windowHeight,
                width: "100%",
              }}
              shadows
              dpr={[1, 2]}
              camera={{
                position: [0, 40, 90],
                fov: 35,
              }}
            >
              <fog attach="fog" args={["lightpink", 60, 190]} />
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <ModelReflector
                  unitPosition={unit}
                  minTime={minTimeSpin}
                  maxTime={maxTimeSpin}
                />
                <spotLight position={[50, 50, -30]} castShadow />
                <pointLight
                  position={[-10, -10, -10]}
                  color="red"
                  intensity={3}
                />
                <pointLight position={[0, -5, 5]} intensity={0.5} />
                <directionalLight
                  position={[0, -5, 0]}
                  color="red"
                  intensity={2}
                />
                <Environment preset="warehouse" />
                {/* CameraShake */}
                <Rig />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minAzimuthAngle={-Math.PI * 2.01}
                maxAzimuthAngle={-Math.PI * 1.99}
                minPolarAngle={Math.PI / 2.8}
                maxPolarAngle={Math.PI / 2.7}
              />
            </Canvas>
          </div>
        )}
      </div>
    </main>
  );
}
// color: new THREE.Color("#bb86a1").convertSRGBToLinear(),
const material = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color("#bb86a1").convertSRGBToLinear(),
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

function Model(props) {
  const group = useRef();
  const { nodes } = useGLTF("/pink-d.glb");
  return (
    <group
      ref={group}
      position={[6, -5, 6]}
      rotation={[0, -Math.PI, 0]}
      scale={4}
      {...props}
      dispose={null}
    >
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Sphere.geometry}
        scale={0.8}
        position={[1.2, 0.8, -5]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Sphere001.geometry}
        position={[6.49, 2, 8.58]}
        scale={[2, 2, 2]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Sphere001.geometry}
        position={[-16, 5, 17]}
        rotation={[-0.26, 0.04, -0.16]}
        scale={[5, 5, 5]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Sphere002.geometry}
        position={[-3.28, 3.4, 7.12]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Sphere003.geometry}
        position={[-8.13, 1.3, -3.95]}
        rotation={[-0.15, 0.01, -0.02]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Sphere004.geometry}
        position={[-19.36, 1.05, -2.05]}
        rotation={[0, 0, 0.64]}
        scale={[-1.33, -1.33, -1.33]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Sphere005.geometry}
        position={[-18.17, 0.94, -2.35]}
        scale={[0.87, 0.87, 0.87]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Torus.geometry}
        position={[14.36, 1.46, 0.73]}
        rotation={[Math.PI, 0.73, -2.64]}
        scale={[2, 2, 2]}
      />

      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Cone.geometry}
        position={[12.3, 1.91, -4.41]}
        scale={[1.86, 1.86, 1.86]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Cone001.geometry}
        position={[-4.82, 0.47, -5.51]}
        rotation={[2.14, 0, -0.58]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Cube.geometry}
        position={[-3.36, 1.2, 7.46]}
        rotation={[0, 0.42, 0]}
        scale={[1.2, 1.2, 1.2]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        scale={0.5}
        geometry={nodes.Cube001.geometry}
        position={[2.8, 1, -8.04]}
        rotation={[0, -0.23, 0]}
      />

      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Cylinder.geometry}
        position={[-12.3, 2.41, 1.53]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Cylinder001.geometry}
        scale={0.8}
        position={[-1.47, 0.8, -8.75]}
        rotation={[Math.PI / 2, 0, -1.87]}
        // scale={[1.55, 1.55, 1.55]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Cylinder002.geometry}
        position={[-1.15, 3.38, 14.39]}
        rotation={[0, Math.PI, 0]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Icosphere.geometry}
        position={[7.29, 0.6, -5.63]}
        scale={[0.64, 0.64, 0.64]}
      />
      <mesh
        receiveShadow
        castShadow
        material={material}
        geometry={nodes.Icosphere001.geometry}
        position={[13.26, 5, 15]}
        rotation={[-0.26, 0.04, -0.16]}
        scale={5}
      />
    </group>
  );
}

useGLTF.preload("/pink-d.glb");
