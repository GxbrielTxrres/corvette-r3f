import { Stars, Text, useVideoTexture } from "@react-three/drei";

import Background from "./Scene/Background";
import CamControls from "./Scene/CamControls";
import Card from "./SceneChildren/Card";
import { Perf } from "r3f-perf";

import Ocean from "./SceneChildren/Water";
import Effects from "./Scene/Effects";
import { Room } from "./Models/Room";
import Sunset from "./SceneChildren/Sunset";
import { useRef } from "react";
import { Model } from "./Models/Humans";
export default function Experience() {
	const godRay = useRef();
	return (
		<>
			<Perf />
			<Background preset="night" color={0xaaaaaa} />
			<Effects sun={godRay} />
			<Room />
			<group rotation={[0, Math.PI / 2, 0]} position={[1, 0, 0]}>
				<Card
					position={[-4.3, 0.7, -0.1]}
					rotationY={Math.PI / 2}
					preset="city"
					color="black"
				>
					<Stars fade speed={4} />
					<group position-y={0.5}></group>
				</Card>
				{/* <Card
					position={[-POSITIONSCALE * 2, 0.7, -1]}
					color="black"
					preset="city"
				>
					<Ocean />
					<Sunset />
				</Card>

				<Card
					position={[POSITIONSCALE * 2, 0.7, -1]}
					color="black"
					preset="city"
				>
					<Sunset opposite={true} />
					<Ocean />
				</Card> */}

				<Card
					rotationY={-Math.PI / 2}
					position={[4.3, 0.7, -0.1]}
					color="black"
					preset="city"
				>
					<Sunset opposite={true} />
					<Ocean />
					<group position-y={0.5}>
						<Text position-z={-0.2} position-x={-0.2} scale={0.2}>
							Twitter
						</Text>
						<Text
							position-z={-0.2}
							position-x={-0.2}
							position-y={-0.4}
							scale={0.2}
						>
							@GTDevelops
						</Text>
					</group>
				</Card>
			</group>
			<CamControls />
		</>
	);
}
