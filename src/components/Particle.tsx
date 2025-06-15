import React from 'react';
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#a588c0"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: false
          },
          size: {
            value: 3,
            random: true
          },
          links: {
            enable: true,
            distance: 150,
            color: "#a588c0",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default Particle;