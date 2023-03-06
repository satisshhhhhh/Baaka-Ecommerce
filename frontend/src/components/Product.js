import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a
          href={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "#383c3c" }}
        >
          <Card.Title as="div">
            <h2>{product.name}</h2>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          ></Rating>
        </Card.Text>

        <Card.Text as="h3">₹ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
