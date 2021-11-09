import React, {Component} from 'react';
import headImg from './img/head-menu-bar-codebit-large.png';
import certifiedImg from './img/b-corporation.png';
import awsImg from './img/aws-consulting-partner.png';
import './Menu.css';


export default class Menu extends Component{
    render(){
        return (
            <div className="nav-menu">
                <div className="logo">
                    <img src={headImg} alt="logo da codebit" ></img>
                </div>
                <div className="nav-links">
                    <ul>
                        <li className="active"><a href="/">Início</a></li>
                        <li><a href="/">Quem Somos</a></li>
                        <li><a href="/">Contato</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </div>
                <div className="certifieds">
                    <img src={certifiedImg} alt="logo de certificado B corporation"></img>
                    <img src={awsImg} alt="logo aws consulting partner"></img>
                </div>
            </div>
        )
    }
}