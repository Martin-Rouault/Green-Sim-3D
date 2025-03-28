import { CameraControls } from "@react-three/drei";

export default function Camera() {
    return (
        <CameraControls
            makeDefault
            polarRotateSpeed={0.3}
            azimuthRotateSpeed={0.3}
            maxPolarAngle={1.55}
        />
    );
}
