const particlesCount = 100;
const particlePositions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount; i++) {
  const i3 = i * 3;

  particlePositions[i3] = Math.random();
  particlePositions[i3 + 1] = Math.random();
  particlePositions[i3 + 2] = Math.random();
}

function Particles() {
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={particlesCount}
          itemSize={3}
          array={particlePositions}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        transparent
      />
    </points>
  );
};
export default Particles