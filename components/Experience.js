import { Box, Float, Sky, Stars } from "@react-three/drei";

import Background from "./Scene/Background";
import CamControls from "./Scene/CamControls";
import Card from "./Card";
import { Perf } from "r3f-perf";

import GradientShader from "./GradientShader";
import Ocean from "./Water";
import Effects from "./Scene/Effects";
import { Model } from "./Saturn";
export default function Experience() {
	return (
		<>
			<Perf />
			<Background preset="night" color={0xaaaaaa} />
			<Effects />
			{/* <GradientShader sinScalar={0.9} /> */}
			{/* <MagicBox /> */}
			<group position={[1, 0, 0]}>
				<Card position={[-1, 0, 0]} preset="city" color="black">
					<Stars fade />
					<Model position={[0, 0, 0]} scale={0.001} />
				</Card>
				<Card position={[-2.5, 0, 0]} color="black" preset="city">
					<ambientLight intensity={0.5} />
					<Ocean />
					<Sky
						scale={1000}
						sunPosition={[-850, 150, -1000]}
						turbidity={0.3}
						rayleigh={0.001}
					/>
				</Card>

				<Card position={[0.5, 0, 0]} color="black" preset="city">
					<Stars
						factor={0.5}
						saturation={Math.PI}
						fade
						speed={0.01}
					/>
					<Ocean />
				</Card>
			</group>
			<CamControls />
		</>
	);
}
