import { useMatcapTexture } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ExplosionConfetti from "./Confetti";
import NumberLotto from "./NumberLotto";

export default function Cylinder({ props, minTime, maxTime, confetti }) {
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
    const minTimeMilisec = minTime;
    const rangeTimeMilisec = maxTime;
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
      rollLotto((mouse.x - prevMouseX) * 1);
      setPrevMouseX(mouse.x);
    }
  };

  const handlePointerUp = (event) => {
    setIsDragging(false);
  };

  return (
    <>
      <group position={props.position} ref={refGroup}>
        {confetti && (
          <ExplosionConfetti
            rate={3}
            fallingHeight={9}
            amount={50}
            enableShadows={false}
            isExploding={isAnimating && power == 0}
          />
        )}
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
