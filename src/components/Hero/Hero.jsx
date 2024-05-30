import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

import { motion } from "framer-motion";

import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
const mobile = window.innerWidth<=768 ? true : false;


  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* A melhor academia */}

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "150px" : "215px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>A melhor academia da cidade</span>
        </div>

        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Alcance </span>
            <span center>a sua</span>
          </div>
          <div>
            <span>Melhor forma</span>
          </div>
          <div>
            <span>
              Aqui, nós vamos ajudá-lo a moldar e construir o seu corpo ideal e
              viver a vida ao máximo.
            </span>
          </div>
        </div>

        {/*Figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+" />
            </span>
            <span>Treinadores Especialistas</span>
          </div>

          <div>
            <span>
            <NumberCounter end={978} start={800} delay='4' preFix="+" />
            </span>
            <span>Membros Inscritos</span>
          </div>

          <div>
            <span>
            <NumberCounter end={50} start={0} delay='4' preFix="+" />
            </span>
            <span>Programas de Fitness</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Começe agora</buttons>
          <buttons className="btn">Saiba Mais</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Junte-se Agora</button>

        <motion.div
          initial={{ right: "1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition }
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Hear Rate</span>
          <span>104 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
        initial={{ right: "11rem" }}
        whileInView={{ right: "20rem" }}
        transition={transition }
        src={hero_image_back} alt="" className="hero-image-back" />
        {/* calories */}

        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calorias Queimadas</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
