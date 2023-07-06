import {
	CameraControls,
	OrbitControls,
	PerspectiveCamera,
} from "@react-three/drei";
import { Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
export default function CamControls({
	position = new Vector3(3.52, 0.6, 0),
	focus = new Vector3(0, 0.2, 0),
	tl,
}) {
	// const { camera } = useThree();
	const control = useRef();
	const { width } = useThree((state) => state.viewport);
	useEffect(() => {
		gsap.to(control.current.object.position, {
			x: position.x,
			y: position.y,
			z: position.z + 0.2,
			duration: 2.5,
			ease: "sine.out",
		});
	}, []);

	useLayoutEffect(() => {
		const camera = control.current.object;
		console.log(camera);
		if (tl) {
			tl.to(
				camera.position,
				{
					y: 4,
					duration: 3,
					ease: "sine.out",
				},
				0.5,
			);

			tl.to(
				camera.position,
				{
					x: -2,
					duration: 3,
					ease: "power3.in",
				},
				1.5,
			);

			tl.to(
				camera.position,
				{
					y: 0,
					duration: 3,
					ease: "power3.out",
				},
				4.5,
			);

			tl.to(
				control.current.target,
				{
					y: 0.3,
					x: 10,
					ease: "power3.inOut",
					duration: 4,
				},
				2.5,
			);

			//animation 2
			tl.to(
				camera.position,
				{
					x: 2.87,
					y: 0.3,
					z: 0,
					duration: 2,
					ease: "power2.inOut",
				},
				7.5,
			);

			tl.to(
				camera.position,
				{
					x: 2,
					duration: 1.75,
					ease: "power2.in",
				},
				9.5,
			);

			tl.to(
				camera.position,
				{
					y: 1.1,
					duration: 1,
					ease: "sine.out",
				},
				10.25,
			);

			tl.to(
				control.current.target,
				{
					y: -2,
					duration: 1.5,
					ease: "power2.out",
				},
				10.15,
			);
		}
	}, [tl]);

	// {
	// 	"target": {
	// 		"x": -0.009257348287887351,
	// 		"y": 0.4670134225044014,
	// 		"z": 0.030962363516976572
	// 	},
	// 	"position": {
	// 		"x": 3.7991562261473435,
	// 		"y": 0.6255994250897903,
	// 		"z": -0.3910109224357863
	// 	},
	// 	"rotation": {
	// 		"isEuler": true,
	// 		"_x": -2.7821032683997253,
	// 		"_y": 1.4529778424521063,
	// 		"_z": 2.784388178428822,
	// 		"_order": "XYZ"
	// 	}
	// }

	// useLayoutEffect(() => {
	// 	camera.fov = 100;
	// 	camera.updateProjectionMatrix();
	// }, [width]);
	return (
		<OrbitControls
			makeDefault
			ref={control}
			enableZoom={false}
			enablePan={false}
			enableRotate={false}
		/>
	);
}
