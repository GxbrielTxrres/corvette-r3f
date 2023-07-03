import { useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
export default function Overlay() {
	const { width, height } = useThree((state) => state.viewport);
	return (
		<mesh scale={[width, height, 1]} rotation-y={Math.PI / 2}>
			<planeGeometry />
			<MeshTransmissionMaterial
				samples={16}
				resolution={512}
				anisotropy={1}
				thickness={0.1}
				roughness={0.4}
				toneMapped={true}
			/>
		</mesh>
	);
}
