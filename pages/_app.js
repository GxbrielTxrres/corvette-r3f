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
import { ColorPicker } from "../components/ColorPicker";
export default function App({ Component, pageProps }) {
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
						minDistance={4}
						minPolarAngle={-Math.PI / 2}
						maxPolarAngle={Math.PI / 2}
						makeDefault
					/>
				)}
				<Stage
					shadows="StageShadows"
					adjustCamera={false}
					intensity={0.25}
					preset="portrait"
					environment="warehouse"
				>
					<Reflector />
					<Suspense fallback={null}>
						<ColorPicker viewCar={viewCar} />
					</Suspense>
				</Stage>
				<Lights />
			</Canvas>
			<Loader />
			<Component {...pageProps} />
		</div>
	);
}
