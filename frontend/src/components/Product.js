import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "#383c3c" }}
        >
          <Card.Title as="div">
            <h4>{product.name}</h4>
          </Card.Title>
        </Link>

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
