import { Environment } from "@react-three/drei";

export default function Background({ preset, color }) {
	return (
		<>
			<Environment preset={preset} />
			<color attach="background" args={[color]} />
		</>
	);
}
