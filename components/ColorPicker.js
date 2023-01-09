import { Html } from "@react-three/drei";
import { useRef, useState } from "react";
import { Model } from "./Corvette";
import { CarText } from "./CarText";
export function ColorPicker() {
	const [occluded, occlude] = useState();
	const [color, setColor] = useState("#000000");

	const ref = useRef();

	return (
		<>
			<CarText color={color} />
			<Model color={color} />

			<mesh
				ref={ref}
				position={[-2.5, 5.7, 2.5]}
				rotation-y={Math.PI / 2}
			>
				<Html // 3D-transform contents
					transform
					// // Hide contents "behind" other meshes

					// We just interpolate the visible state into css opacity and transforms
					style={{
						transition: "all 0.2s",
						opacity: occluded ? 0 : 1,
						transform: `scale(${occluded ? 0.25 : 1})`,
					}}
				>
					<div
						style={{
							backgroundColor: "#ffffff20",
							boxShadow: "0, 4px, 30px, #00000010",
							backdropFilter: "5.2px",
							border: "1px solid #ffffff30",
							height: "5rem",
							width: "24rem",
							borderRadius: "15px",
							opacity: ".5",
							pointerEvents: "none",
						}}
					></div>
				</Html>
			</mesh>

			<mesh
				ref={ref}
				position={[-2.4, 5.7, 2.15]}
				rotation-y={Math.PI / 2}
			>
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
				>
					<label
						style={{
							color: "white",
							marginRight: ".5rem",
							display: "flex",
							justifyContent: "center",
							paddingBottom: " 10px",
						}}
						htmlFor="color"
					>
						Choose a color:
					</label>
					<button
						onClick={() => {
							setColor("#000000");
						}}
						style={{ backgroundColor: "black" }}
					></button>
					<button
						onClick={() => {
							setColor("#ffffff");
						}}
						style={{ backgroundColor: "white" }}
					></button>
					<button
						onClick={() => {
							setColor("#ff0000");
						}}
						style={{ backgroundColor: "red" }}
					></button>
					<button
						onClick={() => {
							setColor("#09dde8");
						}}
						style={{ backgroundColor: "#09dde8" }}
					></button>
					<button
						onClick={() => {
							setColor("#fff700");
						}}
						style={{ backgroundColor: "##fff700" }}
					></button>
					<button
						onClick={() => {
							setColor("#ffa200");
						}}
						style={{ backgroundColor: "#ffa200" }}
					></button>
				</Html>
			</mesh>
		</>
	);
}
