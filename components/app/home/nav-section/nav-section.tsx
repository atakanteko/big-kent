import React from 'react';

import Navbar from './navbar';
import Catchword from './catchword';

const NavSection = () => {
  return (
    <section className="nav-section">
      <section className="global-container" style={{ height: '100%' }}>
        <Navbar />
        <Catchword />
      </section>
    </section>
  );
};

export default NavSection;
