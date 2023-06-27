import {
	Bloom,
	EffectComposer,
	GodRays,
	SMAA,
} from "@react-three/postprocessing";
import { useLayoutEffect, useRef, useState } from "react";
import { HalfFloatType, SRGBColorSpace } from "three";
import Video from "../SceneChildren/Video";
import { useFrame } from "@react-three/fiber";
export default function Effects() {
	const bloom = useRef();
	const rays = useRef();
	const [material, set] = useState();

	useLayoutEffect(() => {
		if (rays.current) {
			console.log(rays.current.godRaysMaterial.uniforms);
			rays.current.inputColorSpace = SRGBColorSpace;
		}
	}, []);
	useFrame(() => {
		if (material && rays) {
			if (material.material.map.source.data.currentTime > 5) {
				rays.current.godRaysMaterial.uniforms.decay.value = 0.7;
				rays.current.godRaysMaterial.uniforms.exposure.value = 0.8;
			} else {
				rays.current.godRaysMaterial.uniforms.decay.value = 0.9;
				rays.current.godRaysMaterial.uniforms.exposure.value = 0.9;
			}
		}
	});

	return (
		<>
			<Video ref={set} />
			{material && (
				<EffectComposer
					multisampling={0}
					frameBufferType={HalfFloatType}
					disableNormalPass
				>
					<Bloom
						ref={bloom}
						mipmapBlur
						intensity={0.4}
						radius={0.2}
						levels={3}
						luminanceThreshold={0}
					/>
					<GodRays
						ref={rays}
						sun={material}
						samples={30}
						// density={0.9}
						// decay={0.96}
						// weight={0.9}
						// exposure={0.4}
						// clampMax={1}
						exposure={1}
						decay={0.9}
						blur
					/>
					<SMAA />
				</EffectComposer>
			)}
		</>
	);
}
