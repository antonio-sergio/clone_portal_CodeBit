import React, {Component} from 'react';
import "./Banner.css";

export default class Banner extends Component{
    render(){
        return (
            <div className="banner">
                <div>
                    <h1>Tecnologia deve ter uma causa</h1>
                    <h2>e as causas merecem as melhores tecnologias</h2>
                </div>
                <div className="who-are-we">
                    <h3>
                        <span>///</span>
                        QUEM SOMOS
                    </h3>
                    <p>
                        Se educação é a arma mais poderosa para mudar o mundo, então tecnologia é seu catalisador. 
                        Acreditando nisso, nos tornamos fornecedores de soluções para <span> startups, fundações empresariais,
                        universidades, organizações do terceiro setor e iniciativas de projetos com cunho social</span>. 
                        Atuando nesse mercado conseguimos compartilhar experiências e usar a tecnologia para viabilizar 
                        um conjunto de iniciativas que visam levar mais educação, saúde e conhecimento para todos os
                        setores da sociedade.
                    </p>
                    <p>
                        <span>Somos especialistas em criar tecnologia para pessoas</span>, para melhorar a vida delas, possibilitando 
                        capacitações, disseminação do conhecimento, inscrição em programas sociais, prêmios culturais e 
                        demais iniciativas que ajudam a transformar o mundo em que vivem.
                    </p>
                </div>
            </div>
        )
    }
}