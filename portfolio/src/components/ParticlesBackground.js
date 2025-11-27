import Particles from 'react-tsparticles';

const ParticlesBackground = () => {

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    >
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: { value: '#141e30' }
          },
          particles: {
            number: { value: 60 },
            color: { value: '#00d8ff' },
            links: {
              enable: true,
              color: '#00d8ff',
              distance: 150
            },
            move: {
              enable: true,
              speed: 1
            }
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
