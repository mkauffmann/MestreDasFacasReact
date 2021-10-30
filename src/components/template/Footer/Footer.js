import React from 'react'
import './Footer.css'
import facebook from '../../../assets/imgs/footer/facebook.png'
import instagram from '../../../assets/imgs/footer/instagram.png'
import youtube from '../../../assets/imgs/footer/youtube.png'
import twitter from '../../../assets/imgs/footer/twitter.png'



function Footer(props) {

    return (
        <>
            <footer>
                {/* Inicio footer desktop */}
                <div className="container-fluid d-flex footer">
                    <div className="container col-12 d-flex footer ">
                        <div className="container col-3 alinhaFooter">
                            <a className="footer linkFooter" href="#">Explorar Categorias</a>

                        </div>
                        <div className="container col-3 footer">Redes Sociais

                        </div>
                        <div className="container col-3 footer">Formas Pagamento</div>
                        <div className="container col-3 endereco">Avenida Paulista 1560, 3º Andar </div>
                    </div>
                </div>
                <div className="container-fluid d-flex footer ">
                    <div className="container ro col-12 d-flex footer ">
                        <div className="container col-3 footer atendimento alinhaFooter">
                            <a className="footer linkFooter" href="#">Atendimento</a>

                        </div>
                        <div className="container col-3 iconeRed footer">
                            <a href="https://www.facebook.com/Mestre-das-Facas-109510481482419/" target="_blank"><img className="icones" src={facebook} /></a>
                            <a href="https://www.instagram.com/eimestredasfacas?r=nametag/" target="_blank"><img className="icones icone-espaco" src={instagram} /></a>


                        </div>
                        <div className="container col-3  footer"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27.5651 15.31C26.7903 15.0277 25.9713 14.886 25.1467 14.8916C22.4801 14.8916 20.5967 16.235 20.5834 18.1633C20.5667 19.58 21.9217 20.3783 22.9467 20.8516C23.9984 21.3383 24.3501 21.645 24.3467 22.08C24.3401 22.7416 23.5067 23.0416 22.7317 23.0416C21.6667 23.0416 21.0851 22.8933 20.1901 22.5216L19.8584 22.3666L19.4801 24.5866C20.1284 24.8566 21.2967 25.0883 22.5034 25.1083C25.3384 25.1083 27.1917 23.7733 27.2134 21.7216C27.2367 20.59 26.5034 19.735 24.9601 19.0283C24.0217 18.57 23.4401 18.2633 23.4401 17.7983C23.4401 17.3866 23.9384 16.9466 24.9801 16.9466C25.6733 16.9299 26.3623 17.0599 27.0017 17.3283L27.2517 17.44L27.6301 15.295L27.5651 15.31ZM34.4851 15.0716H32.4017C31.7534 15.0716 31.2651 15.25 30.9817 15.8933L26.9751 24.97H29.8101L30.3767 23.4816L33.8367 23.485C33.9184 23.8333 34.1684 24.97 34.1684 24.97H36.6684L34.4851 15.0716ZM16.7484 14.9883H19.4501L17.7601 24.8916H15.0617L16.7484 14.985V14.9883ZM9.89008 20.4466L10.1701 21.8216L12.8101 15.0716H15.6717L11.4201 24.9566H8.56508L6.23174 16.5866C6.19395 16.4486 6.1052 16.3301 5.98341 16.255C5.14241 15.8205 4.25132 15.4909 3.33008 15.2733L3.36674 15.065H7.71508C8.30508 15.0883 8.78008 15.2733 8.93841 15.9033L9.88841 20.4516V20.4466H9.89008ZM31.1517 21.4566L32.2284 18.6866C32.2151 18.7166 32.4501 18.115 32.5867 17.7433L32.7717 18.5983L33.3967 21.455H31.1501V21.4566H31.1517Z"
                                fill="#FFC07F" />
                        </svg><svg class="iconPagamento" width="32" height="32" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.125 24.041L15.364 24.234C13.7438 25.3149 11.8387 25.8896 9.891 25.885C4.427 25.885 0 21.464 0 16C0 10.541 4.427 6.11504 9.885 6.11504C11.912 6.11504 13.797 6.71904 15.36 7.76004C15.283 7.824 15.2096 7.8921 15.14 7.96404C12.803 9.98404 11.459 12.917 11.459 16C11.459 19.083 12.798 22.016 15.126 24.041H15.125ZM22.115 6.11504C20.1674 6.10905 18.2618 6.68158 16.64 7.76004C16.719 7.82804 16.797 7.89604 16.86 7.96404C18.0144 8.96083 18.9406 10.1945 19.5758 11.5811C20.211 12.9677 20.5402 14.4749 20.541 16C20.541 19.079 19.202 22.011 16.874 24.041C16.7948 24.1059 16.7151 24.1702 16.635 24.234C18.2549 25.3156 20.1602 25.8904 22.108 25.885C27.572 25.885 31.999 21.464 31.999 16C31.999 10.541 27.572 6.11504 22.114 6.11504H22.115ZM16 8.23504C14.8224 9.158 13.8704 10.3369 13.2162 11.6825C12.562 13.028 12.2227 14.5049 12.224 16.001C12.2221 17.498 12.5611 18.9758 13.2153 20.3222C13.8696 21.6687 14.8219 22.8485 16 23.772C16.131 23.673 16.251 23.569 16.375 23.46C18.459 21.647 19.776 18.98 19.776 16.001C19.7772 14.5049 19.4378 13.0281 18.7836 11.6826C18.1294 10.3371 17.1775 9.1581 16 8.23504Z"
                                    fill="#FFC07F" />
                            </svg>
                        </div>
                        <div className="container col-3 endereco atendimento">CEP 0000-000, Bela Vista, São Paulo/SP</div>
                    </div>
                </div>
                <div class="container-fluid d-flex footer ">
                    <div class="container ro col-12 d-flex footer ">
                        <div class="container col-3">
                            <a class="footer linkFooter" href="#">Quem somos</a>

                        </div>
                        <div class="container col-3 iconeRed footer">
                            <a href="https://youtube.com/channel/UCcDiqj726UwCd9MYwmpVOmA/" target="_blank"><img className="icones" src={youtube} /></a>
                            <a href="https://twitter.com/FacasMestre?s=08/" target="_blank"><img className="icones icone-espaco" src={twitter} /></a>
                        </div>
                        <div class="container col-3 footer"><svg class="iconBoleto" width="32" height="32" viewBox="0 0 32 32"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 7V25H4V7H2ZM6 7V25H12V7H6ZM14 7V25H16V7H14ZM18 7V25H22V7H18ZM24 7V25H26V7H24ZM28 7V25H30V7H28Z"
                                fill="#FFC07F" />
                        </svg>
                            <svg class="iconPix" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.6 22.0266L16.5867 18.0133C16.44 17.8666 16.2667 17.84 16.1734 17.84C16.08 17.84 15.9067 17.8666 15.76 18.0133L11.7334 22.04C11.28 22.4933 10.5734 23.2266 8.21338 23.2266L13.16 28.16C13.91 28.909 14.9267 29.3298 15.9867 29.3298C17.0467 29.3298 18.0634 28.909 18.8134 28.16L23.7734 23.2133C22.56 23.2133 21.5467 22.9733 20.6 22.0266ZM11.7334 9.95998L15.76 13.9866C15.8667 14.0933 16.0267 14.16 16.1734 14.16C16.32 14.16 16.48 14.0933 16.5867 13.9866L20.5734 9.99998C21.52 9.01331 22.6 8.78665 23.8134 8.78665L18.8534 3.83998C18.1034 3.09091 17.0867 2.67017 16.0267 2.67017C14.9667 2.67017 13.95 3.09091 13.2 3.83998L8.25338 8.77331C10.6 8.77331 11.32 9.54665 11.7334 9.95998Z"
                                    fill="#FFC07F" />
                                <path
                                    d="M28.1466 13.1334L25.1466 10.1201H23.4666C22.7466 10.1201 22.0266 10.4134 21.5333 10.9334L17.5333 14.9334C17.16 15.3067 16.6666 15.4934 16.1733 15.4934C15.6653 15.4862 15.1791 15.286 14.8133 14.9334L10.7866 10.8934C10.28 10.3867 9.58665 10.0934 8.85331 10.0934H6.89331L3.83998 13.16C3.09091 13.9101 2.67017 14.9267 2.67017 15.9867C2.67017 17.0467 3.09091 18.0634 3.83998 18.8134L6.89331 21.88H8.86665C9.58665 21.88 10.28 21.5867 10.8 21.08L14.8266 17.0534C15.2 16.68 15.6933 16.4934 16.1866 16.4934C16.68 16.4934 17.1733 16.68 17.5466 17.0534L21.56 21.0667C22.0666 21.5734 22.76 21.8667 23.4933 21.8667H25.1733L28.1733 18.8534C28.9255 18.0899 29.345 17.0597 29.34 15.9879C29.335 14.9161 28.906 13.8898 28.1466 13.1334Z"
                                    fill="#FFC07F" />
                            </svg>
                        </div>
                        <div class="container col-3 endereco footer atendimento"><a class="telefonesFooter"
                            href="tel:(11) 00000-0000">(11)
                            00000-0000</a> / <a class="telefonesFooter" href="tel:11111-111111">11111-111111</a>
                        </div>
                    </div>
                </div>
                <div class="container-fluid d-flex footer ">
                    <div class="container col-12 d-flex footer">
                        <div class="container col-9 alinhaFooter">
                            <a class="footer linkFooter" href="#">Trabalhe conosco</a>

                        </div>

                        <div class="container col-3">
                            <a class="footer linkFooter" href="emailto:contato@mestredasfacas.com.br">contato@mestredasfacas.com.br</a>

                        </div>
                    </div>
                </div>
                <div class="container-fluid col-12 d-flex footer">
                    <div class="container col-12 d-flex ">
                        <div class="container col-9 final">©Copyright 2021 - Mestre das Facas - Todos os direitos reservados Mestre
                            das Facas com Agência de Cutelaria Online S.A.</div>
                        <div class="container col-3 logo final"></div>
                    </div>

                </div>
                {/* <!-- INICIO  FOOTER MOBILE --> */}
                <div class="container-fluid col-12 d-flex footerMobile">
                    <div class="container col-12 footerMobile">Redes Sociais</div>

                </div>
                <div class="container-fluid col-12 footerMobile">
                    <div class="container col-12">
                        <a href="https://www.facebook.com/Mestre-das-Facas-109510481482419/" target="_blank"><img className="icones espaco-icone-mobile" src={facebook} /></a>
                        <a href="https://www.instagram.com/eimestredasfacas?r=nametag/" target="_blank"><img className="icones espaco-icone-mobile" src={instagram} /></a>
                        <a href="https://youtube.com/channel/UCcDiqj726UwCd9MYwmpVOmA/" target="_blank"><img className="icones espaco-icone-mobile" src={youtube} /></a>
                        <a href="https://twitter.com/FacasMestre?s=08/" target="_blank"><img className="icones espaco-icone-mobile" src={twitter} /></a>

                    </div>
                </div>
                <div class="container-fluid col-12 d-flex footerMobile ">
                    <div class="container col-12 footerMobile">Formas Pagamentos</div>

                </div>
                <div class="container-fluid col-12 footerMobile">
                    <div class="container col-12 footerMobile">
                        <svg width="40" className="espaco-icone-mobile" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M27.5651 15.31C26.7903 15.0277 25.9713 14.886 25.1467 14.8916C22.4801 14.8916 20.5967 16.235 20.5834 18.1633C20.5667 19.58 21.9217 20.3783 22.9467 20.8516C23.9984 21.3383 24.3501 21.645 24.3467 22.08C24.3401 22.7416 23.5067 23.0416 22.7317 23.0416C21.6667 23.0416 21.0851 22.8933 20.1901 22.5216L19.8584 22.3666L19.4801 24.5866C20.1284 24.8566 21.2967 25.0883 22.5034 25.1083C25.3384 25.1083 27.1917 23.7733 27.2134 21.7216C27.2367 20.59 26.5034 19.735 24.9601 19.0283C24.0217 18.57 23.4401 18.2633 23.4401 17.7983C23.4401 17.3866 23.9384 16.9466 24.9801 16.9466C25.6733 16.9299 26.3623 17.0599 27.0017 17.3283L27.2517 17.44L27.6301 15.295L27.5651 15.31ZM34.4851 15.0716H32.4017C31.7534 15.0716 31.2651 15.25 30.9817 15.8933L26.9751 24.97H29.8101L30.3767 23.4816L33.8367 23.485C33.9184 23.8333 34.1684 24.97 34.1684 24.97H36.6684L34.4851 15.0716ZM16.7484 14.9883H19.4501L17.7601 24.8916H15.0617L16.7484 14.985V14.9883ZM9.89008 20.4466L10.1701 21.8216L12.8101 15.0716H15.6717L11.4201 24.9566H8.56508L6.23174 16.5866C6.19395 16.4486 6.1052 16.3301 5.98341 16.255C5.14241 15.8205 4.25132 15.4909 3.33008 15.2733L3.36674 15.065H7.71508C8.30508 15.0883 8.78008 15.2733 8.93841 15.9033L9.88841 20.4516V20.4466H9.89008ZM31.1517 21.4566L32.2284 18.6866C32.2151 18.7166 32.4501 18.115 32.5867 17.7433L32.7717 18.5983L33.3967 21.455H31.1501V21.4566H31.1517Z"
                                fill="#FFC07F" />
                        </svg>
                        <svg width="32" className="espaco-icone-mobile" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.125 24.041L15.364 24.234C13.7438 25.3149 11.8387 25.8896 9.891 25.885C4.427 25.885 0 21.464 0 16C0 10.541 4.427 6.11504 9.885 6.11504C11.912 6.11504 13.797 6.71904 15.36 7.76004C15.283 7.824 15.2096 7.8921 15.14 7.96404C12.803 9.98404 11.459 12.917 11.459 16C11.459 19.083 12.798 22.016 15.126 24.041H15.125ZM22.115 6.11504C20.1674 6.10905 18.2618 6.68158 16.64 7.76004C16.719 7.82804 16.797 7.89604 16.86 7.96404C18.0144 8.96083 18.9406 10.1945 19.5758 11.5811C20.211 12.9677 20.5402 14.4749 20.541 16C20.541 19.079 19.202 22.011 16.874 24.041C16.7948 24.1059 16.7151 24.1702 16.635 24.234C18.2549 25.3156 20.1602 25.8904 22.108 25.885C27.572 25.885 31.999 21.464 31.999 16C31.999 10.541 27.572 6.11504 22.114 6.11504H22.115ZM16 8.23504C14.8224 9.158 13.8704 10.3369 13.2162 11.6825C12.562 13.028 12.2227 14.5049 12.224 16.001C12.2221 17.498 12.5611 18.9758 13.2153 20.3222C13.8696 21.6687 14.8219 22.8485 16 23.772C16.131 23.673 16.251 23.569 16.375 23.46C18.459 21.647 19.776 18.98 19.776 16.001C19.7772 14.5049 19.4378 13.0281 18.7836 11.6826C18.1294 10.3371 17.1775 9.1581 16 8.23504Z"
                                fill="#FFC07F" />
                        </svg>
                        <svg width="32" className="espaco-icone-mobile" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7V25H4V7H2ZM6 7V25H12V7H6ZM14 7V25H16V7H14ZM18 7V25H22V7H18ZM24 7V25H26V7H24ZM28 7V25H30V7H28Z"
                                fill="#FFC07F" />
                        </svg>
                        <svg width="32" className="espaco-icone-mobile" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.6 22.0266L16.5867 18.0133C16.44 17.8666 16.2667 17.84 16.1734 17.84C16.08 17.84 15.9067 17.8666 15.76 18.0133L11.7334 22.04C11.28 22.4933 10.5734 23.2266 8.21338 23.2266L13.16 28.16C13.91 28.909 14.9267 29.3298 15.9867 29.3298C17.0467 29.3298 18.0634 28.909 18.8134 28.16L23.7734 23.2133C22.56 23.2133 21.5467 22.9733 20.6 22.0266ZM11.7334 9.95998L15.76 13.9866C15.8667 14.0933 16.0267 14.16 16.1734 14.16C16.32 14.16 16.48 14.0933 16.5867 13.9866L20.5734 9.99998C21.52 9.01331 22.6 8.78665 23.8134 8.78665L18.8534 3.83998C18.1034 3.09091 17.0867 2.67017 16.0267 2.67017C14.9667 2.67017 13.95 3.09091 13.2 3.83998L8.25338 8.77331C10.6 8.77331 11.32 9.54665 11.7334 9.95998Z"
                                fill="#FFC07F" />
                            <path
                                d="M28.1466 13.1334L25.1466 10.1201H23.4666C22.7466 10.1201 22.0266 10.4134 21.5333 10.9334L17.5333 14.9334C17.16 15.3067 16.6666 15.4934 16.1733 15.4934C15.6653 15.4862 15.1791 15.286 14.8133 14.9334L10.7866 10.8934C10.28 10.3867 9.58665 10.0934 8.85331 10.0934H6.89331L3.83998 13.16C3.09091 13.9101 2.67017 14.9267 2.67017 15.9867C2.67017 17.0467 3.09091 18.0634 3.83998 18.8134L6.89331 21.88H8.86665C9.58665 21.88 10.28 21.5867 10.8 21.08L14.8266 17.0534C15.2 16.68 15.6933 16.4934 16.1866 16.4934C16.68 16.4934 17.1733 16.68 17.5466 17.0534L21.56 21.0667C22.0666 21.5734 22.76 21.8667 23.4933 21.8667H25.1733L28.1733 18.8534C28.9255 18.0899 29.345 17.0597 29.34 15.9879C29.335 14.9161 28.906 13.8898 28.1466 13.1334Z"
                                fill="#FFC07F" />
                        </svg>

                    </div>
                </div>
                <div class="container-fluid col-12 d-flex footerMobile">
                    <div class="container col-12 footerMobile finalMobile">©Copyright 2021 - Mestre das Facas - Todos os direitos reservados
                        Mestre
                        das Facas com Agência de Cutelaria Online S.A.</div>

                </div>
            </footer>

        </>
    )
}

export default Footer