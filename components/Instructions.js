import {
	Float,
	MeshTransmissionMaterial,
	MeshWobbleMaterial,
	OrbitControls,
} from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import { DoubleSide } from "three";
import { useRef } from "react";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

export default function Instructions() {
	const [forward, setForward] = useState(true);
	const glass = useRef();

	const { camera, controls } = useThree();

	useEffect(() => {
		if (forward === false) {
			gsap.to(glass.current.scale, { x: 0, y: 0, z: 0, duration: 2 });
			gsap.to(glass.current.material, { opacity: 0, duration: 2 });
			gsap.to(camera.position, { x: 5, y: -6.65, z: 21, duration: 3 });
		} else {
			gsap.fromTo(
				glass.current.material,
				{ distortion: 1 },
				{ distortion: 100, duration: 10, yoyo: true, repeat: -1 },
			);

			gsap.fromTo(
				glass.current.material.color,
				{ ease: "linear", r: 0.25, g: 0.25, b: 0 },
				{
					ease: "linear",
					r: 1,
					g: 0.5,
					b: 0.5,
					duration: 5,
					yoyo: true,
					repeat: -1,
				},
			);
			gsap.to(glass.current.material, { opacity: 1 });
		}
	});

	return (
		<>
			<OrbitControls
				target={[-2, -5, 2.3]}
				maxDistance={22}
				minDistance={8}
				makeDefault
				onEnd={() => {
					console.log(controls.target, camera.position);
				}}
			/>
			<mesh
				ref={glass}
				position={[0, 15, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
			>
				<planeGeometry args={[20, 20, 100, 100]} />
				<MeshTransmissionMaterial
					transparent={true}
					color="#ffffff"
					samples={4}
					distortion={1}
					distortionSpeed={0.2}
					distortionScale={0.5}
					resolution={128}
					chromaticAberration={1}
					temporalDistortion={1}
					ior={1.5}
					side={DoubleSide}
				/>

				<Text
					color="white"
					font="/HussarBoldWeb-bf92.woff"
					fontSize={0.4}
					fillOpacity={forward ? 1 : 0}
					onPointerDown={() => {
						setForward(!forward);
					}}
					position={[-1.25, -2, 3]}
					rotation-z={Math.PI / 3}
					rotation-x={Math.PI / 3}
					rotation-y={Math.PI / 4}
				>
					Customize Car
					<MeshWobbleMaterial factor={0.5} speed={0.75} />
				</Text>

				<Text
					color="white"
					font="/HussarBoldWeb-bf92.woff"
					fontSize={0.25}
					fillOpacity={forward ? 1 : 0}
					onPointerDown={() => {
						setForward(!forward);
					}}
					position={[3, -0.2, 1.5]}
					rotation-z={Math.PI / 1.5}
					rotation-x={Math.PI / 4}
				>
					Customize Background
					<MeshWobbleMaterial factor={0.36} speed={0.8} />
				</Text>
			</mesh>
		</>
	);
}
