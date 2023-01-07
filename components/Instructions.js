import { MeshTransmissionMaterial } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { useState } from "react";
import { DoubleSide } from "three";
import { useRef } from "react";
export default function Instructions(props) {
	const [occluded, occlude] = useState();
	const ref = useRef();

	return (
		<>
			<mesh position={[-1, 7.5, -10]}>
				<planeGeometry args={[20, 15, 100, 100]} />
				<MeshTransmissionMaterial
					color="#ffffff"
					samples={9}
					distortion={10}
					distortionSpeed={0.5}
					distortionScale={2}
					resolution={128}
					chromaticAberration={3}
					temporalDistortion={0.5}
					ior={1.5}
					side={DoubleSide}
				/>
				<Html
					ref={ref}
					position-z={0.1}
					transform
					occlude="blending"
					onOcclude={occlude}
					// We just interpolate the visible state into css opacity and transforms
					style={{
						transition: "all 0.2s",
						opacity: occluded ? 0 : 1,
						transform: `scale(${occluded ? 0.25 : 1})`,
					}}
				>
					<div
						style={{
							textAlign: "center",
							fontSize: "24px",
							color: "white",
							transition: "all 0.2s",
							opacity: props.clicked ? 0 : 1,
						}}
					>
						Click/Tap the car to change the color.
					</div>
					<iframe
						width={750}
						height={500}
						src="https://threejs.org/"
					/>
				</Html>
			</mesh>
		</>
	);
}
