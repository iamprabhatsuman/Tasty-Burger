import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";

const Cards = ({ cardData, renderRatingIcons }) => {
  return (
    <>
      <Col sm={6} lg={4} xl={3} className="mb-4">
        <Card className="overflow-hidden">
          <div className="overflow-hidden">
            <Card.Img variant="top" src={cardData.image} />
          </div>
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <div className="item-rating">
                {renderRatingIcons(cardData.rating)}
              </div>
              <div className="wishlist">
                <i className="bi bi-heart"></i>
              </div>
            </div>

            <Card.Title>{cardData.title}</Card.Title>
            <Card.Text>{cardData.paragraph}</Card.Text>

            <div className="d-flex align-items-center justify-content-between">
              <div className="menu-price">
                <h5 className="mb-0">${cardData.price}</h5>
              </div>
              <div className="add-to-cart">
                <Link to="/">
                  <i className="bi bi-bag me-2"></i>
                  Add To Cart
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Cards;
