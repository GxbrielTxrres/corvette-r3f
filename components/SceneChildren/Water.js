import { Water } from "three-stdlib";
import { useRef, useMemo } from "react";
import { useThree, useFrame, extend } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping, PlaneGeometry, Vector3 } from "three";
extend({ Water });

export default function Ocean() {
	const ref = useRef();
	const gl = useThree((state) => state.gl);
	const waterNormals = useTexture("/waternormals.jpeg");
	waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping;
	const geom = useMemo(() => new PlaneGeometry(10000, 10000), []);
	const config = useMemo(
		() => ({
			textureWidth: 512,
			textureHeight: 512,
			waterNormals,
			sunDirection: new Vector3(),
			sunColor: 0xffffff,
			waterColor: 0x001e0f,
			distortionScale: 3.7,
			fog: false,
			format: gl.encoding,
		}),
		[waterNormals],
	);
	useFrame(
		(state, delta) =>
			(ref.current.material.uniforms.time.value += delta * 0.5),
	);
	return (
		<water
			position={[0, -10, 0]}
			ref={ref}
			args={[geom, config]}
			rotation-x={-Math.PI / 2}
		/>
	);
}
