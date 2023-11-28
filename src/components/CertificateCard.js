import React from 'react';
import { Col } from "react-bootstrap";

export const CertificateCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" style={{ width: '120%', height: '250px', objectFit: 'cover' }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
