import { MeshReflectorMaterial } from "@react-three/drei";

export default function Floor() {
	return (
		<mesh scale={20} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
			<planeGeometry />
			<MeshReflectorMaterial
				resolution={2048}
				color={"grey"}
				mixBlur={20}
				mixContrast={0.8}
				mixStrength={0.3}
			/>
		</mesh>
	);
}
