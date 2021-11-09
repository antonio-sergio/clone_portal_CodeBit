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
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div className="caurosel">
          <Slider {...settings}>
            <div>
                <img src={bCertified} alt="logo da b certificado"></img>
            </div>
            <div>
                <img src={consultingPartner} alt="logo da b certificado"></img>
            </div>
            <div>
                <img src={fundacaoTelefonica} alt="logo da b certificado"></img>
            </div>
            <div>
                <img src={novaEscola} alt="logo da b certificado"></img>
            </div>
            <div>
                <img src={nuvensAws} alt="logo da b certificado"></img>
            </div>
            <div>
                <img src={olimpiadasPortugues} alt="logo da b certificado"></img>
            </div>
            <div>
              <img src={portalCenpec} alt="logo da b certificado"></img>
            </div>
            <div>
              <img src={samsung} alt="logo da b certificado"></img>
            </div>
            <div>
              <img src={trilhas} alt="logo da b certificado"></img>
            </div>
            <div>
              <img src={vivo} alt="logo da b certificado"></img>
            </div>
          </Slider>
        </div>
      );
    }
  }