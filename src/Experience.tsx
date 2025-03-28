import { Suspense } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import useConfigStore from "./store/configStore";
import { Canvas } from "@react-three/fiber";
import Loader from "./components/Loader";
import Camera from "./components/Camera";
import Lights from "./components/Lights";

function App() {
    const { currentStep, nextStep, previousStep } = useConfigStore();


    return (
        <>
            <h1>{currentStep}</h1>
            <Button variant="default" onClick={() => nextStep()}>
                Suivant
            </Button>
            <Button variant="destructive" onClick={() => previousStep()}>
                Précédent
            </Button>

            <Canvas>
                <Suspense fallback={<Loader />}>
                    <Camera />
                    <Lights />
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="hotpink" />
                    </mesh>
                </Suspense>
            </Canvas>
        </>
    );
}

export default App;
