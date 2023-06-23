import {
	CameraShake,
	Environment,
	Float,
	MeshPortalMaterial,
	OrbitControls,
	Text,
} from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { easing, geometry } from "maath";
import {
	forwardRef,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { DoubleSide } from "three";
import { useThree } from "@react-three/fiber";
import { config } from "../styles/styles";
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
		jef,
	) => {
		const portal = useRef();
		const [active, setActive] = useState();
		console.log(portal.current);
		useFrame((state, delta) => {
			easing.damp(portal.current, "blend", active ? 1 : 0, 0.2, delta);
		});

		return (
			<Float>
				<group>
					<mesh
						onClick={() => setActive(true)}
						rotation-y={rotationY}
						position={position}
					>
						<roundedPlaneGeometry args={[1, goldenRatio, 0.1]} />

						<MeshPortalMaterial ref={portal}>
							{active && (
								<Text
									color="yellow"
									position-z={-10}
									onClick={() => setActive(false)}
								>
									Home
								</Text>
							)}
							<color attach="background" args={[color]} />
							<Environment preset={preset} />
							{active && <CameraShake {...config} />}
							{children}
						</MeshPortalMaterial>
					</mesh>
				</group>
			</Float>
		);
	},
);

Card.displayName = "Card";
export default Card;
