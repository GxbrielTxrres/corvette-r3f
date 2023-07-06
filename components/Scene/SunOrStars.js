import { Stars } from "@react-three/drei";
import Sunset from "../SceneChildren/Sunset";
import { useState } from "react";
import Card from "../SceneChildren/Card";

export default function SunOrStars() {
	const [sun, setSun] = useState(false);

	return (
		<>
			<Card>
				<Sunset />
			</Card>
		</>
	);
}
