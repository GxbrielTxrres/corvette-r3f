import { Float, Text } from "@react-three/drei";
import { useState } from "react";
export function CarText() {
	const [float, setFloat] = useState(false);
	return (
		<>
			{float === true ? (
				<Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
					<Text
						onPointerOver={() => {
							setFloat(true);
						}}
						onPointerOut={() => {
							setFloat(false);
						}}
						position={[-2.5, 3, 2]}
						rotation-y={Math.PI / 2}
						font="/HussarBoldWeb-bf92.woff"
						fontSize={4}
						color="#787878"
						fillOpacity={0.5}
						strokeOpacity={0.5}
					>
						Corvette
					</Text>
				</Float>
			) : (
				<Text
					onPointerOver={() => {
						setFloat(true);
					}}
					onPointerOut={() => {
						setFloat(false);
					}}
					position={[-2.5, 3, 2]}
					rotation-y={Math.PI / 2}
					font="/HussarBoldWeb-bf92.woff"
					fontSize={4}
					color="#787878"
					fillOpacity={0.5}
					strokeOpacity={0.5}
				>
					Corvette
				</Text>
			)}
		</>
	);
}
