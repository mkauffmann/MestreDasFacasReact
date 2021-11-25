import React from 'react'
import './Banner.css'
import { Carousel } from 'react-bootstrap'
import Banner2 from '../../../assets/imgs/banners/BANNER4.jpg'
import Banner3 from '../../../assets/imgs/banners/banner-1.png'
import Banner4 from '../../../assets/imgs/banners/banner-5.png'
import { Link } from 'react-router-dom'

function Banner(props) {

    return (
        <>

            <div className="container carousel-custom"  >
                <Carousel variant="light">
                    <Carousel.Item>
                        <Link to="/category/1"><img
                            className="d-block w-100 carousel"
                            src={Banner4}
                            alt="First slide"
                        /></Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/product/21"><img
                            className="d-block w-100 carousel"
                            src={Banner2}
                            alt="Second slide"
                        /></Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/product/20"><img
                            className="d-block w-100 carousel"
                            src={Banner3}
                            alt="Third slide"
                        /></Link>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default Banner