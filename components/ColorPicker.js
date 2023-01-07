import { Html } from "@react-three/drei";
import { useState } from "react";
import { Model } from "./Corvette";
import { CarText } from "./CarText";
export function ColorPicker() {
	const [occluded, occlude] = useState();
	const [color, setColor] = useState("#000000");

	return (
		<>
			<CarText color={color} />
			<Model color={color} />
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
				<label
					style={{ color: "white", marginRight: ".5rem" }}
					htmlFor="color"
				>
					Color:
				</label>
				<input
					type="color"
					id="color"
					name="color"
					onChange={(e) => {
						setColor(e.target.value);
					}}
				/>
			</Html>
		</>
	);
}
