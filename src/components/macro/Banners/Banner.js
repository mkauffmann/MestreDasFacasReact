import React from 'react'
import './Banner.css'
import { Carousel } from 'react-bootstrap'
import  Banner2  from '../../../assets/imgs/banners/BANNER4.jpg'
import  Banner3  from '../../../assets/imgs/banners/banner-1.png'
import  Banner4  from '../../../assets/imgs/banners/banner-5.png'

function Banner(props) {

    return (
        <>
       
        <div className="container"  >
        <Carousel variant="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel" 
                        src={Banner4}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel" 
                        src={Banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel"
                        src={Banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        
        </>
    )
}

export default Banner