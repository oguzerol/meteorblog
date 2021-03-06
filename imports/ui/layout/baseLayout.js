import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export const BaseLayout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);
