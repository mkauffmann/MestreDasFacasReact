import Button from '../../components/micro/Button/Button'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from '../../components/micro/ProductList/ProductList';
import './Cart.css'
import DividingBar from '../../components/micro/Login/DividingBar/DividingBar';

function Cart(props) {

    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)
    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("itemRequest")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
    }, [])

    return (
        <>
            <Container>
                <h1 >Meu Carrinho</h1>
                <DividingBar singleLine />
                <Row>
                    <Col className="d-flex flex-column">
                        <ProductList products={products} />
                        <div className="align-self-end">
                            <Button navigation route="/" label="Continuar comprando" class="btn-cancelar my-3 mx-3" />
                            {products === null || products.length == 0
                            ? ""
                            : <Button navigation route="/checkout" label="Fechar pedido" class="btn-principal my-3" />}
                            
                        </div>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Cart