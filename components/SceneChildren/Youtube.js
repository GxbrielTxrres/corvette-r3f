import { Html, Text } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { forwardRef, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { geometry } from "maath";

extend(geometry);
const Youtube = forwardRef((props, ref) => {
	const material = useRef();
	const position = [0.05, 0, 21];

	const [music, setMusic] = useState(true);

	return (
		<group>
			<mesh {...props} ref={ref}>
				<Html
					scale={0.4}
					geometry={<roundedPlaneGeometry args={[2, 2, 0.05]} />}
					// material={
					// 	<meshBasicMaterial color="blue" ref={material} />
					// }
					position={[position[0], -2.6, position[2] + 0.4]}
					transform
					occlude="blending"
				>
					<iframe
						width="200"
						height="200"
						src="https://www.youtube.com/embed/B2KfoyXG0P8"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</Html>
			</mesh>
		</group>
	);
});

{
	/* <Html
material={<meshBasicMaterial color="black" ref={material} />}
position={[0, 1.3, -3.5]}
transform
occlude="blending"
>
<iframe
	width="200"
	height="100"
	src="https://www.youtube.com/embed/B2KfoyXG0P8"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
></iframe>
</Html> */
}

Youtube.displayName = "Youtube";
export default Youtube;
