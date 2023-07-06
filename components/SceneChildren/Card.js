import { Environment, MeshPortalMaterial, Text } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { easing, geometry } from "maath";
import { forwardRef, useLayoutEffect, useRef, useState } from "react";
extend(geometry);

const Card = forwardRef(
	(
		{
			color,
			children,
			goldenRatio = 1.61803398875,
			preset,
			tl,
			...otherProps
		},
		ref,
	) => {
		const portal = useRef();
		const mesh = useRef();

		useLayoutEffect(() => {
			if (tl) {
				tl.to(
					portal.current.uniforms.blend,
					{
						value: 1,
						duration: 0.1,
						ease: "power2.inOut",
					},
					9.49,
				);
			}

			console.log(portal.current);
		}, [tl]);

		return (
			<group>
				<mesh
					ref={mesh}
					onClick={() =>
						window.open("https://twitter.com/DeveloperGT")
					}
					{...otherProps}
				>
					<roundedPlaneGeometry
						args={[2.2, goldenRatio * 2.5, 0.05]}
					/>

					<MeshPortalMaterial ref={portal}>
						<color attach="background" args={[color]} />
						<Environment files={"./hdrs/moonless_golf_2k.hdr"} />
						{children}
					</MeshPortalMaterial>
				</mesh>
			</group>
		);
	},
);

Card.displayName = "Card";
export default Card;
