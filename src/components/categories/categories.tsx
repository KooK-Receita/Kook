import { Col, Row } from "react-bootstrap";
import Category from "./card/category";
import "./categories.css";
import arrow from "../../assets/arrow.png";
import React, { useRef, useEffect } from "react";

function Categories() {
  return (
    <div className="category-container">
      <Col md={9}>
        <Row className="category-row">
          <Category />
        </Row>
      </Col>
    </div>
  );
}

export default Categories;
