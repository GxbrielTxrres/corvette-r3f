import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HalfFloatType } from "three";
export default function Effects({ tl }) {
	const bloom = useRef();

	return (
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

			<SMAA />
		</EffectComposer>
	);
}
