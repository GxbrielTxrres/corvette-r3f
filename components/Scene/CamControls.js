import { CameraControls } from "@react-three/drei";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
export default function CamControls({
	position = new Vector3(5.5, 0.25, 0),
	focus = new Vector3(0, 0, 0),
}) {
	const { controls } = useThree();
	useEffect(() => {
		controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
	});
	return (
		<CameraControls
			position={[10.5, 0, 0]}
			makeDefault
			minPolarAngle={0}
			maxPolarAngle={Math.PI / 2}
		/>
	);
}
