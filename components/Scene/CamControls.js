import { CameraControls } from "@react-three/drei";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
export default function CamControls({
	position = new Vector3(0, 0, 2),
	focus = new Vector3(0, 0, 0),
}) {
	const { controls, scene } = useThree();
	useEffect(() => {
		const active = scene.getObjectByName("Portal001");
		if (active) {
			active.parent.localToWorld(position.set(0, 3, 1));
			active.parent.localToWorld(focus.set(0, 0, -2));
		}
		controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
	});
	return (
		<CameraControls
			makeDefault
			minPolarAngle={0}
			maxPolarAngle={Math.PI / 2}
		/>
	);
}
