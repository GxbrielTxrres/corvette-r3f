import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";
import { styles } from "../styles/styles";
import Scene from "../components/Scene";
import { Preload, ScrollControls } from "@react-three/drei";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas
				gl={{ antialias: false }}
				shadows
				style={{ ...styles }}
				camera={{ position: [3.5, -2.5, 0] }}
			>
				{/* <Experience /> */}

				<ScrollControls pages={2} distance={0.5} maxSpeed={0.5}>
					<Scene />
					<Preload all />
				</ScrollControls>
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
