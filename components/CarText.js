import { Float, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { DoubleSide } from "three";
export function CarText(props) {
	return (
		<>
			<Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
				<Text
					position={[-2.5, 3, 2]}
					rotation-y={Math.PI / 2}
					font="/HussarBoldWeb-bf92.woff"
					fontSize={4}
				>
					Corvette
					<MeshTransmissionMaterial
						color={props.color}
						samples={10}
						distortion={10}
						distortionSpeed={0.5}
						distortionScale={2}
						resolution={128}
						chromaticAberration={3}
						temporalDistortion={0.5}
						ior={1.5}
						side={DoubleSide}
					/>
				</Text>
			</Float>
		</>
	);
}
