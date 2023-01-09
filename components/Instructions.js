import {
	MeshTransmissionMaterial,
	MeshWobbleMaterial,
	OrbitControls,
	SpotLight,
} from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import { DoubleSide } from "three";
import { useRef } from "react";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Instructions() {
	const [forward, setForward] = useState(true);
	const glass = useRef();

	const { camera, controls } = useThree();

	// const {
	// 	color,
	// 	samples,
	// 	distortion,
	// 	distortionScale,
	// 	distortionSpeed,
	// 	ior,
	// 	sheen,
	// 	specularIntensity,
	// 	specularColor,
	// 	thickness,
	// 	transmission,
	// 	attenuationColor,
	// 	sheenRoughness,
	// 	roughness,
	// 	metalness,
	// 	resolution,
	// 	reflectivity,
	// 	clearcoat,
	// 	clearcoatRoughness,
	// 	chromaticAberration,
	// 	sheenColor,
	// 	temporalDistortion,
	// } = useControls({
	// 	position: { value: { x: 0, y: 0, z: 0 }, step: 0.1 },
	// 	color: "#ffffff",
	// 	samples: 4,
	// 	distortionSpeed: 0.2,
	// 	ior: { value: 1.5, step: 0.1, max: 5 },
	// 	temporalDistortion: { value: 1, min: 0, max: 10, step: 0.01 },
	// 	sheen: { value: 1, min: 0, max: 1, step: 0.1 },
	// 	sheenColor: "#ffffff",
	// 	clearcoat: { value: 0, min: 0, max: 1, step: 0.1 },
	// 	thickness: { value: 10, min: 0, max: 25, step: 0.1 },
	// 	chromaticAberration: { value: 10, min: 0, max: 25, step: 0.1 },
	// });

	const { thickness } = useControls({
		thickness: { value: 2.5, min: 0, max: 25, step: 0.1 },
	});

	useEffect(() => {
		if (forward === false) {
			gsap.to(glass.current.scale, { x: 0, y: 0, z: 0, duration: 2 });
			gsap.to(glass.current.material, { opacity: 0, duration: 2 });
			gsap.to(camera.position, { x: 8, y: -3, z: 19, duration: 3 });
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
			<SpotLight color="yellow" position={[5, 18, 0]} />
			<OrbitControls
				target={[-2, -5, 2.3]}
				maxDistance={22}
				minDistance={8}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={-Math.PI / 2}
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
				<planeGeometry args={[40, 40, 100, 100]} />
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
					// color={color}
					// samples={samples}
					// distortion={distortion}
					// distortionSpeed={distortionSpeed}
					// distortionScale={distortionScale}
					// resolution={resolution}
					// reflectivity={reflectivity}
					// ior={ior}
					// clearcoat={clearcoat}
					// clearcoatRoughness={clearcoatRoughness}
					// chromaticAberration={chromaticAberration}
					// roughness={roughness}
					// metalness={metalness}
					// sheen={sheen}
					// specularIntensity={specularIntensity}
					// specularColor={specularColor}
					thickness={thickness}
					// transmission={transmission}
					// sheenColor={sheenColor}
					// sheenRoughness={sheenRoughness}
					// attenuationColor={attenuationColor}
					// temporalDistortion={temporalDistortion}
					// side={DoubleSide}
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
