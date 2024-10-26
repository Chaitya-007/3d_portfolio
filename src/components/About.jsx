import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4">
        I am a software developer with a passion for building web applications
        and exploring new technologies. I have experience with JavaScript,
        React, Node.js, Express, and MongoDB. I am always eager to learn new
        things and improve my skills.
      </motion.p>
    </>
  );
};

export default About;
