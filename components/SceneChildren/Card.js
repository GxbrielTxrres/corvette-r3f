import { Environment, MeshPortalMaterial, Text } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { easing, geometry } from "maath";
import { forwardRef, useRef, useState } from "react";
extend(geometry);

const Card = forwardRef(
	(
		{ color, children, goldenRatio = 1.61803398875, preset, ...otherProps },
		ref,
	) => {
		const portal = useRef();
		const mesh = useRef();

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
						<Environment
							background
							files={"./hdrs/moonless_golf_2k.hdr"}
						/>
						{children}
					</MeshPortalMaterial>
				</mesh>
			</group>
		);
	},
);

Card.displayName = "Card";
export default Card;
