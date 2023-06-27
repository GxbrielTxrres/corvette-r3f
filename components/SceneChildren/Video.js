import { useTexture, useVideoTexture } from "@react-three/drei";
import { forwardRef } from "react";

const Video = forwardRef(function Sun(props, forwardRef) {
	const texture = useVideoTexture("./both.mp4");
	return (
		<mesh
			position-x={0.1}
			position-y={0.65}
			scale={[8.5, 4.2, 1]}
			ref={forwardRef}
			rotation-y={Math.PI / 2}
		>
			<planeGeometry />
			<meshBasicMaterial map={texture} color={"#ffffff"} />
		</mesh>
	);
});

export default Video;
