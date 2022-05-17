import React from 'react';
import Particles, { IParticlesProps } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import style from '../styles/Particle.module.css';

const particleOptions: IParticlesProps = {
  options: {
    particles: {
      number: {
        value: 68,
      },
      size: {
        value: 2,
        random: true,
      },
      color: {
        value: '#3b90f7',
      },
      opacity: {
        value: 1,
        random: true,
      },
      move: {
        enable: true,
        direction: 'none',
        speed: 1,
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        repulse: {
          distance: 100
        }
      }
    }
  },
};

const Particle = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      className={style.particle}
      id='tsparticles'
      init={particlesInit}
      options={particleOptions.options}
    />
  );
};

export default Particle;
