import { Environment } from "@react-three/drei";

export default function Background({ color }) {
	return (
		<>
			<Environment files={"./hdrs/moonless_golf_2k.hdr"} />
			<color attach="background" args={[color]} />
		</>
	);
}
