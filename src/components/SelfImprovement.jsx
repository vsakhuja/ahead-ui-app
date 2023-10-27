"use client";
import React from "react";
import Image from "next/image";
import Fade from "react-awesome-reveal";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0.5;
    transform: translate3d(-200px, -100px, 0);
    transform: translate2d( -50px, 0);
    transparent:0;
  }

  to {
    opacity: 1;
    transform: translate2d( 0, 0);
  }
`;
const SelfImprovement = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once when it comes into view
  });

  return (
    <section className="px-20 mt-10 mb-24 " ref={ref}>
      {inView && (
        <div>
          <div className="flex flex-row justify-between items-center">
            <motion.div
              className="inline-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, x: 0 },
                hidden: { opacity: 0, scale: 0, x: "-50%" },
              }}
            >
              <div className="text-xl font-bold text-black">
                Wrong with self improvement & how we&apos;re fixing it.
              </div>
              <div className="text-6xl pb-3 font-bold text-black">
                Self Improvement. Ugh.
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{
                duration: 4,
                // ease: "easeInOut",
                // type: "spring",
                delay: 0.3,
              }}
              intial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  x: [0, -460, -430],
                  y: [200, 10, 0],
                  rotate: [-90, -90, -85, -80, -60, -40, 40, -60, 40, -60, 0],
                },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/blue-ghost.png"
                alt="download applestore"
                width={70}
                height={70}
              />
            </motion.div>
          </div>
          <div className="h-8"></div>
          <div className="timeline px-20 pt-14 h-96 overflow-y-scroll">
            <div className="border-l-2 border-l-violet-300   flex  flex-col gap-16">
              <div keyframes={customAnimation}>
                {[...Array(8)].map((val, index) => {
                  return (
                    <div key={index}>
                      <motion.div
                        initial={{ opacity: 0.1 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className=" max-w-[40rem] relative align-top pl-8">
                          <div style={{ left: "-12px" }} className="absolute">
                            🟣
                          </div>
                          <p className="text-xl mt-5 font-bold">
                            It&apos;s not easy as 1-2-3
                          </p>
                          <p className="mt-3">
                            The journey may be long but our sessions are quick.
                            We get to the point and tell you what you want to
                            know (and nothing else).
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SelfImprovement;
