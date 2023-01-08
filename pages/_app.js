import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import { Text, Loader, Stage } from "@react-three/drei";
import Reflector from "../components/Reflector";
import { Suspense } from "react";
import { ColorPicker } from "../components/ColorPicker";
import Instructions from "../components/Instructions";
export default function App({ Component, pageProps }) {
	return (
		<div className={styles.webgl}>
			<Canvas camera={{ position: [2.21, 13.15, 0.85] }} shadows>
				<color attach="background" args={["#0f0f0f"]} />

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
					<Instructions />
				</Stage>
			</Canvas>
			<Loader />
			<Component {...pageProps} />
		</div>
	);
}
