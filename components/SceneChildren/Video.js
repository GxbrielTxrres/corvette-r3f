import { useTexture, useVideoTexture } from "@react-three/drei";
import { forwardRef } from "react";
import { DoubleSide } from "three";
import { Model } from "../Models/Humans";
import Youtube from "./Youtube";

const Video = forwardRef(function Sun(props, forwardRef) {
	const texture = useVideoTexture("./sunsett.mp4");
	return (
		<mesh
			position-x={-4}
			position-y={0.7}
			ref={forwardRef}
			rotation-y={Math.PI / 2}
		>
			<mesh scale={[8, 4, 0.5]}>
				<planeGeometry />
				<meshBasicMaterial
					map={texture}
					color={"#ffffff"}
					toneMapped={false}
				/>
			</mesh>
		</mesh>
	);
});

export default Video;
