import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import StoreIOS from "../../assets/shop/appstore.png";
import StoreAndroid from "../../assets/shop/googleplay.png";
import eshop from "../../assets/shop/e-shop.png";
import Brand1 from "../../assets/brands/brand-11.png";
import Brand2 from "../../assets/brands/brand-12.png";
import Brand3 from "../../assets/brands/brand-13.png";
import Brand4 from "../../assets/brands/brand-14.png";
import Brand5 from "../../assets/brands/brand-15.png";
import Brand6 from "../../assets/brands/brand-16.png";
import Brand7 from "../../assets/brands/brand-17.png";
import Brand8 from "../../assets/brands/brand-18.png";

const Section5 = () => {
  return (
    <>
      <section className="shop-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                {" "}
                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
              </p>
              <Link to="/">
                <img
                  src={StoreIOS}
                  alt="IOS"
                  className="img-fluid  store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src={StoreAndroid}
                  alt="Android"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={eshop} alt="e-shop" className=" eshop img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="brand-section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand-image">
                      <img src={Brand1} alt="brand1" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand2} alt="Brand2" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand3} alt="Brand3" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand4} alt="Brand4" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand5} alt="Brand5" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand6} alt="Brand6" className="img-fluid" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand-image">
                      <img src={Brand3} alt="Brand3" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand4} alt="Brand4" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand5} alt="Brand5" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand6} alt="Brand6" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand7} alt="Brand7" className="img-fluid" />
                    </div>
                    <div className="brand-image">
                      <img src={Brand8} alt="Brand8" className="img-fluid" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section5;
