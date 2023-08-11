import { Row } from 'antd';
import React from 'react';
import HeroLeft from './hero-left';
import HeroRight from './hero-right';

const Hero = () => {
  return (
    <div className="home-hero">
      <section className="global-container" style={{ height: '100%' }}>
        <section className="content">
          <Row gutter={16} className="content-row">
            <HeroLeft />
            <HeroRight />
          </Row>
        </section>

        <div className="vertical-text">
          <h3>
            you are fearless - you are fearless -you are fearless - you are
            fearless - you are fearless - you are fearless
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Hero;
