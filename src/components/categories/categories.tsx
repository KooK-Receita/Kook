import { Col, Row } from "react-bootstrap";
import Category from "./card/category";
import "./categories.css";
import arrow from "../../assets/arrow.png";
import React, { useRef, useEffect } from "react";

function Categories() {
  return (
    <div className="category-container">
      <div className="arrow left-arrow">
        <img src={arrow} />
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
        <img src={arrow} />
      </div>
    </div>
  );
}

export default Categories;
