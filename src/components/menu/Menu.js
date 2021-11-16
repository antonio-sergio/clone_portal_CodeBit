import React, {Component} from 'react';
import headImg from './img/head-menu-bar-codebit-large.png';
import certifiedImg from './img/b-corporation.png';
import awsImg from './img/aws-consulting-partner.png';
import './Menu.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default class Menu extends Component{
    render(){
        return (
            <div className="nav-menu">
                <div className="logo">
                    <img src={headImg} alt="logo da codebit" ></img>
                </div>
                <nav>
                    <ul>
                        <li className="active"><a href="/">Início</a></li>
                        <li><AnchorLink href='#who-are-we'>Quem Somos</AnchorLink></li>
                        <li><AnchorLink href='#contact'>Contato</AnchorLink></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </nav>
                <div className="certifieds">
                    <img src={certifiedImg} alt="logo de certificado B corporation"></img>
                    <img src={awsImg} alt="logo aws consulting partner"></img>
                </div>
            </div>
        )
    }
}