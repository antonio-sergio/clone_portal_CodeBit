import React, {Component} from 'react';
import "./HowWeDo.css";
import agilityImg from "./img/agility.png";
import awsImg from "./img/aws.png";
import calendarImg from "./img/calendar.png";
import greetingImg from "./img/greeting.png";
import openSourceImg from "./img/open-source.png";
import cloudNpoImg from "./img/img-npo-site.png";
import separtorImg from "./img/partners /separator.png";

// partners
import customerCenpecImg from "./img/partners /customers-cenpec.png";
import customerFLemannImg from "./img/partners /customers-fundacao-lemann.png";
import customerFTelefonicaVivoImg from "./img/partners /customers-fundacao-telefonica-vivo.png";
import customerIceImg from "./img/partners /customers-ice.png";
import customerInspirareImg from "./img/partners /customers-inspirare.png";
import customerIttAirtonSennaImg from "./img/partners /customers-instituto-ayrton-senna.png";
import customerIttNaturaImg from "./img/partners /customers-instituto-natura.png";
import customerIttUnibancoImg from "./img/partners /customers-instituto-unibanco.png";
import customerItauCulturalImg from "./img/partners /customers-itau-cultural.png";
import customerItauSocial from "./img/partners /customers-itau-social.png";
import customerMSFImg from "./img/partners /customers-msf.png";
import customerNovaEscolaImg from "./img/partners /customers-nova-escola.png";
import customerSamsungImg from "./img/partners /customers-samsung.png";
import customerSincorImg from "./img/partners /customers-sincor.png";
import customerSindusconImg from "./img/partners /customers-sinduscon.png";

export default class HowWeDo extends Component{
    render(){
        return (
            <div className="how-we-do">
                <div className="values">
                    
                    <h3><span>///</span>COMO FAZEMOS</h3>
                    <div className="values-1">
                        <div>
                            <div>
                            </div>
                            <ul>
                                <li>Qualidade</li>
                                <li>Compromisso</li>
                                <li>Impacto</li>
                            </ul>
                        </div>
                        <div className="item-values">
                            <div className="item-values-img">
                                <img src={calendarImg} alt="imagem de um calend??rio"></img>
                            </div>
                            <div >
                                <h6>Prazo</h6>
                                <p>Miss??o dada ?? miss??o cumprida. Quando prometemos algo, n??s entregamos, sem desculpas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="values-grid">
                        <div className="grid-item">
                            <div>
                                <img src={greetingImg} alt="imagem de m??os simbolizando gratid??o"></img>
                            </div>
                            <div className="grid-item-text">
                                <h6>Valor Justo</h6>
                                <p>
                                    Contando com times divididos na capital e interior de S??o Paulo, reduzimos custos operacionais.
                                    Atuando para levar tecnologia que mude a vida de pessoas, lucro n??o ?? o que nos move. 
                                    Por meio desses dois pilares, conseguimos fornecer solu????es de alto n??vel com valores que sejam 
                                    realmente justos. Isso ?? impacto.
                                </p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div>
                                <img src={awsImg} alt="logo tipo da aws"></img>
                            </div>
                            <div className="grid-item-text">
                                <h6>Certifica????o AWS</h6>
                                <p>
                                    Somos parceiros especialistas em fornecer solu????es em nuvem, principalmente para institutos
                                    e organiza????es sem fins lucrativos. Atuamos junto ?? AWS para solicita????o de cr??ditos 
                                    e aux??lio na escolha e gest??o de servi??os de acordo com cada necessidade, vivenciando, 
                                    na pr??tica, a balan??a de custo e efici??ncia.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="values-grid">
                        <div className="grid-item">
                            <div>
                                <img src={openSourceImg} alt="logo de servi??os de c??digo fonte abertos"></img>
                            </div>
                            <div className="grid-item-text">
                                <h6>C??digo Aberto</h6>
                                <p>
                                    Todo c??digo fonte das solu????es que fazemos ?? propriedade do solicitante, que continua conosco se assim desejar.
                                    Prezamos pela qualidade, e s?? ?? bom para n??s, se for bom para o cliente.
                                </p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div>
                                <img src={agilityImg} alt="representando agiliade e visibilidade"></img>
                            </div>
                            <div className="grid-item-text">
                                <h6>Agilidade e visibilidade</h6>
                                <p>
                                    Usamos um modelo h??brido de gest??o de projetos que une a flexibilidade das metodologias ??geis ao rigor da gest??o 
                                    de cronogramas e comunica????es propostos pelo PMI. Resultado: times ??geis e escal??veis com previsibilidade e 
                                    comunica????es rigorosamente controladas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NPOs">
                    <div>
                        <img src={cloudNpoImg} alt="desenho do planeta terra sendo abra??ado por uma nuvem"></img>
                    </div>
                    <div>
                        <h4>
                            Especialistas em <br/>
                            <strong> organiza????es sem fins lucrativos</strong> 
                        </h4>
                        <div>
                            <p>
                                As organiza????es sem fins lucrativos, Non-profitable organizations (<strong>NPOs</strong>) na l??ngua inglesa, demandam uma aten????o
                                especial de seus fornecedores de tecnologia. <br/>                       
                                <strong>A Codebit</strong> ?? uma empresa provedora de nuvem p??blica <strong>AWS (amazon Web Services)</strong> que possui a especialidade 
                                neste segmento (compet??ncia NPO).
                            </p>
                        </div>
                        <a href="/">Saiba mais</a>
                    </div>
                </div>
                <div className="customers">
                    <h3>Quais causas j?? apoiamos?</h3>
                    <img className="separator" src={separtorImg} alt="setas opostas apontando para esquerda e direita"></img>
                    <h5>Quem Confia na Codebit?</h5>
                    <div>
                        <img src={customerCenpecImg} alt="logo da cenpec"></img>
                        <img src={customerItauCulturalImg} alt="logo do itau cultural"></img>
                        <img src={customerInspirareImg} alt="logo da inspirare"></img>
                        <img src={customerIttUnibancoImg} alt="logo do instituto unibanco"></img>
                        <img src={customerFLemannImg} alt="logo da funda????o Lemann"></img>
                        <img src={customerIttNaturaImg} alt="logo do instituto Natura"></img>
                        <img src={customerFTelefonicaVivoImg} alt="logo da funda????o telef??nica"></img>
                        <img src={customerMSFImg} alt="logo do m??dicos sem fronteira"></img>
                        <img src={customerItauSocial} alt="logo do itau social"></img>
                        <img src={customerSincorImg} alt="logo da sincor"></img>
                        <img src={customerNovaEscolaImg} alt="logo da nova escola"></img>
                        <img src={customerSindusconImg} alt="logo da sinduscor"></img>
                        <img src={customerSamsungImg} alt="logo da samsung"></img>
                        <img src={customerIttAirtonSennaImg} alt="logo do instituto Ayrton Senna"></img>
                        <img src={customerIceImg} alt="logo da ice"></img>

                    </div>
                </div>
            </div>
        )
    }
}