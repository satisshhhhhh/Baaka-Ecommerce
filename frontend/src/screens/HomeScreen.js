import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
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
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
