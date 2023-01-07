import { Html } from "@react-three/drei";
import { useState, useRef } from "react";
import { Model } from "./Corvette";
export function ColorPicker(props) {
	const [occluded, occlude] = useState();
	const [color, setColor] = useState("#000000");
	const ref = useRef();
	return (
		<>
			<Model color={color} color2="#000000" />
			<Html // 3D-transform contents
				transform
				// // Hide contents "behind" other meshes
				occlude
				// // Tells us when contents are occluded (or not)
				onOcclude={occlude}
				// We just interpolate the visible state into css opacity and transforms
				style={{
					transition: "all 0.2s",
					opacity: occluded ? 0 : 1,
					transform: `scale(${occluded ? 0.25 : 1})`,
				}}
				position={[3, 3, 0]}
				rotation-y={Math.PI / 4}
			>
				<div
					style={{
						borderRadius: "50%",
						height: "2rem",
						width: "2rem",
						display: "inline",
						color: "white",
						backgroundColor: "#ff0000",
						pointer: "finger",
					}}
					onClick={() => {
						setColor("#ff0000");
					}}
				>
					SS
				</div>
				<div
					style={{
						borderRadius: "50%",
						height: "2rem",
						width: "2rem",
						display: "inline",
						color: "white",
						backgroundColor: "#0000ff",
						pointer: "finger",
					}}
					onClick={() => {
						setColor("#0000ff");
					}}
				>
					SS
				</div>
				<div
					style={{
						borderRadius: "50%",
						height: "2rem",
						width: "2rem",
						display: "inline",
						color: "white",
						backgroundColor: "#ffff00",
						pointer: "finger",
					}}
					onClick={() => {
						setColor("#ffff00");
					}}
				>
					SS
				</div>
			</Html>
		</>
	);
}
