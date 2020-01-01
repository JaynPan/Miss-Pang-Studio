import React from 'react';

import Header from './header';
import Footer from './footer';
import headerStyles from './layout.module.scss';
import "../styles/index.scss" 

export default function Layout(props) {
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
