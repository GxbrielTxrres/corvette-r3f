import {
	Bloom,
	EffectComposer,
	GodRays,
	N8AO,
	SMAA,
} from "@react-three/postprocessing";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HalfFloatType, SRGBColorSpace } from "three";
import Video from "../SceneChildren/Video";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { gsap } from "gsap";
import Youtube from "../SceneChildren/Youtube";
export default function Effects({ video }) {
	const bloom = useRef();
	const rays = useRef();
	const [material, set] = useState();

	// useLayoutEffect(() => {
	// 	if (rays.current) {
	// 		rays.current.inputColorSpace = SRGBColorSpace;
	// 	}
	// }, []);

	// useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		if (rays.current) {
	// 			gsap.to(rays.current.godRaysMaterial.uniforms.decay, {
	// 				value: 0.95,
	// 				duration: 1.2,
	// 				ease: "sine.out",
	// 			});

	// 			gsap.to(rays.current.godRaysMaterial.uniforms.exposure, {
	// 				value: 0.2,
	// 				duration: 1.2,
	// 				ease: "slow (0.7,0.7,false)",
	// 			});
	// 		}
	// 	}, 10);

	// 	return () => clearTimeout(timeout);
	// }, []);

	// useFrame((state, delta) => {
	// 	if (material && rays) {
	// 		if (material.material.map.source.data.currentTime > 5.7) {
	// 			rays.current.godRaysMaterial.uniforms.decay.value = 0.95;
	// 			rays.current.godRaysMaterial.uniforms.exposure.value = 0.2;
	// 		} else {
	// 			rays.current.godRaysMaterial.uniforms.decay.value = 0.9;
	// 			rays.current.godRaysMaterial.uniforms.exposure.value = 0.4;
	// 		}
	// 	}
	// });

	return (
		<>
			{video ? <Video ref={set} /> : <Youtube ref={set} />}
			{material && (
				<EffectComposer
					multisampling={0}
					frameBufferType={HalfFloatType}
					disableNormalPass
				>
					<Bloom
						ref={bloom}
						mipmapBlur
						intensity={1}
						radius={0.5}
						levels={3}
						luminanceThreshold={0}
					/>
					<GodRays
						ref={rays}
						sun={material}
						samples={120}
						decay={0.95}
						// density={0.9}
						// decay={0.96}
						// weight={0.4}
						exposure={0.2}
						// clampMax={1}

						blur
					/>
					<SMAA />
				</EffectComposer>
			)}
		</>
	);
}
