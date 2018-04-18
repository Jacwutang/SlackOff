import React from 'react';
import Header from './header/header_container';
import Footer from './footer/Footer';
import Introduction from './introduction/Introduction';

export default () => {
  return(
    <div className="container">
      <Header />
      <Introduction />
      <Footer />
    </div>
  );
};
