import React, {Component} from 'react';
import separtorImg from "./img/separator.png";
import logoFacebook from "./img/logo-facebook.png";
import logoInstagram from "./img/logo-instagram.png";
import logoLinkedln from "./img/logo-linkedln.png";
import happyFaceLogo from "./img/happy-face-3.png";
<<<<<<< HEAD
import bCorporation from "./img/b-corporation.png";
import "./Contact.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

=======
import "./Contact.css";
>>>>>>> 5fc03ba0879b13942a019f78b1031b81349c8ae1

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
<<<<<<< HEAD
                        <img className="divisor" src={separtorImg} alt="imagem de setas contrapostas servindo de divisão de sessões"></img>
=======
                        <img src={separtorImg} alt="imagem de setas contrapostas servindo de divisão de sessões"></img>
>>>>>>> 5fc03ba0879b13942a019f78b1031b81349c8ae1
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
<<<<<<< HEAD
                        <nav>
                            <ul>
                                <li><a href="/">Início</a></li>
                                <li><AnchorLink href='#who-are-we'>Quem Somos</AnchorLink></li>
                                <li><AnchorLink href='#contact'>Contato</AnchorLink></li>
                                <li><a href="/">Blog</a></li>
                            </ul>
                        </nav>
=======
                        <div className="contact-links">
                            <a href="/">Início</a>
                            <a href="/">Quem Somos</a>
                            <a href="/">Contato</a>
                            <a href="/">Blog</a>
                        </div>
>>>>>>> 5fc03ba0879b13942a019f78b1031b81349c8ae1
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
<<<<<<< HEAD
                                rows="3" cols="33">
=======
                                    rows="3" cols="33">
>>>>>>> 5fc03ba0879b13942a019f78b1031b81349c8ae1
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
<<<<<<< HEAD
                    <span className="bCorporation"><img src={bCorporation} alt="logo b corporation"></img></span>
                    <span>Av. Paulista 171, andar 4, Bela Vista - São Paulo - 01311-000</span>
                    <span className="bFooter"><img className="logo-footer" src={happyFaceLogo} alt="logo da codebit"></img></span>
                    <span className="reserved">Todos os direitos reservados - 2021</span>
=======
                    <span>Av. Paulista 171, andar 4, Bela Vista - São Paulo - 01311-000</span>
                    <span><img className="logo-footer" src={happyFaceLogo} alt="logo da codebit"></img></span>
                    <span>Todos os direitos reservados - 2021</span>
>>>>>>> 5fc03ba0879b13942a019f78b1031b81349c8ae1
                </footer>
            </div>
        )
    }
}