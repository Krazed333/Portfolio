// Code for ParticlesContainer component
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  //init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse", // Change mode
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 0,
            },
            repulse: {
              // Comment out or delete this section
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#FFD700",
          },
          links: {
            color: "#ffffff", //"#FFD700",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outMode: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
            vibrate: false, // Make the particles vibrate
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "polygon",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        directRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
