import React, {Component} from 'react';
import separtorImg from "./img/separator.png";
import logoFacebook from "./img/logo-facebook.png";
import logoInstagram from "./img/logo-instagram.png";
import logoLinkedln from "./img/logo-linkedln.png";
import happyFaceLogo from "./img/happy-face-3.png";
import "./Contact.css";

export default class Contact extends Component{
    render(){
        return (
            <div id="contact" className="contact">
                <div className="header-contact">
                    <div>
                        <h3>Assine nossa Newsletter</h3>
                        <h4>Receba nossos conteúdos</h4>
                    </div>
                    <div>
                        <input type="text" placeholder="Digite seu email" ></input>
                        <hr></hr>
                        <button type="submit" >ASSINAR NEWSLETTER <span>>>></span> </button>
                    </div>
                </div>
                <div className="contact-panel">
                    <div className="contact-left">
                        <h3>Contato</h3>
                        <img src={separtorImg} alt="imagem de setas contrapostas servindo de divisão de sessões"></img>
                        <p>
                            Entre em contato conosco para trocarmos ideias e juntos mudarmos a comunidade 
                            que vivemos por meio da tecnologia.
                        </p>
                        <p>
                            Tel +55 11 3014 2103 <br/>
                            Tel +55 16 3723 0356 <br/>
                            <a href="mailto:contato@codebit.com.br">contato@codebit.com.br</a>
                        </p>
                        <h4>Quer trabalhar conosco?</h4>
                        <p>
                            <strong>Envie e-mail para:</strong> <br/>
                            <a href="rh@codebit.com.br">rh@codebit.com.br</a>
                        </p>
                        <h5>Mapa do Site _</h5>
                        <div className="contact-links">
                            <a href="/">Início</a>
                            <a href="/">Quem Somos</a>
                            <a href="/">Contato</a>
                            <a href="/">Blog</a>
                        </div>
                        <div className="links-social">
                            <a href="/"><img src={logoFacebook} alt="logo do facebook"></img></a>
                            <a href="/"><img src={logoLinkedln} alt="logo do linkedln"></img></a>
                            <a href="/"><img src={logoInstagram} alt="logo do instagram"></img></a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form >
                            <label>Nome</label>
                            <input type="text"></input>
                            <hr></hr>
                            <div>
                                <div>
                                    <label>Email</label>
                                    <input type="email" placeholder="Seu email"></input>
                                    <hr></hr>
                                </div>
                                <div>
                                    <label>Telefone/Celular</label>
                                    <input type="tel" placeholder="(xx) xxxx xxxx"></input>
                                    <hr></hr>
                                </div>
                            </div>
                            <label>Empresa</label>
                            <input type="text"></input>
                            <hr></hr>
                            <label>Assunto</label>
                            <input type="text"></input>
                            <hr></hr>
                            <label for="">Mensagem</label>
                            <textarea id="" name=""
                                    rows="3" cols="33">
                            </textarea>
                            <hr></hr>
                        </form>
                        {/* <div>
                            <form action="?" method="POST">
                                <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                                <br/>
                                <input type="submit" value="Submit"></input>
                            </form>
                        </div> */}
                    </div> 
                    
                </div>
               
                <footer>
                    <span>Av. Paulista 171, andar 4, Bela Vista - São Paulo - 01311-000</span>
                    <span><img className="logo-footer" src={happyFaceLogo} alt="logo da codebit"></img></span>
                    <span>Todos os direitos reservados - 2021</span>
                </footer>
            </div>
        )
    }
}