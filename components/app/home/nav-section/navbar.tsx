'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import BBIcon from '@/public/image/bb-program-icon.svg';
import TestimonialIcon from '@/public/image/testimonial-icon.svg';
import CoachingIcon from '@/public/image/coaching-icon.svg';
import NavigationLink from '@/components/ui/navigation-link';
import { Col, Row } from 'antd';

const Navbar = () => {
  return (
    <Row>
      <Col xs={24} sm={24} md={24}>
        <motion.div className="nav-bar">
          <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
            className="link-box"
          >
            <NavigationLink href="/coaching">
              <Image
                src={CoachingIcon}
                width={42}
                height={42}
                alt="link icon"
              />
              <h5>coaching</h5>
            </NavigationLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
            className="link-box"
          >
            <NavigationLink href="/testimonials">
              <Image
                src={TestimonialIcon}
                width={42}
                height={42}
                alt="link icon"
              />
              <h5>testimonials</h5>
            </NavigationLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
            className="link-box"
          >
            <NavigationLink href="/training">
              <Image src={BBIcon} width={42} height={42} alt="link icon" />
              <h5>training</h5>
            </NavigationLink>
          </motion.div>
        </motion.div>
      </Col>
    </Row>
  );
};

export default Navbar;
