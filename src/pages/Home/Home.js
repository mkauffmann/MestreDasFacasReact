import React from 'react'
import './Home.css'
import Banners from '../../components/macro/Banners/Banner'
import Card from '../../components/macro/CardHome/Card'
import Faca1 from '../../assets/imgs/produtos/1.jpeg'
import Faca2 from '../../assets/imgs/produtos/2.jpeg'
import Faca3 from '../../assets/imgs/produtos/3.jpeg'
import Faca4 from '../../assets/imgs/produtos/4.jpeg'
import Faca5 from '../../assets/imgs/produtos/5.jpeg'
import Faca6 from '../../assets/imgs/produtos/6.jpeg'
import Faca7 from '../../assets/imgs/produtos/7.jpeg'
import Faca8 from '../../assets/imgs/produtos/8.jpeg'
import Patrocinio from '../../components/macro/Banners/Patrocinio'
import Brinox from '../../assets/imgs/banners/brinox.png'
import Pepsi from '../../assets/imgs/banners/pepsi.png'
import Tramontina from '../../assets/imgs/banners/tramontina.png'


function Home(props) {

    return (
        <main>
            <Banners />
            <a href="https://www.brinoxshop.com.br/" target="_blank"><Patrocinio imagem={Brinox} /></a>
            {/* <!--DESTAQUE DE PRODUTOS --> */}
            <div className="container destaques">
                <h2 className="destaques">Nossos Destaques</h2>
            </div>
            <div className="container col-12 d-flex">
                <Card nomeProduto="Faca-A47" imagem={Faca1} preco="156,50" parcelamento="12,30" />
                <Card nomeProduto="Mc_Carioca" className="ocultaProduto1" imagem={Faca2} preco="180,50" parcelamento="16,00" />
                <Card nomeProduto="XTR-Lich" imagem={Faca3} preco="160,50" parcelamento="19,36" />
                <Card nomeProduto="Trx-360" className="ocultaProduto2" imagem={Faca4} preco="50,00" parcelamento="11,20" />
            </div>

            {/* <!--BEGING SECOND BANNER --> */}
            <a href="https://www.pepsico.com.br/" target="_blank"><Patrocinio imagem={Pepsi} /></a>
            {/* <!-- NOVIDADE DE PRODUTOS --> */}
            <div className="container destaques">
                <h2 className="destaques">Novidades</h2>
            </div>
            <div className="container col-12 d-flex">
                <Card nomeProduto="Faca-A47" imagem={Faca5} preco="156,50" parcelamento="12,30" />
                <Card nomeProduto="Mc_Carioca" className="ocultaProduto1" imagem={Faca6} preco="180,50" parcelamento="16,00" />
                <Card nomeProduto="XTR-Lich" imagem={Faca7} preco="160,50" parcelamento="19,36" />
                <Card nomeProduto="Trx-360" className="ocultaProduto2" imagem={Faca8} preco="50,00" parcelamento="11,20" />
            </div>

            {/* <!-- BEGING THIRD BANNER --> */}
            <a href="https://www.tramontina.com.br/" target="_blank"><Patrocinio imagem={Tramontina} /></a>
        </main>
    )
}

export default Home