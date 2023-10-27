"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SliderCard from "./SliderCard";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const DoesThisSoundFamiliar = () => {
  const cardData = [
    {
      heading: "You argue with a colleague",
      info: "You get angry and defensive, instead of staying open and working towards common ground",
      bg: "[#EFEBFF]",
      emoji: "/assets/emoji/proud.png",
    },
    {
      heading: "You get a promotion at work",
      info: "You question yourself and wonder when they will realize you are an unqualified imposter",
      bg: "[#D9F2FF]",
      emoji: "/assets/emoji/angel.png",
    },
    {
      heading: "You attend a class reunion",
      info: "You reconnect with old friends and reminisce about the good times you shared during your school days.",
      bg: "[#FFEFD5]",
      emoji: "/assets/emoji/pain.png",
    },
    {
      heading: "You receive critical feedback",
      info: "Instead of taking it constructively, you become defensive and dismissive, hindering personal growth.",
      bg: "[#EFEBFF]",
      emoji: "/assets/emoji/irritated.png",
    },
    {
      heading: "You receive praise for your work",
      info: "You struggle to accept compliments and downplay your achievements, underestimating your abilities.",
      bg: "[#D9F2FF]",
      emoji: "/assets/emoji/thank-you.png",
    },
    {
      heading: "You face a setback",
      info: "Rather than seeing it as an opportunity to learn and grow, you feel discouraged and give up easily.",
      bg: "[#FFEFD5]",
      emoji: "/assets/emoji/omg.png",
    },
    {
      heading: "You collaborate on a project",
      info: "You insist on having things done your way, disregarding the ideas and input of others.",
      bg: "[#EFEBFF]",
      emoji: "/assets/emoji/angel.png",
    },
    {
      heading: "You make a mistake",
      info: "Instead of taking responsibility, you blame others and refuse to acknowledge your error.",
      bg: "[#D9F2FF]",
      emoji: "/assets/emoji/pain.png",
    },
    {
      heading: "You receive a promotion",
      info: "You doubt your worthiness for the new role and fear not living up to expectations.",
      bg: "[#FFEFD5]",
      emoji: "/assets/emoji/proud.png",
    },
    {
      heading: "You receive an unexpected gift",
      info: "You feel uncomfortable and unworthy of receiving such generosity.",
      bg: "[#EFEBFF]",
      emoji: "/assets/emoji/thank-you.png",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once when it comes into view
  });

  return (
    <section className=" overflow-x-hidden mt-12 mb-32 p-4 px-20" ref={ref}>
      {inView && (
        <div>
          <div className="flex flex-row items-center justify-between">
            <motion.div
              className="inline-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.9, type: "spring", bounce: "0.3" }}
              variants={{
                visible: { opacity: 1, scale: 1, y: 0, x: 0 },
                hidden: { opacity: 0, scale: 0, x: "-50%" },
              }}
            >
              <h1 className="text-4xl font-bold px-4 mb-5 font-poppins">
                Does this sound familiar...
              </h1>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{
                duration: 2.9,
                ease: "easeInOut",
                type: "spring",
                delay: 0.2,
              }}
              intial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  x: [0, -100, -200, -250, -500, -650],
                  y: [35, 20, 10, 0, -10],
                  rotate: [-70, -65, -55, -45, -35, -25, -5],
                },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Image
                width={70}
                height={70}
                alt=""
                src="/assets/red-ghost.png"
              />
            </motion.div>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar py-8 w-full px-4">
            {cardData.map((item, index) => (
              <SliderCard
                emote={item.emoji}
                bg={item.bg}
                heading={item.heading}
                info={item.info}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default DoesThisSoundFamiliar;
