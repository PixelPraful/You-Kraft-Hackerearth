import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product, img, id }) => {
  return (
    <Card className="my-3 p-3 rounded h-100">
      <Link to={`/product/${id}?brand=${product.Brand}&&img=${img.Image}&&variety=${product.Variety}&&country=${product.Country}&style=${product.Style}&rank=${product['Top Ten']}`}>
        <Card.Img height="200px" src={img.Image} variant='top' loading='lazy' />
      </Link>
      <Card.Body>
        <Card.Text as="div">
          <span className="badge badge-danger">{product['Top Ten']}</span>
        </Card.Text>
        <br />
        <Link to={`/product/${id}?brand=${product.Brand}&&img=${img.Image}&&variety=${product.Variety}&&country=${product.Country}&style=${product.Style}&rank=${product['Top Ten']}`}>
          <Card.Title as="div">
            <strong>{product.Variety}</strong>
          </Card.Title>
        </Link>
        <Card.Text className="my-2" as="div">
          <Rating
            value={parseInt(product.Stars, 10) || 0}
            text={product.Stars.toString() || '0'}
          />
        </Card.Text>
        <Card.Text as="h6">Brand: {product.Brand}</Card.Text>
        <Card.Text>Country: {product.Country}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
