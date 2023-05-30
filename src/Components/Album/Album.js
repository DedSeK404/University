import React, { useEffect } from "react";
import Pic1 from "../../Album/f_g1.jpg";
import Pic2 from "../../Album/f_g2.jpg";
import Pic3 from "../../Album/f_g3.jpg";
import Pic4 from "../../Album/f_g4.jpg";
import Pic5 from "../../Album/f_g5.jpg";
import Pic6 from "../../Album/f_g6.jpg";
import Pic7 from "../../Album/f_g12.jpg";
import Pic8 from "../../Album/f_g15.jpg";
import Pic9 from "../../Album/f_g16.jpg";
import Pic10 from "../../Album/f_g17.jpg";
import Pic11 from "../../Album/f_p7.jpg";
import "./Album.css";
import Container from "react-bootstrap/esm/Container";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Album = () => {
  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.4,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.4,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.4,
  });
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 1,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView]);
  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView2) {
      animation2.start({
        opacity: 1,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView2]);
  useEffect(() => {
    if (inView3) {
      animation3.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView3) {
      animation3.start({
        opacity: 1,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView3]);
  useEffect(() => {
    if (inView4) {
      animation4.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
    if (!inView4) {
      animation4.start({
        opacity: 1,
        y: 30,
        scale: 0.9,
        transition: {
          duration: 0.8,

          ease: [0, 0.71, 0.2, 1.01],
        },
      });
    }
  }, [inView4]);
  return (
    <div style={{ backgroundColor: "#E2E6E7" }}>
      <Container className="album">
        <motion.img
          ref={ref}
          animate={animation}
          className="pic1"
          src={Pic1}
          alt="0"
        />
        <motion.img
          ref={ref}
          animate={animation}
          className="Pic2"
          src={Pic2}
          alt="0"
        />
        <motion.img
          ref={ref}
          animate={animation}
          className="Pic3"
          src={Pic3}
          alt="0"
        />
        <motion.img
          ref={ref2}
          animate={animation2}
          className="Pic4"
          src={Pic4}
          alt="0"
        />
        <h1 style={{ fontSize: "3rem", letterSpacing: "3px" }}>Album photo</h1>
        <motion.img
          ref={ref2}
          animate={animation2}
          className="Pic5"
          src={Pic5}
          alt="0"
        />
        <motion.img
          ref={ref3}
          animate={animation3}
          className="Pic6"
          src={Pic6}
          alt="0"
        />
        <motion.img
          ref={ref3}
          animate={animation3}
          className="Pic7"
          src={Pic7}
          alt="0"
        />
        <motion.img
          ref={ref3}
          animate={animation3}
          className="Pic8"
          src={Pic8}
          alt="0"
        />
        <motion.img
          ref={ref4}
          animate={animation4}
          className="Pic9"
          src={Pic9}
          alt="0"
        />
        <motion.img
          ref={ref4}
          animate={animation4}
          className="Pic10"
          src={Pic10}
          alt="0"
        />
        <motion.img
          ref={ref4}
          animate={animation4}
          className="Pic11"
          src={Pic11}
          alt="0"
        />
      </Container>
    </div>
  );
};

export default Album;
