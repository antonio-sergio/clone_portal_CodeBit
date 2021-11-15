import React, { Component } from "react";
import Slider from "react-slick";
import "./Caurosel.css"

import bCertified from "./img/b-certified-removebg-preview.png";
import consultingPartner from "./img/consulting-partner-removebg-preview.png";
import fundacaoTelefonica from "./img/fundacao-telefonica-removebg-preview.png";
import novaEscola from "./img/nova-escola-removebg-preview.png";
import nuvensAws from "./img/nuvem-aws-removebg-preview.png";
import olimpiadasPortugues from './img/olimpiadas-portugues-removebg-preview.png';
import portalCenpec from "./img/portal-cenpec-removebg-preview.png";
import samsung from "./img/samsung-removebg-preview.png";
import trilhas from "./img/trilhas-removebg-preview.png";
import vivo from "./img/vivo-removebg-preview.png";


export default class PauseOnHover extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div className="caurosel-father">
          <div className="caurosel">
          <Slider {...settings}>
            <div>
                <img src={bCertified} alt=""></img>
                <p>Unindo negócios e Impacto social<span>-Empresa B Certificada</span></p>
            </div>
            <div>
                <img src={consultingPartner} alt=""></img>
                <p>Select consulting partners<span>-Amazon Web Services</span></p>
            </div>
            <div>
                <img src={fundacaoTelefonica} alt=""></img>
                <p>Pense Grande<span>-Fundação Telefônica Vivo</span></p>
            </div>
            <div>
                <img src={novaEscola} alt=""></img>
                <p>Portal Nova Escola<span>-Assossiação Nova Escola</span></p>
                 
            </div>
            <div>
                <img src={nuvensAws} alt=""></img>
                <p>Gestão de Infraestrutura em Nuvem<span>-Amazon Web Services</span></p>
            </div>
            <div>
                <img src={olimpiadasPortugues} alt=""></img>
                <p>Olimpíadas de Lingua Portuguesa Escrevendo o Futuro<span>-Itaú Social</span></p>
            </div>
            <div>
                <img src={portalCenpec} alt=""></img>
                <p>Portal Institucional<span>-Cenpec</span></p>
            </div>
            <div>
                <img src={samsung} alt=""></img>
                <p>Prêmio Respostas para o Amanhã<span>-Samsung</span></p>
            </div>
            <div>
                <img src={trilhas} alt=""></img>
                <p>Portal Trilhas<span>-Instituto Natura</span></p>
            </div>
            <div>
                <img src={vivo} alt=""></img>
                <p>Prêmio Inova Escola<span>-Fundação Telefônica Vivo</span></p>
            </div>
          </Slider>
        </div>
        </div>
      );
    }
  }