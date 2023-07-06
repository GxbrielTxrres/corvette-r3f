import { Perf } from "r3f-perf";
import { Model } from "./Models/Humans";
import Effects from "./Scene/Effects";
import CamControls from "./Scene/CamControls";
import Floor from "./SceneChildren/Floor";
import Background from "./Scene/Background";
import { Float, Stars, useScroll } from "@react-three/drei";
import Card from "./SceneChildren/Card";
import Youtube from "./SceneChildren/Youtube";
import Overlay from "./SceneChildren/Overlay";
import { Saturn } from "./Models/Saturn";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { Butterflies } from "./Models/Butterflies";
import { SpaceBoi } from "./Models/Space_boi";
import SunOrStars from "./Scene/SunOrStars";
import Sunset from "./SceneChildren/Sunset";

export default function Scene() {
	const config = {
		model: {
			position: [3, -1, 0],
			rotation: [0, -Math.PI / 2, 0],
			scale: 0.5,
		},
	};

	const [tl, setTl] = useState();
	const timeline = useRef();
	const scroll = useScroll();

	useLayoutEffect(() => {
		timeline.current = gsap.timeline();
		const context = gsap.context(() => {
			setTl(timeline.current);
		});

		return () => context.revert();
	}, []);

	useFrame(() => {
		if (timeline.current) {
			timeline.current.seek(scroll.offset * timeline.current.duration());
		}
	});

	return (
		<>
			{/* <Perf /> */}
			<fogExp2 attach="fog" args={["pink", 0.03]} />
			<Model {...config.model} tl={tl} />
			<Effects video={true} />
			{/* <Overlay /> */}
			<Background color="black" />
			<Floor />
			<Stars />
			<Card position-z={20} tl={tl} color="white">
				<Sunset />
				<SpaceBoi
					scale={0.2}
					position={[3, -10, -20]}
					rotation-y={Math.PI / 2}
					tl={tl}
				/>
			</Card>
			<Float>
				<Butterflies position={[-3.4, 0.7, 1]} scale={0.01} />
			</Float>
			{/* <Card rotation-y={Math.PI / 4}></Card> */}
			{/* <Youtube /> */}
			<CamControls tl={tl} />
			<Saturn scale={0.009} position={[20, 5, -10]} />
		</>
	);
}
