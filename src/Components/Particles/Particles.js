import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Prtls = () => {
    const particlesInit = async(main) => {

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {

    };
    return ( <
        Particles id = "tsparticles"
        init = { particlesInit }
        loaded = { particlesLoaded }
        options = {
            {
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 150,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",

                    },
                    links: {
                        color: "#ffffff",
                        distance: 200,
                        enable: true,
                        opacity: 0.8,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    // shape: {
                    //     type: "dot",
                    // },
                    // size: {
                    //     value: { min: 1, max: 5 },
                    // },
                },
                detectRetina: true,
            }
        }
        />
    );
};
export default Prtls;