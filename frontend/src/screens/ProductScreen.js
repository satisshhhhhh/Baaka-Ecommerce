import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  const products = [
    {
      _id: "1",
      name: "Airepods Wireless",
      image: "/images/airpods.jpg",
      description:
        "A LONG DESCRIPTION ABOUT your airpods lol lollololollolololol",
      brand: "Apple",
      category: "Electronics",
      price: 8999.99,
      countInStock: 3,
      rating: 4.5,
      numReviews: 4,
    },
    {
      _id: "2",
      name: "Iphone 11 pro 256GB Memory",
      image: "/images/phone.jpg",
      description:
        "A LONG DESCRIPTION ABOUT your iphoneeeee lol lollololollolololol",
      brand: "Apple",
      category: "Electronics",
      price: 89999.99,
      countInStock: 3,
      rating: 4.5,
      numReviews: 4,
    },
  ];
  //   const product = products.find((p) => p._id === match.params.id);
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div>
      <div>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ₹ {product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹ {product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="d-grid gap-2 p-3">
                  <Button
                    className="btn-dark"
                    style={{ backgroundColor: "black" }}
                    size="lg"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductScreen;
