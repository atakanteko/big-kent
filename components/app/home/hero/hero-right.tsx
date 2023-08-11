import React from 'react';
import { Col } from 'antd';
import Image from 'next/image';
import BigKent from '@/public/image/big-kent.png';

const HeroRight = () => {
  return (
    <Col xs={24} md={24} lg={24} xl={12} xxl={12}>
      <div className="img-wrapper">
        <Image src={BigKent} layout="responsive" alt="the big kent" />
      </div>
    </Col>
  );
};

export default HeroRight;
