import React from 'react'
import './Home.css'
import Banners from '../../components/macro/Banners/Banner'
import Card from '../../components/macro/CardHome/Card'
import Card2 from '../../components/macro/CardHome/Card2'
import Patrocinio from '../../components/macro/Banners/Patrocinio'


function Home(props) {

    return (
        <main>
            <Banners />
            <Patrocinio />
            {/* <!--DESTAQUE DE PRODUTOS --> */}
            <div class="container destaques">
                <h2 class="destaques">Nossos Destaques</h2>
            </div>
            <Card />

            {/* <!--BEGING SECOND BANNER --> */}
            <Patrocinio />
            {/* <!-- NOVIDADE DE PRODUTOS --> */}
            <div class="container destaques">
                <h2 class="destaques">Novidades</h2>
            </div>
            <Card2 />

            {/* <!-- BEGING THIRD BANNER --> */}
            <Patrocinio />
        </main>
    )
}

export default Home