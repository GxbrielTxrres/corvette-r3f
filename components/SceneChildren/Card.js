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
import { config } from "../../styles/styles";
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
			widthScalar = 1,
		},
		ref,
	) => {
		const portal = useRef();
		const mesh = useRef();

		const [active, setActive] = useState();

		useFrame((state, delta) => {
			easing.damp(portal.current, "blend", active ? 1 : 0, 0.2, delta);

			// mesh.current.position.x = negative
			// 	? -Math.abs(Math.sin(state.clock.elapsedTime * 0.25) * 3.5) +
			// 	  0.5
			// 	: Math.abs(Math.sin(state.clock.elapsedTime * 0.25) * 3.5) -
			// 	  2.5;
		});

		return (
			<group>
				<mesh
					ref={mesh}
					onClick={() => setActive(true)}
					rotation-y={rotationY}
					position={position}
				>
					<roundedPlaneGeometry
						args={[1.52 * widthScalar, goldenRatio * 2.5, 0.05]}
					/>

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
						{/* {active && <CameraShake {...config} />} */}
						{children}
					</MeshPortalMaterial>
				</mesh>
			</group>
		);
	},
);

Card.displayName = "Card";
export default Card;
