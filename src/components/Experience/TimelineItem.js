// src/components/TimelineItem.js
import React from "react";
import { Row, Col } from "react-bootstrap";

function TimelineItem({ year, title, description }) {
  return (
    <Row className="timeline-item">
      <Col md={3} className="timeline-year">
        <h3>{year}</h3>
      </Col>
      <Col md={9} className="timeline-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </Col>
    </Row>
  );
}

export default TimelineItem;
