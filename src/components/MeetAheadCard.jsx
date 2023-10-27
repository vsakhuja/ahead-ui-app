"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MeetAheadCard = () => {
  return (
    <div className="px-20 relative mt-7 mb-32">
     <div>
      <div
        style={{ height: "450px" }}
        className="bg-bgPeach overflow-hidden relative flex rounded-lg"
      >
        <div className=" basis-1/2 px-7">
          <div className="flex flex-col mt-20 gap-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                hidden: { opacity: 0, scale: 0.5 },
              }}
            >
              <div>
                <p className="text-md text-left">Built Out of Frustration</p>
              </div>
              <div>
                <p className="text-5xl pt-2 font-bold font-poppins">
                  Meet the ahead app
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="basis-1/2 flex items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5 },
            }}
          >
            <div className="flex flex-col gap-12 w-4/5  items-center">
              <div>
                <p className="text-lg font-poppins">
                  A personalized pocket coach that provide bitesized,
                  science-driven tools to boost emotional intelligence.
                </p>
              </div>
              <div>
                <p className="text-lg font-poppins">
                  Think of it as a pocket cheerleader towards a better, more
                  fulfilling.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* circle div  */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            hidden: { opacity: 1, x: 0, y: 20 },
            visible: {
              x: [0, -550],
              y: [80, -80],
            },
          }}
          animate={{
            x: [0, -550],
            y: [80, -80],
          }}
          transition={{
            type: "tween",
            duration: 3,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="bg-darkPeach h-60 w-60 absolute rounded-full"
          style={{ bottom: "-16px", right: "650px" }}
        ></motion.div>

        {/* small circles division */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            visible: {
              x: [0, 10],
              y: [55, -15],
              rotate: 25,
            },
            hidden: { y: 25 },
          }}
          animate={{
            x: [0, 10],
            y: [55, -5],
            rotate: 25,
          }}
          transition={{
            type: "tween",
            duration: 2,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="h-28 w-24 absolute"
          style={{ right: "60%", top: "30%" }}
        >
          <Image height={100} width={100} src="/assets/smallCircle.png" alt="" />
        </motion.div>

        {/*GHost Div  */}
        <div
          style={{ top: "62%", left: "15%", transform: "translate(-50%,-50%)" }}
          className="absolute  flex justify-center items-center rounded-full bg-white h-44 w-44 border-8 border-borderGrey"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            variants={{
              visible: {
                opacity: 1,
                scale: 0.8,
                x: 0,
                y: 0,
                rotate: [45, 0],
              },
              hidden: { opacity: 0, scale: 0.5 },
            }}
          >
            <Image
              height={100}
              width={100}
              src="/assets/newGhost.png"
              className="h-full w-full"
              alt=""
            />
          </motion.div>
          {/*Badge*/}
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, zIndex: -10 },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              bounce: "0.3",
              duration: "1.5",
              ease: "easeInOut",
              delay: "0.5",
            }}
            className="absolute h-11 w-11"
            style={{ top: "-22px" }}
          >
            <Image height={100} width={100} src="/assets/badge.png" alt="" />
          </motion.div>
        </div>
      </div>
      {/* flower div */}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 360 },
          hidden: { opacity: 1 },
        }}
        transition={{
          ease: "linear",
          duration: 1.3,
          repeat: Infinity,
          delay: 0.2,
        }}
        style={{ right: "200px", top: "-20px" }}
        className="h-11 w-11 absolute "
      >
        <Image height={100} width={100} src="/assets/flower.png" alt="" />
      </motion.div>

      {/* single leaf left */}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 360 },
          hidden: { opacity: 1 },
        }}
        transition={{
          ease: "linear",
          duration: 1.3,
          repeat: Infinity,
          delay: 0.2,
        }}
        style={{ left: "540px", bottom: "180px" }}
        className="h-11 w-11 absolute "
      >
        <Image height={100} width={100} src="/assets/singleLeaf.png" alt="" />
      </motion.div>

      {/* single leaf right */}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 360 },
          hidden: { opacity: 1 },
        }}
        transition={{
          ease: "linear",
          duration: 1.3,
          repeat: Infinity,
        }}
        style={{ right: "300px", top: "50px" }}
        className="h-11 w-11 absolute "
      >
        <Image height={100} width={100} src="/assets/singleLeaf.png" alt="" />
      </motion.div>
      </div>
    </div>
  );
};

export default MeetAheadCard;
