import { Box, Float, Sky, Stars, Text } from "@react-three/drei";

import Background from "./Scene/Background";
import CamControls from "./Scene/CamControls";
import Card from "./SceneChildren/Card";
import { Perf } from "r3f-perf";

import Ocean from "./SceneChildren/Water";
import Effects from "./Scene/Effects";
import { Saturn } from "./Models/Saturn";
import { Room } from "./Models/Room";
import Sunset from "./SceneChildren/Sunset";
export default function Experience() {
	const POSITIONSCALE = 1.72;
	return (
		<>
			<Perf />
			<Background preset="night" color={0xaaaaaa} />
			<Effects />
			<Room />
			<group rotation={[0, Math.PI / 2, 0]} position={[1, 0, 0]}>
				<Card
					position={[0, 0.7, -1]}
					preset="city"
					color="black"
					widthScalar={3.25}
				>
					<Stars fade speed={4} />
					<Float
						floatIntensity={4}
						rotationIntensity={4}
						speed={2}
						floatingRange={[-0.25, 0.25]}
					>
						<Saturn position={[0, 0, 0]} scale={0.001} />
					</Float>
				</Card>
				<Card
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
				</Card>
			</group>
			<CamControls />
		</>
	);
}
