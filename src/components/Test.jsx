"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const Test = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once when it comes into view
  });
  const animate = [" Team Ahead."];

  return (
    <section className="mt-20 flex flex-col gap-3 text-center p-8">
      <p className="text-center">We take privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-xl font-normal font-poppins">
        &quot;We won't share your answers with anyone.
        <br /> (and wont tell you which friends said what about you)
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <h5 className="team-signature">
          <span className="with-love">with love,</span>
          <span className="signature" ref={ref}>
            {inView && (
              <Typewriter
                words={animate}
                typeSpeed={100}
                className="font-adelia font-bold"
              />
            )}
          </span>
        </h5>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: "10%" },
          visible: {
            y: 0,
            transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
          },
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: {
              opacity: 1,
              scale: [0, 0.25, 0.5, 0.8, 1.01, 1],
              transition: { ease: "easeInOut", duration: 1 },
            },
          }}
          style={{
            width: "100%", // Adjust the width as needed
            overflow: "hidden", // Hide overflowing text while sliding
          }}
          className="pt-3"
        >
          <button className="rounded-[50px] p-4 px-6 text-white bg-black">
            Start Test
          </button>
        </motion.div>
        <div className="text-sm mt-4">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default Test;
