import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
    const { progress } = useProgress();

    return (
        <Html className="text-neutral-900 bg-amber-700">
            {Math.floor(progress)} %
        </Html>
    );
}
