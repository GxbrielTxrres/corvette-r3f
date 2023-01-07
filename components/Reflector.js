import { MeshReflectorMaterial } from "@react-three/drei";

export default function Reflector() {
	return (
		<>
			<mesh rotation-x={-Math.PI * 0.5}>
				<planeGeometry args={[50, 50]} />
				<MeshReflectorMaterial
					blur={[300, 100]}
					resolution={1024}
					mixBlur={0.3}
					mixStrength={150}
					roughness={1}
					depthScale={1.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.2}
					color="#050505"
					metalness={0.5}
				/>
			</mesh>
		</>
	);
}
