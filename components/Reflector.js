import {
	MeshReflectorMaterial,
	MeshTransmissionMaterial,
} from "@react-three/drei";

export default function Reflector() {
	return (
		<>
			<mesh rotation-x={-Math.PI * 0.5}>
				<planeGeometry args={[50, 50]} />
				<MeshReflectorMaterial
					blur={[500, 300]}
					resolution={256}
					mixBlur={0.9}
					mixStrength={10}
					roughness={0.8}
					depthScale={2}
					minDepthThreshold={0.5}
					maxDepthThreshold={1}
					color="#050505"
					metalness={1}
					depthToBlurRatioBias={10}
					distortion={10}
					reflectorOffset={0.1}
				/>
				{/* <MeshTransmissionMaterial
					color="#ffffff"
					samples={1}
					distortion={0.5}
					distortionSpeed={0.5}
					distortionScale={0.2}
					resolution={32}
					chromaticAberration={1}
					temporalDistortion={0.3}
					ior={0.7}
				/> */}
			</mesh>
		</>
	);
}
