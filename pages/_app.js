import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";
import { styles } from "../styles/styles";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Canvas gl={{ antialias: false }} style={{ ...styles }}>
				<Experience />
			</Canvas>
			<Component {...pageProps} />
		</>
	);
}
