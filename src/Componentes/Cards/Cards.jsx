import React, { useEffect } from "react";

import Products from "../Card/Card";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Cards({ ProductsAll }) {


    const products = ProductsAll

    return (
        <div>
            <h2>Resultados : {products.length}</h2>
            <Container>
                <Row gap={2} >
                {products?.map((e) => {
                    return (<>
                        <Col sm={12} md={4} >
                            <Products
                                key={e.id}
                                id={e.id}
                                name={e.name}
                                image={e.image}
                                rating={e.rating}
                                price={e.price}
                            />
                        </Col>
                    </>)
                })
                }
                </Row>
            </Container>
        </div>
    )
}