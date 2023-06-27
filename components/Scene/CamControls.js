import { CameraControls } from "@react-three/drei";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect } from "react";
export default function CamControls({
	position = new Vector3(5.5, 0.25, 0),
	focus = new Vector3(0, 0, 0),
}) {
	const { controls, camera } = useThree();
	const { width } = useThree((state) => state.viewport);
	useEffect(() => {
		controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
	});

	// useLayoutEffect(() => {
	// 	camera.fov = 100;
	// 	camera.updateProjectionMatrix();
	// }, [width]);
	return (
		<CameraControls
			position={[10.5, 0, 0]}
			makeDefault
			minPolarAngle={Math.PI / 2.5}
			maxPolarAngle={Math.PI / 2.1}
			minAzimuthAngle={0.9}
			maxAzimuthAngle={2.2}
			minDistance={2}
			maxDistance={8}
		/>
	);
}
