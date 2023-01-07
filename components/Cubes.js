import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
export function Cube() {
	const ref = useRef();
	const ref2 = useRef();
	useFrame(({ clock }) => {
		const elapsedTime = clock.elapsedTime;
		ref.current.rotation.x = Math.sin(elapsedTime * 0.5);
		ref.current.rotation.z = Math.cos(elapsedTime * 0.5);
		ref.current.position.y = 1 + Math.sin(elapsedTime) * 3;
		ref.current.position.x = 1 + Math.cos(elapsedTime) * 3;
		ref2.current.rotation.x = Math.cos(elapsedTime);
		ref2.current.rotation.z = Math.sin(elapsedTime);
		ref2.current.position.y =
			1 + Math.cos(elapsedTime) * 3 + Math.sin(elapsedTime) * 2;
		ref2.current.position.x = 1 + Math.sin(elapsedTime) * 3;
	});
	return (
		<>
			<mesh position={[-3, 3, -15]} ref={ref}>
				<boxGeometry args={[2, 2, 2]} />
				<meshStandardMaterial color="#00AAFF" />
			</mesh>
			<mesh position={[-3, 3, -15]} ref={ref2}>
				<boxGeometry args={[2, 2, 2]} />
				<meshStandardMaterial color="#00AAFF" />
			</mesh>
		</>
	);
}
