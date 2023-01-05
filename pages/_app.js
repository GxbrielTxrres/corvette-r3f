import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Loader, Stage } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";
import { Model } from "../components/Corvette";
import Reflector from "../components/Reflector";
import Lights from "../components/Lights";
import { Suspense } from "react";
export default function App({ Component, pageProps }) {
	const { carColor, rimColor, tireColor, windowTint, tailPipes, trimColor } =
		useControls("Corvette", {
			carColor: "#000000",
			trimColor: "#000000",
			rimColor: "#000000",
			tireColor: "#000000",
			windowTint: "#000000",
			tailPipes: "#000000",
		});

	const { viewCar } = useControls({
		viewCar: { value: false },
	});

	return (
		<div className={styles.webgl}>
			<Leva />
			<Canvas camera={{ position: [null, 3, null] }} shadows>
				{viewCar && (
					<OrbitControls
						maxDistance={15}
						minDistance={8}
						minPolarAngle={-Math.PI / 2}
						maxPolarAngle={Math.PI / 2}
						makeDefault
						enablePan={false}
					/>
				)}
				<Stage
					shadows="StageShadows"
					adjustCamera={false}
					intensity={0.3}
					preset="upfront"
					environment="night"
				>
					<Reflector />
					<Suspense fallback={null}>
						<Model
							viewCar={viewCar}
							customColors={{
								carColor: carColor,
								rimColor: rimColor,
								tireColor: tireColor,
								windowTint: windowTint,
								tailPipes: tailPipes,
								trimColor: trimColor,
							}}
						/>
					</Suspense>
				</Stage>
				<Lights />
			</Canvas>
			<Loader />
			<Component {...pageProps} />
		</div>
	);
}
