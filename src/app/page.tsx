"use client";
import {
  CameraShake,
  Environment,
  OrbitControls,
  Reflector,
  Text3D,
  useGLTF,
  useMatcapTexture,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

RectAreaLightUniformsLib.init();
// import Image from 'next/image'

export default function Home() {
  const [windowHeight, setWindowHeight] = useState();
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#000]">
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
                <ModelReflector position={[0, 0, 0]} rotation={[0, 0, 0]} />
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
                {/* <Light /> */}
                {/* <Environment preset="warehouse" /> */}
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
              {/* 
            enableZoom={false} enablePan={true}
            minAzimuthAngle={-Math.PI * 2.05}
              maxAzimuthAngle={-Math.PI * 1.95}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2.1} */}
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
function ModelReflector(props) {
  const group = useRef();
  // const { nodes } = useGLTF("/pink-d.glb");
  return (
    <group ref={group} {...props} dispose={null}>
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
      <Cylinder position={[-2, 6, 0]} color={"white"} />
      <Cylinder position={[-28, 6, 0]} color={"white"} />
      <Cylinder position={[24, 6, 0]} color={"white"} />
    </group>
  );
}

function Cylinder(props) {
  const ref = useRef();
  const refGroup = useRef();
  const [glassMat] = useMatcapTexture("3B3C3F_DAD9D5_929290_ABACA8");
  const [matcapTexture] = useMatcapTexture("3B3C3F_DAD9D5_929290_ABACA8");
  // const [hovered, hover] = useState(false)
  // const [clicked, click] = useState(false)
  const colorMap = useLoader(THREE.TextureLoader, "lotto.jpg");
  const [rotate, setRotate] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lottoNumber, setLottoNumber] = useState("");
  const [power, setPower] = useState(0);
  const { mouse } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouseX, setPrevMouseX] = useState(0);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * power * 2;
    const oneBlock = (Math.PI * 2) / 10;
    const halfBlock = oneBlock / 2;
    const offSet = 1.9 * Math.PI;
    const blockMove = (ref.current.rotation.y - offSet) % oneBlock;

    if (power <= 0) {
      if (halfBlock > blockMove) {
        const shiftPosition2 = oneBlock - blockMove - offSet / 10;
        ref.current.rotation.y += shiftPosition2 * delta;
      } else {
        const shiftPosition1 = blockMove - offSet / 10;
        ref.current.rotation.y -= shiftPosition1 * delta;
      }

      // setIsAnimating(false);
      // setLottoNumber("-");
    }
    if (isAnimating) {
      const array = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
      const _lottoNumber = Math.round(
        ((ref.current.rotation.y - offSet) % (2 * Math.PI)) / oneBlock
      );
      setLottoNumber(array[_lottoNumber]);
    }
    // if (!isAnimating) {

    // }
  });
  const intervalRef = useRef(null);
  useEffect(() => {
    if (power <= 0 && isAnimating) {
      setPower(0);
      setIsAnimating(true);
      clearInterval(intervalRef);
    }
  }, [power, intervalRef, isAnimating]);
  let interval = 0;
  let random = 0;
  const rollLotto = (speedWithMouse) => {
    // 3000 - 6000
    const minTimeMilisec = 2000;
    const rangeTimeMilisec = 5000;
    const milisec =
      Math.floor(minTimeMilisec + Math.random() * rangeTimeMilisec) +
      speedWithMouse;
    random = 0;
    // const milisec = 1500;
    setIsAnimating(true);
    setPower(milisec / 1000);

    interval += milisec;

    // console.log(interval);
    if (intervalRef.current) {
      // interval = random;
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      interval -= 50;
      const speed = interval / 1000;
      setPower(speed);
      if (interval <= 0) {
        interval = random;
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }, 50);
  };

  const handlePointerDown = (event) => {
    setIsDragging(true);
    setPrevMouseX(mouse.x);
  };

  const handlePointerMove = (event) => {
    if (isDragging) {
      rollLotto((mouse.x - prevMouseX) * 100);
      setPrevMouseX(mouse.x);
    }
  };

  const handlePointerUp = (event) => {
    setIsDragging(false);
  };

  return (
    <>
      <group position={props.position} ref={refGroup}>
        <NumberLotto lotto={lottoNumber} />
        {/* Lotto */}
        <mesh
          rotation={[0, 1.9 * Math.PI, 0]}
          position={[-2, 2, 0]}
          ref={ref}
          scale={1}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerOut={handlePointerUp}
          // onClick={(event) => {
          //   handleClick();
          // }}
          // onPointerOver={(event) => hover(true)}
          // onPointerOut={(event) => hover(false)}
        >
          <cylinderGeometry openEnded={false} args={[10, 10, 10, 360]} />
          {/* <meshStandardMaterial color={props.color} /> */}
          <meshStandardMaterial map={colorMap} />
        </mesh>
        {/* Glass */}
        <mesh
          rotation={[0, 0, 0]}
          position={[-2, 2, 0]}
          scale={1.1}
          opacity={0.5}
        >
          <cylinderGeometry openEnded={false} args={[10, 10, 10, 360]} />
          <meshMatcapMaterial
            opacity={0.6}
            transparent
            color="white"
            matcap={glassMat}
          />
        </mesh>
        {/* Glass Top */}
        <mesh
          rotation={[0, 0, 0]}
          position={[-2, 14, 0]}
          scale={1.1}
          opacity={1}
        >
          <cylinderGeometry openEnded={false} args={[6, 10, 16, 360]} />
          <meshMatcapMaterial
            opacity={0.1}
            transparent
            color="white"
            matcap={glassMat}
          />
        </mesh>
        {/* Base box top */}
        <mesh
          rotation={[0, 0, 0]}
          position={[-2, 23, 0]}
          scale={1}
          opacity={0.5}
        >
          <cylinderGeometry openEnded={false} args={[7, 7, 1, 360]} />
          <meshMatcapMaterial
            opacity={1}
            transparent
            color="white"
            matcap={matcapTexture}
          />
        </mesh>
        {/* Base box */}
        <mesh
          rotation={[0, 0, 0]}
          position={[-2, 8, 0]}
          scale={1.2}
          opacity={0.5}
        >
          <cylinderGeometry openEnded={false} args={[10, 10, 2, 360]} />
          <meshMatcapMaterial
            opacity={1}
            transparent
            color="white"
            matcap={matcapTexture}
          />
        </mesh>
        <mesh
          rotation={[0, 0, 0]}
          position={[-2, -4, 0]}
          scale={1.2}
          opacity={0.5}
        >
          <cylinderGeometry openEnded={false} args={[10, 10, 2, 360]} />
          <meshMatcapMaterial
            opacity={1}
            transparent
            color="white"
            matcap={matcapTexture}
          />
        </mesh>
        {/* pole */}
        <mesh
          rotation={[0, 0, 0]}
          position={[-2, -8, 0]}
          scale={1}
          opacity={0.5}
        >
          <cylinderGeometry openEnded={false} args={[5, 5, 6, 360]} />
          <meshMatcapMaterial
            opacity={1}
            transparent
            color="white"
            matcap={matcapTexture}
          />
        </mesh>

        {/* Marker */}
        <mesh position={[-5, 2, 11]} scale={1}>
          <cylinderGeometry openEnded={false} args={[0.2, 0.2, 12, 360]} />
          <meshMatcapMaterial
            opacity={0.5}
            transparent
            color="red"
            matcap={matcapTexture}
          />
        </mesh>
        <mesh position={[1, 2, 11]} scale={1}>
          <cylinderGeometry openEnded={false} args={[0.2, 0.2, 12, 360]} />
          <meshMatcapMaterial
            opacity={0.5}
            transparent
            color="red"
            matcap={matcapTexture}
          />
        </mesh>
      </group>
    </>
  );
}

function Light() {
  const ref = useRef();
  useFrame((_) => (ref.current.rotation.x = _.clock.elapsedTime));
  return (
    <group ref={ref}>
      <rectAreaLight
        width={15}
        height={100}
        position={[30, 30, -10]}
        intensity={5}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </group>
  );
}

function Rig() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 50, 95), 0.05);
  });
  return (
    <CameraShake
      maxYaw={0}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.04}
    />
  );
}

function NumberLotto({ lotto }) {
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

function Hero() {
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

useGLTF.preload("/pink-d.glb");
