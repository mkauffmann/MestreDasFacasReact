import React from 'react'
import './Home.css'
import Banners from '../../components/macro/Banners/Banner'
import Card from '../../components/macro/CardHome/Card'
import Faca1 from '../../assets/imgs/produtos/1.jpeg'
import Faca2 from '../../assets/imgs/produtos/2.jpeg'
import Faca3 from '../../assets/imgs/produtos/3.jpeg'
import Faca4 from '../../assets/imgs/produtos/24.jpeg'
import Faca5 from '../../assets/imgs/produtos/25.jpeg'
import Faca6 from '../../assets/imgs/produtos/16.jpeg'
import Faca7 from '../../assets/imgs/produtos/14.jpeg'
import Faca8 from '../../assets/imgs/produtos/28.jpeg'
import Patrocinio from '../../components/macro/Banners/Patrocinio'
import Brinox from '../../assets/imgs/banners/brinox.png'
import Pepsi from '../../assets/imgs/banners/pepsi.png'
import Tramontina from '../../assets/imgs/banners/tramontina.png'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CategoryList from '../../components/macro/ProductList/CategoryList/CategoryList'


function Home(props) {
const [categories, setCategories] = useState([])

useEffect(() => {
    axios.get('http://localhost:8080/product/')
    .then((response) =>{
        setCategories(response.data)
        console.log(response.data)
    })
    .catch((error) =>{
        console.error("Aconteceu um erro!" + error)
    })
}, [])
    return (
        <main>
            <Banners />
            <a href="https://www.brinoxshop.com.br/" target="_blank"><Patrocinio imagem={Brinox} /></a>
            {/* <!--DESTAQUE DE PRODUTOS --> */}
            <div className="container destaques">
                <h2 className="destaques">Nossos Destaques</h2>
            </div>
            <div className="container cards">
              <CategoryList categories={categories} />
            </div>

            {/* <!--BEGING SECOND BANNER --> */}
            <a href="https://www.pepsico.com.br/" target="_blank"><Patrocinio imagem={Pepsi} /></a>
            {/* <!-- NOVIDADE DE PRODUTOS --> */}
            <div className="container destaques">
                <h2 className="destaques">Novidades</h2>
            </div>
            <div className="container cards">
            <CategoryList categories={categories} />
            </div>

            {/* <!-- BEGING THIRD BANNER --> */}
            <a href="https://www.tramontina.com.br/" target="_blank"><Patrocinio imagem={Tramontina} /></a>
        </main>
    )
}

export default Home