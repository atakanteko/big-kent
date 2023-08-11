import React from 'react';
import { Col, Row } from 'antd';
import Image from 'next/image';
import ListIcon from '@/public/image/list-icon.svg';
import CatchWordImg from '@/public/image/catchword-img2.jpeg';

const Catchword = () => {
  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={12}
        xxl={12}
        className="catchword"
      >
        <div className="catchword-text">
          <h1>Transform your physique with my fitness plan.</h1>
          <ul>
            <li>
              <Image src={ListIcon} width={24} height={24} alt="list icon" />
              <span>Increase Muscle and Strength</span>
            </li>
            <li>
              <Image src={ListIcon} width={24} height={24} alt="list icon" />
              <span>Be Healthier than before</span>
            </li>
            <li>
              <Image src={ListIcon} width={24} height={24} alt="list icon" />
              <span>Increase Stamina</span>
            </li>
          </ul>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
        <div className="image-wrapper">
          <Image src={CatchWordImg} layout="responsive" alt="alex kent" />
        </div>
      </Col>
    </Row>
  );
};

export default Catchword;
