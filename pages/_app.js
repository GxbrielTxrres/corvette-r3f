import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";
import { styles } from "../styles/styles";
import Scene from "../components/Scene";
import { Preload, ScrollControls } from "@react-three/drei";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas gl={{ antialias: false }} shadows style={{ ...styles }}>
				{/* <Experience /> */}

				<ScrollControls
					pages={2}
					distance={2}
					damping={0.3}
					maxSpeed={0.4}
				>
					<Scene />
					<Preload all />
				</ScrollControls>
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
