import { Col, Row } from "react-bootstrap";
import Category from "./card/category";
import "./categories.css";
import arrow from "../../assets/arrow.png";
import React, { useRef } from "react";

function Categories() {
  const ref = useRef(null);

  const scroll = (scrollOffset: number) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="category-container" ref={ref}>
      <div className="arrow left-arrow">
        <img src={arrow} onClick={() => scroll(-20)} />
      </div>

      <Col md={9}>
        <Row className="category-row">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </Row>
      </Col>

      <div className="arrow right-arrow">
        <img src={arrow} onClick={() => scroll(20)} />
      </div>
    </div>
  );
}

export default Categories;
