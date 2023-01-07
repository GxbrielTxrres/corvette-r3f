import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Loader, Stage } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import Reflector from "../components/Reflector";
import Lights from "../components/Lights";
import { Suspense } from "react";
import { ColorPicker } from "../components/ColorPicker";
export default function App({ Component, pageProps }) {
	return (
		<div className={styles.webgl}>
			<Canvas camera={{ position: [3, 3, 18] }} shadows>
				<OrbitControls
					target={[-2, 2, 1]}
					maxDistance={20}
					minDistance={8}
					minPolarAngle={-Math.PI / 2}
					maxPolarAngle={Math.PI / 2}
					makeDefault
				/>

				<Stage
					shadows="StageShadows"
					adjustCamera={false}
					intensity={0.25}
					preset="portrait"
					environment="warehouse"
				>
					<Reflector />
					<Suspense
						fallback={
							<Text
								rotation-y={Math.PI / 2}
								font="/HussarBoldWeb-bf92.woff"
								fontSize={4}
								color="#787878"
								fillOpacity={0.5}
								strokeOpacity={0.5}
							>
								Corvette
							</Text>
						}
					>
						<ColorPicker />
					</Suspense>
				</Stage>
				<Lights />
			</Canvas>
			<Loader />
			<Component {...pageProps} />
		</div>
	);
}
