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
                    
                    <div className="values-1">
                        <div>
                            <div>
                                <h3><span>///</span>COMO FAZEMOS</h3>
                            </div>
                            <ul>
                                <li>Qualidade</li>
                                <li>Compromisso</li>
                                <li>Impacto</li>
                            </ul>
                        </div>
                        <div className="item-values">
                            <div className="item-values-img">
                                <img src={calendarImg} alt="imagem de um calendário"></img>
                            </div>
                            <div >
                                <h6>Prazo</h6>
                                <p>Missão dada é missão cumprida. Quando prometemos algo, nós entregamos, sem desculpas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="values-grid">
                        <div className="grid-item">
                            <div>
                                <img src={greetingImg} alt="imagem de mãos simbolizando gratidão"></img>
                            </div>
                            <div className="grid-item-text">
                                <h6>Valor Justo</h6>
                                <p>
                                    Contando com times divididos na capital e interior de São Paulo, reduzimos custos operacionais.
                                    Atuando para levar tecnologia que mude a vida de pessoas, lucro não é o que nos move. 
                                    Por meio desses dois pilares, conseguimos fornecer soluções de alto nível com valores que sejam 
                                    realmente justos. Isso é impacto.
                                </p>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div>
                                <img src={awsImg} alt="logo tipo da aws"></img>
                            </div>
                            <div className="grid-item-text">
                                <h6>Certificação AWS</h6>
                                <p>
                                    Somos parceiros especialistas em fornecer soluções em nuvem, principalmente para institutos
                                    e organizações sem fins lucrativos. Atuamos junto à AWS para solicitação de créditos 
                                    e auxílio na escolha e gestão de serviços de acordo com cada necessidade, vivenciando, 
                                    na prática, a balança de custo e eficiência.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="values-grid">
                        <div className="grid-item">
                            <div>
                                <img src={openSourceImg} alt="logo de serviços de código fonte abertos"></img>
                            </div>
                            <div className="grid-item-text">
                                <h6>Código Aberto</h6>
                                <p>
                                    Todo código fonte das soluções que fazemos é propriedade do solicitante, que continua conosco se assim desejar.
                                    Prezamos pela qualidade, e só é bom para nós, se for bom para o cliente.
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
                                    Usamos um modelo híbrido de gestão de projetos que une a flexibilidade das metodologias ágeis ao rigor da gestão 
                                    de cronogramas e comunicações propostos pelo PMI. Resultado: times ágeis e escaláveis com previsibilidade e 
                                    comunicações rigorosamente controladas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NPOs">
                    <div>
                        <img src={cloudNpoImg} alt="desenho do planeta terra sendo abraçado por uma nuvem"></img>
                    </div>
                    <div>
                        <h4>
                            Especialistas em <br/>
                            <strong> organizações sem fins lucrativos</strong> 
                        </h4>
                        <div>
                            <p>
                                As organizações sem fins lucrativos, Non-profitable organizations (<strong>NPOs</strong>) na língua inglesa, demandam uma atenção
                                especial de seus fornecedores de tecnologia. <br/>                       
                                <strong>A Codebit</strong> é uma empresa provedora de nuvem pública <strong>AWS (amazon Web Services)</strong> que possui a especialidade 
                                neste segmento (competência NPO).
                            </p>
                        </div>
                        <a href="/">Saiba mais</a>
                    </div>
                </div>
                <div className="customers">
                    <h3>Quais causas já apoiamos?</h3>
                    <img src={separtorImg} alt="setas opostas apontando para esquerda e direita"></img>
                    <h5>Quem Confia na Codebit?</h5>
                    <div>
                        <img src={customerCenpecImg} alt="logo da cenpec"></img>
                        <img src={customerItauCulturalImg} alt="logo do itau cultural"></img>
                        <img src={customerInspirareImg} alt="logo da inspirare"></img>
                        <img src={customerIttUnibancoImg} alt="logo do instituto unibanco"></img>
                        <img src={customerFLemannImg} alt="logo da fundação Lemann"></img>
                        <img src={customerIttNaturaImg} alt="logo do instituto Natura"></img>
                        <img src={customerFTelefonicaVivoImg} alt="logo da fundação telefônica"></img>
                        <img src={customerMSFImg} alt="logo do médicos sem fronteira"></img>
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