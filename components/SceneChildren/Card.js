import { Environment, MeshPortalMaterial, Text } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { easing, geometry } from "maath";
import { forwardRef, useRef, useState } from "react";
extend(geometry);

const Card = forwardRef(
	(
		{
			position,
			color,
			children,
			rotationY,
			goldenRatio = 1.61803398875,
			preset,
		},
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
					rotation-y={rotationY}
					position={position}
				>
					<roundedPlaneGeometry
						args={[2.2, goldenRatio * 2.5, 0.05]}
					/>

					<MeshPortalMaterial ref={portal}>
						<color attach="background" args={[color]} />
						<Environment preset={preset} />
						{children}
					</MeshPortalMaterial>
				</mesh>
			</group>
		);
	},
);

Card.displayName = "Card";
export default Card;
