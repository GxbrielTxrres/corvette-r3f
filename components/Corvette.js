import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import Instructions from "../components/Instructions";
export function Model(props) {
	// console.log(props.hoverToggle.current);
	const [click, setClick] = useState(false);

	useEffect(() => {
		if (click) {
			gsap.to(props.hoverToggle.current.position, {
				y: 5,
				duration: 0.2,
			});
		} else {
			gsap.to(props.hoverToggle.current.position, {
				y: 2,
				duration: 0.2,
			});
		}
	});

	const { nodes, materials } = useGLTF(
		"/models/corvette/corvette_stingray.glb",
	);
	return (
		<>
			<Instructions clicked={click} />
			<group
				// onPointerOver={hover}
				// onPointerOut={hoverOut}

				onClick={() => {
					setClick(!click);
				}}
				{...props}
				dispose={null}
			>
				<group rotation={[-Math.PI / 2, 0, 0]}>
					<group rotation={[Math.PI / 2, 0, 0]}>
						<group
							position={[0, 0.53, 2.93]}
							rotation={[-Math.PI / 2, 0, 0]}
						>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								{/* CAR COLOR */}
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_6.geometry}
									material={materials.material}
									material-color={props.color}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								{/* MIRRORS */}
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_8.geometry}
									material={materials.Mirror}
								/>
								{/* GLASS */}
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_9.geometry}
									material={materials["Glass.001"]}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_11.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								{/* TRIM */}
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_13.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_15.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_17.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								{/* TINT */}
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_19.geometry}
									material={materials.TintedGlass}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_21.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_23.geometry}
									material={materials.Rubber}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_25.geometry}
									material={materials.TintedGlass}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_27.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_29.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								{/* TAIL PIPES / LUG NUTS */}
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_31.geometry}
									material={materials.RoughMirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_33.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_35.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_37.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_39.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_41.geometry}
									material={materials.Glass_Red}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_43.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_45.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_47.geometry}
									material={materials.Light}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_49.geometry}
									material={materials.Mirror}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_50.geometry}
									material={materials.Glass_Red}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_51.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_53.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_55.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_57.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_59.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_61.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_63.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_65.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_67.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_69.geometry}
									material={materials.RoughGlass}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_71.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_73.geometry}
									material={materials.Light}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_75.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_77.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_79.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_81.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_83.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_85.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_87.geometry}
									material={materials.TintedGlass}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_89.geometry}
									material={materials.Rubber}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_91.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_93.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_95.geometry}
									material={materials["Glass.001"]}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_97.geometry}
									material={materials["Glass.001"]}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_98.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_100.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_102.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_104.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_106.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_108.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_110.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_112.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_114.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_116.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_118.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_120.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_122.geometry}
									material={materials.Plate}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_124.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_126.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_128.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_130.geometry}
									material={materials.Logo}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_132.geometry}
									material={materials.Logo}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_134.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_136.geometry}
									material={materials.Shadow}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_138.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_140.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_142.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_144.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_146.geometry}
									material={materials.Light}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_148.geometry}
									material={materials.Light}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_150.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_152.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_154.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_156.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_158.geometry}
									material={materials["Glass.001"]}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_160.geometry}
									material={materials["Glass.001"]}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_162.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_164.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_166.geometry}
									material={materials["Glass.001"]}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_168.geometry}
									material={materials.Glass}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_170.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_172.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_174.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_176.geometry}
									material={materials.material}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_178.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_180.geometry}
									material={materials.Mirror}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_182.geometry}
									material={materials["Glass.001"]}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_184.geometry}
									material={materials.TintedGlass}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_186.geometry}
									material={materials.Rubber}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_188.geometry}
									material={materials.Rubber}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_190.geometry}
									material={materials.Border}
								/>
							</group>
							<group
								position={[0, 0.1, -0.53]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_192.geometry}
									material={materials.Border}
								/>
							</group>
						</group>
						<group
							position={[1.62, 0.74, 5.65]}
							rotation={[-Math.PI / 2, 0, 0]}
						>
							<group
								position={[-1.62, 2.83, -0.74]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_195.geometry}
									material={materials.RoughMirror}
								/>
								{/* RIM */}
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_196.geometry}
									material={materials.material_14}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_197.geometry}
									material={materials.Border}
								/>
								{/* TIRE */}
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_198.geometry}
									material={materials.Tire}
								/>
							</group>
						</group>
						<group
							position={[-1.62, 0.74, 5.65]}
							rotation={[-Math.PI / 2, 0, 0]}
						>
							<group
								position={[1.62, 2.83, -0.74]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_201.geometry}
									material={materials.RoughMirror}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_202.geometry}
									material={materials.material_14}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_203.geometry}
									material={materials.Border}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_204.geometry}
									material={materials.Tire}
								/>
							</group>
						</group>
						<group
							position={[1.62, 0.74, 0]}
							rotation={[-Math.PI / 2, 0, 0]}
						>
							<group
								position={[-1.62, -2.83, -0.74]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_207.geometry}
									material={materials.RoughMirror}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_208.geometry}
									material={materials.material_14}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_209.geometry}
									material={materials.Border}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_210.geometry}
									material={materials.Tire}
								/>
							</group>
						</group>
						<group
							position={[-1.62, 0.74, 0]}
							rotation={[-Math.PI / 2, 0, 0]}
						>
							<group
								position={[1.62, -2.83, -0.74]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_213.geometry}
									material={materials.RoughMirror}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_214.geometry}
									material={materials.material_14}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_215.geometry}
									material={materials.Border}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_216.geometry}
									material={materials.Tire}
								/>
							</group>
						</group>
						<group
							position={[1.52, 0.74, 5.65]}
							rotation={[-Math.PI / 2, 0, 0]}
						>
							<group
								position={[-1.52, 2.83, -0.74]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_219.geometry}
									material={materials.Calipers}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_220.geometry}
									material={materials.Border}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_221.geometry}
									material={materials.BrakePades}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_222.geometry}
									material={materials.RoughMirror}
								/>
							</group>
						</group>
						<group
							position={[-1.52, 0.74, 5.65]}
							rotation={[-Math.PI / 2, 0, 0]}
						>
							<group
								position={[1.52, 2.83, -0.74]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_225.geometry}
									material={materials.Calipers}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_226.geometry}
									material={materials.Border}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_227.geometry}
									material={materials.BrakePades}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_228.geometry}
									material={materials.RoughMirror}
								/>
							</group>
						</group>
						<group
							position={[1.51, 0.74, 0]}
							rotation={[-Math.PI / 2, 0, 0]}
						>
							<group
								position={[-1.51, -2.83, -0.74]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_231.geometry}
									material={materials.Calipers}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_232.geometry}
									material={materials.Border}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_233.geometry}
									material={materials.BrakePades}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_234.geometry}
									material={materials.RoughMirror}
								/>
							</group>
						</group>
						<group
							position={[-1.51, 0.74, 0]}
							rotation={[-Math.PI / 2, 0, 0]}
						>
							<group
								position={[1.51, -2.83, -0.74]}
								rotation={[Math.PI / 2, 0, 0]}
							>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_237.geometry}
									material={materials.Calipers}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_238.geometry}
									material={materials.Border}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_239.geometry}
									material={materials.BrakePades}
								/>
								<mesh
									castShadow
									receiveShadow
									geometry={nodes.Object_240.geometry}
									material={materials.RoughMirror}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
		</>
	);
}

useGLTF.preload("/models/corvette/corvette_stingray.glb");
