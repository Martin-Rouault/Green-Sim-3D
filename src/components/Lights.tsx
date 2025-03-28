export default function Lights() {
    return (
        <>
            <ambientLight intensity={0.5 * Math.PI} />
            <directionalLight position={[10, 10, 5]} intensity={6} />
        </>
    );
}
