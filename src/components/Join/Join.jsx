import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kbhc51b",
        "template_r8rf2fe",
        form.current,
        "qnOSaDfSxDfxHJ_yD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">PRONTO PARA </span>
          <span>SUBIR DE NÍVEL</span>
        </div>

        <div>
          <span>SEU CORPO </span>
          <span className="stroke-text">COM A GENTE?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Digite seu de e-mail."
          />
          <button className="btn btn-j">Junte-se Agora</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
