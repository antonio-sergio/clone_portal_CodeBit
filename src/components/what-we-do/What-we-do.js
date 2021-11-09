import React, {Component} from 'react';
import "./What-we-do.css";
import customMade from "./img/custom-made.png";
import cloudImg from "./img/cloud.png";
import appImg from "./img/apps.png";
import infrastructureImg from "./img/infrastructure-management.png";
import integrationImg from "./img/integration.png";
import webSystemsImg from "./img/web-systems.png";


export default class WhatWeDo extends Component{
    render(){
        return (
            <div className="whatWeDo">
                <div>
                    <h3><span>///</span>O QUE FAZEMOS</h3>
                    <h4>Quais Tecnologias e Produtos?</h4>
                </div>
                <div>
                    <div>
                        <img src={customMade} alt="uma fita métrica expressando coisas sob medidas"></img>
                    </div>
                    <div>
                        <h5>Soluções sob medida</h5>
                        <p>
                            Especializados na criação de portais e plataformas web, sistemas complexos de integração, 
                            aplicativos Android e iOS, além de hardwares e dispositivos eletrônicos, nós conseguimos 
                            dar vida a quaisquer ideias e demandas, desde portais simples até complexas plataformas 
                            e dispositivos integrados. Tudo construído sob medida para se adequar perfeitamente a cada 
                            necessidade.
                        </p>
                        <p>
                            Parceria com empresas de UX, UI e design thinking para criação de soluções completas.
                        </p>
                    </div>
                </div>
                <div>
                <div>
                        <img src={cloudImg} alt="desenho de uma nuvem representando armazenamento de dados em nuvem"></img>
                    </div>
                    <div>
                        <h5>Infraestrutura em nuvem</h5>
                        <p>
                            Gestão de ambientes em nuvem com suporte 24x7, monitoramento, backups, atualizações de
                            segurança, gestão de ambientes de produção e fluxos de DevOps, em linha com as melhores 
                            práticas nos pilares de disponibilidade, segurança, custos e performance.
                        </p>
                        <p>
                            Parceria exclusiva com AWS, líder global em infraestrutura em nuvem.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={webSystemsImg} alt="imagem de 3 letras w representando sistemas web" ></img>
                        <h6>Sistemas Web</h6>
                        <ul>
                            <li>Plataformas de Formação / EAD</li>
                            <li>Plataformas de conteúdo</li>
                            <li>Sistemas administrativos e financeiros</li>
                            <li>Portais institucionais</li>
                        </ul>
                    </div>
                    <div>
                        <img src={appImg} alt="imagem de 3 letras w representando sistemas web" ></img>
                        <h6>Aplicativos Mobile</h6>
                        <ul>
                            <li>Aplicativos iOS & Android</li>
                            <li>Games</li>
                            <li>Sistemas para compartilhamento de veículos</li>
                            <li>Aplicações Nativas</li>
                        </ul>
                    </div>
                    <div>
                        <img src={integrationImg} alt="imagem de 3 letras w representando sistemas web" ></img>
                        <h6>Integração</h6>
                        <ul>
                            <li>Data Lakes</li>
                            <li>Bases de conhecimento</li>
                            <li>Machine Learning</li>
                            <li>Notificações e cruzamento de dados</li>
                        </ul>
                    </div>
                    <div>
                        <img src={infrastructureImg} alt="imagem de 3 letras w representando sistemas web" ></img>
                        <h6>Gestão de infraestrutura</h6>
                        <ul>
                            <li>Consultoria e migração para nuvem</li>
                            <li>Governança e Backups</li>
                            <li>DevOps</li>
                            <li>Suporte e Monitoramento 24x7</li>
                            <li>Pilares de Disponibilidade, Segurança, Custos, Confiabilidade e Performance</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}