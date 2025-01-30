import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

const Section6 = () => {
  return (
    <section className="blog-section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user-image">
                  <img src={User1} alt="User1" className="img-fluid" />
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>BY AMELIE NEWLOVE</h5>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user-image">
                  <img src={User2} alt="User2" className="img-fluid" />
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>BY AMELIE NEWLOVE</h5>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user-image">
                  <img src={User3} alt="User3" className="img-fluid" />
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>BY AMELIE NEWLOVE</h5>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user-image">
                  <img src={User4} alt="User4" className="img-fluid" />
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>BY AMELIE NEWLOVE</h5>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default Section6;
