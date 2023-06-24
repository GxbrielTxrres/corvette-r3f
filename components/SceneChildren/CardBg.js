import { shaderMaterial } from "@react-three/drei";
import { shaders } from "../shaders/Shaders";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
export default function CardBg({ sinScalar, positionZ }) {
	const material = useRef();
	//uniforms
	const uniforms = {
		time: 0,
		sinScalar: 5,
	};
	//update uniforms
	useFrame(({ clock }) => {
		material.current.uniforms.time.value = clock.elapsedTime * 0.5;
	});
	//width and height for mesh
	const { width, height } = useThree((state) => state.viewport);

	//shader
	const CardBackground = shaderMaterial(
		uniforms,
		shaders.vertexShader,
		shaders.fragmentShader,
	);
	extend({ CardBackground });
	return (
		<mesh scale={[width * 2, height * 2, 1]} position-z={positionZ}>
			<planeGeometry />
			<cardBackground ref={material} sinScalar={sinScalar} />
		</mesh>
	);
}
