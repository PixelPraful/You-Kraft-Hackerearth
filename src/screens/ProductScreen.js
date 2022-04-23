import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';

const ProductScreen = ({ history }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = {};
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    product.brand = searchParams.get('brand');
    product.image = searchParams.get('img');
    product.variety = searchParams.get('variety');
    product.country = searchParams.get('country');
    product.style = searchParams.get('style');
    product.rank = searchParams.get('rank');
    setProduct(product);
  }, []);

  return (
    <>
      <button className="btn btn-dark my-3" onClick={history.goBack}>
        Go Back
      </button>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.variety}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Brand: {product.brand}
            </ListGroup.Item>
            <ListGroup.Item>
              Style: {product.style}
            </ListGroup.Item>
            <ListGroup.Item>
              Country: {product.country}
            </ListGroup.Item>
            <ListGroup.Item>
              Top Ten: {product.rank}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
