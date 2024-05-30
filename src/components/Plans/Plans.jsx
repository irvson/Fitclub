import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

const Plans = () => {
  return (
    <div className="plans-container">
     
      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className="stroke-text">Pronto para</span>
        <span>começar sua jornada</span>
        <span className="stroke-text"> agora conosco.</span>
      </div>
      {/* Plans Cards */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>R$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div> 
            <span>Veja mais benefícios -&gt; </span>
            </div>

              <button className="btn">Junte-se agora</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
